# Phase 3 Aggressive Normalization
# Converts borders, spacing, shadows, and radius to tokens
# Uses [regex]::Replace to avoid PowerShell quoting issues

$root = Join-Path $PSScriptRoot "..\src\react-app"
$files = Get-ChildItem -Path $root -Recurse -Include *.tsx,*.ts,*.css | Where-Object { -not $_.PSIsContainer }

Write-Output "=== Phase 3 Aggressive Normalization ==="
Write-Output "Files to scan: $($files.Count)"
$filesChanged = 0
$replacementsCount = 0

function SafeWrite($path, $content) {
    try {
        Set-Content -Path $path -Value $content -Encoding UTF8 -Force
        $filesChanged++
    } catch {
        Write-Output "ERROR writing $path : $($_.Exception.Message)"
    }
}

foreach ($f in $files) {
    $path = $f.FullName
    $text = Get-Content -Raw -Encoding UTF8 -Path $path
    $orig = $text

    # ===== Border replacements =====
    $text = [regex]::Replace($text, "borderWidth\s*:\s*['\x22]1px['\x22]", 'borderWidth: "var(--border-thin)"')
    $text = [regex]::Replace($text, "borderWidth\s*:\s*['\x22]2px['\x22]", 'borderWidth: "var(--border-md)"')
    $text = [regex]::Replace($text, "borderWidth\s*:\s*['\x22]4px['\x22]", 'borderWidth: "var(--border-thick)"')

    $text = [regex]::Replace($text, "border(Left|Right|Top|Bottom)\s*:\s*['\x22]1px\s+solid", 'border$1: "var(--border-thin) solid')
    $text = [regex]::Replace($text, "border(Left|Right|Top|Bottom)\s*:\s*['\x22]2px\s+solid", 'border$1: "var(--border-md) solid')
    $text = [regex]::Replace($text, "border(Left|Right|Top|Bottom)\s*:\s*['\x22]4px\s+solid", 'border$1: "var(--border-thick) solid')
    
    $text = [regex]::Replace($text, "border\s*:\s*1px\s+solid", 'border: var(--border-thin) solid')
    $text = [regex]::Replace($text, "border\s*:\s*2px\s+solid", 'border: var(--border-md) solid')
    $text = [regex]::Replace($text, "border\s*:\s*4px\s+solid", 'border: var(--border-thick) solid')

    # ===== Spacing replacements (px values) =====
    $text = [regex]::Replace($text, "(padding|margin|gap)(Top|Bottom|Left|Right)?\s*:\s*['\x22]?4px['\x22]?", '$1$2: "var(--spacing-xs)"')
    $text = [regex]::Replace($text, "(padding|margin|gap)(Top|Bottom|Left|Right)?\s*:\s*['\x22]?8px['\x22]?", '$1$2: "var(--spacing-sm)"')
    $text = [regex]::Replace($text, "(padding|margin|gap)(Top|Bottom|Left|Right)?\s*:\s*['\x22]?12px['\x22]?", '$1$2: "var(--spacing-md)"')
    $text = [regex]::Replace($text, "(padding|margin|gap)(Top|Bottom|Left|Right)?\s*:\s*['\x22]?16px['\x22]?", '$1$2: "var(--spacing-md)"')
    $text = [regex]::Replace($text, "(padding|margin|gap)(Top|Bottom|Left|Right)?\s*:\s*['\x22]?32px['\x22]?", '$1$2: "var(--spacing-lg)"')
    $text = [regex]::Replace($text, "(padding|margin|gap)(Top|Bottom|Left|Right)?\s*:\s*['\x22]?64px['\x22]?", '$1$2: "var(--spacing-xl)"')

    $text = [regex]::Replace($text, "padding\s*:\s*4px", 'padding: var(--spacing-xs)')
    $text = [regex]::Replace($text, "padding\s*:\s*8px", 'padding: var(--spacing-sm)')
    $text = [regex]::Replace($text, "padding\s*:\s*12px", 'padding: var(--spacing-md)')
    $text = [regex]::Replace($text, "padding\s*:\s*16px", 'padding: var(--spacing-md)')
    $text = [regex]::Replace($text, "padding\s*:\s*32px", 'padding: var(--spacing-lg)')
    $text = [regex]::Replace($text, "padding\s*:\s*64px", 'padding: var(--spacing-xl)')

    $text = [regex]::Replace($text, "margin\s*:\s*4px", 'margin: var(--spacing-xs)')
    $text = [regex]::Replace($text, "margin\s*:\s*8px", 'margin: var(--spacing-sm)')
    $text = [regex]::Replace($text, "margin\s*:\s*12px", 'margin: var(--spacing-md)')
    $text = [regex]::Replace($text, "margin\s*:\s*16px", 'margin: var(--spacing-md)')
    $text = [regex]::Replace($text, "margin\s*:\s*32px", 'margin: var(--spacing-lg)')
    $text = [regex]::Replace($text, "margin\s*:\s*64px", 'margin: var(--spacing-xl)')

    # ===== Shadow replacements =====
    $text = [regex]::Replace($text, "boxShadow\s*:\s*['\x22]0\s+0\s+\d+px", 'boxShadow: "var(--shadow-lg)')
    $text = [regex]::Replace($text, "box-shadow\s*:\s*0\s+0\s+\d+px", 'box-shadow: var(--shadow-lg)')
    $text = [regex]::Replace($text, "box-shadow\s*:\s*0\s+1px\s+2px", 'box-shadow: var(--shadow-sm)')
    $text = [regex]::Replace($text, "box-shadow\s*:\s*0\s+1px\s+3px", 'box-shadow: var(--shadow-md)')
    $text = [regex]::Replace($text, "box-shadow\s*:\s*0\s+2px\s+4px", 'box-shadow: var(--shadow-sm)')
    $text = [regex]::Replace($text, "box-shadow\s*:\s*0\s+4px\s+6px", 'box-shadow: var(--shadow-soft)')
    $text = [regex]::Replace($text, "box-shadow\s*:\s*0\s+10px\s+15px", 'box-shadow: var(--shadow-md)')
    $text = [regex]::Replace($text, "box-shadow\s*:\s*0\s+20px\s+25px", 'box-shadow: var(--shadow-lg)')

    # ===== Radius replacements =====
    $text = [regex]::Replace($text, "borderRadius\s*:\s*['\x22]?4px['\x22]?", 'borderRadius: "var(--radius-sm)"')
    $text = [regex]::Replace($text, "borderRadius\s*:\s*['\x22]?8px['\x22]?", 'borderRadius: "var(--radius-md)"')
    $text = [regex]::Replace($text, "border-radius\s*:\s*4px", 'border-radius: var(--radius-sm)')
    $text = [regex]::Replace($text, "border-radius\s*:\s*8px", 'border-radius: var(--radius-md)')

    if ($text -ne $orig) {
        SafeWrite $path $text
        Write-Output "Updated: $(Split-Path -Leaf $path)"
        $replacementsCount++
    }
}

Write-Output ""
Write-Output "=== Phase 3 Complete ==="
Write-Output "Files changed: $filesChanged"
Write-Output "Estimated replacements: ~$([math]::Round($replacementsCount))"