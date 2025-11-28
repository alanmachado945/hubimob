Write-Host "Normalizando espacamentos em todo o projeto..."

$spacingMap = @{
    0 = "var(--space-0)"
    4 = "var(--space-1)"
    8 = "var(--space-2)"
    12 = "var(--space-3)"
    16 = "var(--space-4)"
    20 = "var(--space-5)"
    24 = "var(--space-6)"
    28 = "var(--space-7)"
    32 = "var(--space-8)"
    36 = "var(--space-9)"
    40 = "var(--space-10)"
    48 = "var(--space-12)"
    64 = "var(--space-16)"
    80 = "var(--space-20)"
    96 = "var(--space-24)"
    128 = "var(--space-32)"
}

$files = Get-ChildItem -Path "./src" -Recurse -Include *.tsx, *.ts, *.css | Where-Object { -not $_.PSIsContainer }

$totalUpdated = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $originalContent = $content
    
    foreach ($px in $spacingMap.Keys) {
        $tokenVar = $spacingMap[$px]
        $pattern = "(padding|margin)(-(top|bottom|left|right|x|y)?)?\s*:\s*${px}px"
        $content = $content -replace $pattern, "`$1`$2: $tokenVar"
    }
    
    if ($content -ne $originalContent) {
        Set-Content $file.FullName $content -Encoding UTF8
        $totalUpdated++
        Write-Host "Updated: $($file.Name)"
    }
}

Write-Host "Spacing tokens aplicados! Total: $totalUpdated arquivos"
