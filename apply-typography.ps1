Param()

$root = Join-Path (Get-Location) 'src\react-app'
Write-Host "Applying typography replacements in: $root"

$files = Get-ChildItem -Path $root -Recurse -Include *.tsx,*.ts,*.css,*.jsx,*.html -File

function Replace-InFile($path, $pattern, $replacement) {
    $txt = Get-Content $path -Raw
    $new = [regex]::Replace($txt, $pattern, $replacement, 'IgnoreCase')
    if ($new -ne $txt) {
        Set-Content -Path $path -Value $new -Encoding UTF8
        Write-Host "Updated: $path"
        return $true
    }
    return $false
}

$count = 0
foreach ($f in $files) {
    $p = $f.FullName
    $changed = $false

    # CSS font-family replacements
    $changed = (Replace-InFile $p 'font-family\s*:\s*["\']?Playfair Display["\']?\s*,\s*serif' 'font-family: var(--font-display)') -or $changed
    $changed = (Replace-InFile $p 'font-family\s*:\s*["\']?Montserrat["\']?\s*,\s*sans-serif' 'font-family: var(--font-sans)') -or $changed
    $changed = (Replace-InFile $p 'font-family\s*:\s*["\']?Inter["\']?\s*,\s*sans-serif' 'font-family: var(--font-default)') -or $changed

    # Inline React style fontFamily
    $changed = (Replace-InFile $p 'fontFamily\s*:\s*["\']Playfair Display["\']' "fontFamily: 'var(--font-display)'") -or $changed
    $changed = (Replace-InFile $p 'fontFamily\s*:\s*["\']Montserrat["\']' "fontFamily: 'var(--font-sans)'") -or $changed
    $changed = (Replace-InFile $p 'fontFamily\s*:\s*["\']Inter["\']' "fontFamily: 'var(--font-default)'") -or $changed

    # CSS font-weight
    $changed = (Replace-InFile $p 'font-weight\s*:\s*700' 'font-weight: var(--font-bold)') -or $changed
    $changed = (Replace-InFile $p 'font-weight\s*:\s*800' 'font-weight: var(--font-extrabold)') -or $changed
    $changed = (Replace-InFile $p 'font-weight\s*:\s*600' 'font-weight: var(--font-semibold)') -or $changed
    $changed = (Replace-InFile $p 'font-weight\s*:\s*500' 'font-weight: var(--font-medium)') -or $changed
    $changed = (Replace-InFile $p 'font-weight\s*:\s*400' 'font-weight: var(--font-normal)') -or $changed
    $changed = (Replace-InFile $p 'font-weight\s*:\s*300' 'font-weight: var(--font-light)') -or $changed

    # Inline fontWeight (React style) -> convert to string var(...)
    $changed = (Replace-InFile $p 'fontWeight\s*:\s*700' "fontWeight: 'var(--font-bold)'") -or $changed
    $changed = (Replace-InFile $p 'fontWeight\s*:\s*800' "fontWeight: 'var(--font-extrabold)'") -or $changed
    $changed = (Replace-InFile $p 'fontWeight\s*:\s*600' "fontWeight: 'var(--font-semibold)'") -or $changed
    $changed = (Replace-InFile $p 'fontWeight\s*:\s*500' "fontWeight: 'var(--font-medium)'") -or $changed
    $changed = (Replace-InFile $p 'fontWeight\s*:\s*400' "fontWeight: 'var(--font-normal)'") -or $changed
    $changed = (Replace-InFile $p 'fontWeight\s*:\s*300' "fontWeight: 'var(--font-light)'") -or $changed

    if ($changed) { $count++ }
}

Write-Host "Typography replacements complete. Files changed: $count"
