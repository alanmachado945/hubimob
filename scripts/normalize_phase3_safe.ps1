# Phase 3 normalization - safe regex replacements
# Scans .tsx .ts .css files under src/react-app and replaces common hardcoded radius, spacing and shadow values
# This script is cautious: it replaces a known set of literal values to tokens.

$root = Join-Path $PSScriptRoot "..\src\react-app"
$files = Get-ChildItem -Path $root -Recurse -Include *.tsx,*.ts,*.css | Where-Object { -not $_.PSIsContainer }

Write-Output "Files to scan: $($files.Count)"

function SafeWrite($path, $content) {
    try {
        Set-Content -Path $path -Value $content -Encoding UTF8 -Force
        Write-Output "Updated: $path"
    } catch {
        Write-Output "ERROR writing $path : $($_.Exception.Message)"
    }
}

foreach ($f in $files) {
    $path = $f.FullName
    $text = Get-Content -Raw -Encoding UTF8 -Path $path
    $orig = $text

    # Radius replacements
    $text = [regex]::Replace($text, "borderRadius\s*:\s*['\"]?0\.375rem['\"]?", 'borderRadius: "var(--radius-sm)"')
    $text = [regex]::Replace($text, "borderRadius\s*:\s*['\"]?0\.5rem['\"]?", 'borderRadius: "var(--radius-md)"')
    $text = [regex]::Replace($text, "borderRadius\s*:\s*['\"]?0\.75rem['\"]?", 'borderRadius: "var(--radius-lg)"')
    $text = [regex]::Replace($text, "border-radius\s*:\s*0\.375rem", 'border-radius: var(--radius-sm)')
    $text = [regex]::Replace($text, "border-radius\s*:\s*0\.5rem", 'border-radius: var(--radius-md)')
    $text = [regex]::Replace($text, "border-radius\s*:\s*0\.75rem", 'border-radius: var(--radius-lg)')
    $text = [regex]::Replace($text, "borderRadius\s*:\s*['\"]?4px['\"]?", 'borderRadius: "var(--radius-sm)"')
    $text = [regex]::Replace($text, "borderRadius\s*:\s*['\"]?8px['\"]?", 'borderRadius: "var(--radius-md)"')
    $text = [regex]::Replace($text, "border-radius\s*:\s*4px", 'border-radius: var(--radius-sm)')
    $text = [regex]::Replace($text, "border-radius\s*:\s*8px", 'border-radius: var(--radius-md)')

    # Spacing replacements (rem)
    $text = [regex]::Replace($text, "(padding|margin)(Top|Bottom|Left|Right)?\\s*:\\s*0\\.25rem", '$1$2: var(--spacing-xs)')
    $text = [regex]::Replace($text, "(padding|margin)(Top|Bottom|Left|Right)?\\s*:\\s*0\\.5rem", '$1$2: var(--spacing-sm)')
    $text = [regex]::Replace($text, "(padding|margin)(Top|Bottom|Left|Right)?\\s*:\\s*1rem", '$1$2: var(--spacing-md)')
    $text = [regex]::Replace($text, "(padding|margin)(Top|Bottom|Left|Right)?\\s*:\\s*2rem", '$1$2: var(--spacing-lg)')
    $text = [regex]::Replace($text, "(padding|margin)(Top|Bottom|Left|Right)?\\s*:\\s*4rem", '$1$2: var(--spacing-xl)')

    $text = [regex]::Replace($text, "padding\\s*:\\s*0\\.25rem", 'padding: var(--spacing-xs)')
    $text = [regex]::Replace($text, "padding\\s*:\\s*0\\.5rem", 'padding: var(--spacing-sm)')
    $text = [regex]::Replace($text, "padding\\s*:\\s*1rem", 'padding: var(--spacing-md)')
    $text = [regex]::Replace($text, "padding\\s*:\\s*2rem", 'padding: var(--spacing-lg)')
    $text = [regex]::Replace($text, "padding\\s*:\\s*4rem", 'padding: var(--spacing-xl)')

    $text = [regex]::Replace($text, "margin\\s*:\\s*0\\.25rem", 'margin: var(--spacing-xs)')
    $text = [regex]::Replace($text, "margin\\s*:\\s*0\\.5rem", 'margin: var(--spacing-sm)')
    $text = [regex]::Replace($text, "margin\\s*:\\s*1rem", 'margin: var(--spacing-md)')
    $text = [regex]::Replace($text, "margin\\s*:\\s*2rem", 'margin: var(--spacing-lg)')
    $text = [regex]::Replace($text, "margin\\s*:\\s*4rem", 'margin: var(--spacing-xl)')

    # Spacing px mappings
    $text = [regex]::Replace($text, "(padding|margin)(Top|Bottom|Left|Right)?\\s*:\\s*4px", '$1$2: var(--spacing-xs)')
    $text = [regex]::Replace($text, "(padding|margin)(Top|Bottom|Left|Right)?\\s*:\\s*8px", '$1$2: var(--spacing-sm)')
    $text = [regex]::Replace($text, "(padding|margin)(Top|Bottom|Left|Right)?\\s*:\\s*16px", '$1$2: var(--spacing-md)')
    $text = [regex]::Replace($text, "(padding|margin)(Top|Bottom|Left|Right)?\\s*:\\s*32px", '$1$2: var(--spacing-lg)')
    $text = [regex]::Replace($text, "(padding|margin)(Top|Bottom|Left|Right)?\\s*:\\s*64px", '$1$2: var(--spacing-xl)')

    $text = [regex]::Replace($text, "padding\\s*:\\s*4px", 'padding: var(--spacing-xs)')
    $text = [regex]::Replace($text, "padding\\s*:\\s*8px", 'padding: var(--spacing-sm)')
    $text = [regex]::Replace($text, "padding\\s*:\\s*16px", 'padding: var(--spacing-md)')
    $text = [regex]::Replace($text, "padding\\s*:\\s*32px", 'padding: var(--spacing-lg)')
    $text = [regex]::Replace($text, "padding\\s*:\\s*64px", 'padding: var(--spacing-xl)')

    $text = [regex]::Replace($text, "margin\\s*:\\s*4px", 'margin: var(--spacing-xs)')
    $text = [regex]::Replace($text, "margin\\s*:\\s*8px", 'margin: var(--spacing-sm)')
    $text = [regex]::Replace($text, "margin\\s*:\\s*16px", 'margin: var(--spacing-md)')
    $text = [regex]::Replace($text, "margin\\s*:\\s*32px", 'margin: var(--spacing-lg)')
    $text = [regex]::Replace($text, "margin\\s*:\\s*64px", 'margin: var(--spacing-xl)')

    # Shadows replacements
    $text = [regex]::Replace($text, "box-shadow\\s*:\\s*0\\s+1px\\s+2px[^;]*", 'box-shadow: var(--shadow-sm)')
    $text = [regex]::Replace($text, "box-shadow\\s*:\\s*0\\s+1px\\s+3px[^;]*", 'box-shadow: var(--shadow-md)')
    $text = [regex]::Replace($text, "box-shadow\\s*:\\s*0\\s+10px\\s+15px[^;]*", 'box-shadow: var(--shadow-lg)')
    $text = [regex]::Replace($text, "box-shadow\\s*:\\s*0\\s+20px\\s+25px[^;]*", 'box-shadow: var(--shadow-lg)')

    $text = [regex]::Replace($text, "boxShadow\\s*:\\s*['\"]?0\\s+1px\\s+2px[^'\"]*['\"]?", 'boxShadow: "var(--shadow-sm)"')
    $text = [regex]::Replace($text, "boxShadow\\s*:\\s*['\"]?0\\s+1px\\s+3px[^'\"]*['\"]?", 'boxShadow: "var(--shadow-md)"')
    $text = [regex]::Replace($text, "boxShadow\\s*:\\s*['\"]?0\\s+10px\\s+15px[^'\"]*['\"]?", 'boxShadow: "var(--shadow-lg)"')

    if ($text -ne $orig) {
        SafeWrite $path $text
    }
}

Write-Output "Normalization (phase 3) script completed."