Param()

$root = Join-Path (Get-Location) 'src\react-app'
$tokensFile = Join-Path $root 'styles\tokens.css'

Write-Host "Starting normalization in: $root"

if (-not (Test-Path $tokensFile)) {
    Write-Error "Tokens file not found: $tokensFile"
    exit 1
}

$tokensText = Get-Content $tokensFile -Raw

# collect existing hex codes from tokens.css
$existingHex = @{}
[regex]::Matches($tokensText, '#([0-9a-fA-F]{6})') | ForEach-Object { $existingHex[$_.Groups[1].Value.ToUpper()] = $true }

# gather files to process
$exts = @('*.tsx','*.ts','*.css','*.jsx','*.html')
$files = Get-ChildItem -Path $root -Recurse -Include $exts -File

Write-Host "Files to scan: $($files.Count)"

$foundHex = @{}
$foundRgb = @{}

function Expand-ShortHex($h) {
    if ($h.Length -eq 3) {
        return ($h.ToCharArray() | ForEach-Object { "$_$_" }) -join ''
    }
    return $h
}

function HexToRgb($hex6) {
    $r = [Convert]::ToInt32($hex6.Substring(0,2),16)
    $g = [Convert]::ToInt32($hex6.Substring(2,2),16)
    $b = [Convert]::ToInt32($hex6.Substring(4,2),16)
    return "$r,$g,$b"
}

# scan files and collect color literals
foreach ($f in $files) {
    $txt = Get-Content $f.FullName -Raw
    # hex 3/6/8
    foreach ($m in [regex]::Matches($txt, '#([0-9a-fA-F]{3,8})')) {
        $raw = $m.Groups[1].Value
        if ($raw.Length -eq 3) { $hex = Expand-ShortHex $raw }
        elseif ($raw.Length -eq 4) { # short with alpha -> expand RGB and alpha
            $rgb = Expand-ShortHex $raw.Substring(0,3)
            $a = $raw.Substring(3,1) + $raw.Substring(3,1)
            $hex = $rgb + $a
        } else { $hex = $raw }
        # we only collect the base 6-hex (ignore alpha for token list)
        if ($hex.Length -ge 6) {
            $base6 = $hex.Substring(0,6).ToUpper()
            $foundHex[$base6] = $true
        }
    }
    # rgb/rgba
    foreach ($m in [regex]::Matches($txt, 'rgba?\s*\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})(?:\s*,\s*([0-9\.]+))?\s*\)', 'IgnoreCase')) {
        $r = [int]$m.Groups[1].Value; $g=[int]$m.Groups[2].Value; $b=[int]$m.Groups[3].Value
        $hex = '{0:X2}{1:X2}{2:X2}' -f $r,$g,$b
        $foundHex[$hex] = $true
    }
}

Write-Host "Unique base hex colors found: $($foundHex.Keys.Count)"

# prepare new tokens to add
$newTokens = @()
foreach ($hex in $foundHex.Keys) {
    if (-not $existingHex.ContainsKey($hex)) {
        $tokenName = "--color-$($hex.ToLower())"
        $tokenRgbName = "--color-$($hex.ToLower())-rgb"
        $rgb = HexToRgb $hex
        $newTokens += "  ${tokenName}: #$hex;"
        $newTokens += "  ${tokenRgbName}: $rgb;"
        $existingHex[$hex] = $true
    }
}

if ($newTokens.Count -gt 0) {
    Write-Host "Adding $($newTokens.Count/2) new tokens to $tokensFile"
    $insertion = "\n  /* Auto-generated color tokens */\n" + ($newTokens -join "\n") + "\n"
    # insert before final closing brace of :root if possible, otherwise append
    $out = $tokensText
    $pos = $out.LastIndexOf('}')
    if ($pos -gt 0) {
        $out = $out.Substring(0,$pos) + "\n" + $insertion + "}\n"
    } else {
        $out += "\n" + $insertion
    }
    Set-Content -Path $tokensFile -Value $out -Encoding UTF8
} else {
    Write-Host "No new tokens needed."
}

# now perform replacements in files
$changedFiles = @{}
foreach ($f in $files) {
    $txt = Get-Content $f.FullName -Raw
    $orig = $txt

    # replace 8-digit hex (#RRGGBBAA) -> rgba(var(--color-xxxxxx-rgb), alpha)
    $txt = [regex]::Replace($txt, '#([0-9a-fA-F]{6})([0-9a-fA-F]{2})', {
        param($m)
        $hex = $m.Groups[1].Value.ToUpper()
        $aa = $m.Groups[2].Value
        $dec = [Convert]::ToInt32($aa,16)
        $alpha = [math]::Round($dec/255,3)
        $tokenRgb = "--color-$($hex.ToLower())-rgb"
        return "rgba(var($tokenRgb), $alpha)"
    }, 'IgnoreCase')

    # replace 3-digit hex (#RGB) -> var(--color-rRggbb)
    $txt = [regex]::Replace($txt, '#([0-9a-fA-F]{3})\b', {
        param($m)
        $short = $m.Groups[1].Value
        $expanded = ($short.ToCharArray() | ForEach-Object { "$_$_" }) -join ''
        $token = "--color-$($expanded.ToLower())"
        return "var($token)"
    }, 'IgnoreCase')

    # replace 6-digit hex (#RRGGBB) -> var(--color-rrggbb)
    $txt = [regex]::Replace($txt, '#([0-9a-fA-F]{6})\b', {
        param($m)
        $hex = $m.Groups[1].Value.ToUpper()
        $token = "--color-$($hex.ToLower())"
        return "var($token)"
    }, 'IgnoreCase')

    # replace rgba(...) numeric -> rgba(var(--color-rrggbb-rgb), alpha)
    $txt = [regex]::Replace($txt, 'rgba?\s*\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})(?:\s*,\s*([0-9\.]+))?\s*\)', {
        param($m)
        $r=[int]$m.Groups[1].Value; $g=[int]$m.Groups[2].Value; $b=[int]$m.Groups[3].Value
        $a = $m.Groups[4].Value
        $hex = '{0:X2}{1:X2}{2:X2}' -f $r,$g,$b
        $tokenRgb = "--color-$($hex.ToLower())-rgb"
        if ($a -ne '') {
            return "rgba(var($tokenRgb), $a)"
        } else {
            return "var(--color-$($hex.ToLower()))"
        }
    }, 'IgnoreCase')

    if ($txt -ne $orig) {
        Set-Content -Path $f.FullName -Value $txt -Encoding UTF8
        $changedFiles[$f.FullName] = $true
        Write-Host "Updated: $($f.FullName)"
    }
}

Write-Host "Normalization complete. Files changed: $($changedFiles.Keys.Count)"
Write-Host "If you want to revert, use your VCS to inspect changes and revert as needed."
