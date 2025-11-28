# Phase 4: Convert all Tailwind arbitrary to custom theme-based classes
# More comprehensive approach

$srcPath = "C:\Users\Alan\Desktop\PROJETO HUB\ARQUIVOS HUBIMOB\HUBIMOB - IA para Corretores de Elite\src\react-app"

# First, extend tailwind.config.js with vh/vh units for hero sections
$tailwindConfigPath = "C:\Users\Alan\Desktop\PROJETO HUB\ARQUIVOS HUBIMOB\HUBIMOB - IA para Corretores de Elite\tailwind.config.js"
$configContent = Get-Content -Path $tailwindConfigPath -Raw

# Check if height already have vh values
if ($configContent -notmatch "60vh") {
    Write-Host "Adding vh height values to tailwind.config.js..." -ForegroundColor Yellow
    
    # Replace height section to add vh values
    $newHeightSection = @'
      height: {
        "full-height": "600px",
        "screen-full": "100vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "95vh": "95vh",
      },
'@
    
    $configContent = $configContent -replace 'height: \{[^}]+\},', $newHeightSection
    Set-Content -Path $tailwindConfigPath -Value $configContent -Encoding UTF8
    Write-Host "Updated tailwind.config.js with vh values" -ForegroundColor Green
}

# Now replace all arbitrary classes
$replacementMap = @{
    "min-h-\[500px\]" = "min-h-card-med"
    "min-h-\[350px\]" = "min-h-card-xl"
    "min-h-\[380px\]" = "min-h-card-2xl"
    "min-h-\[320px\]" = "min-h-card"
    "min-h-\[340px\]" = "min-h-card-lg"
    "min-h-\[400px\]" = "min-h-card-3xl"
    "min-h-\[70vh\]" = "min-h-70vh"
    "min-h-\[80vh\]" = "min-h-80vh"
    "h-\[60vh\]" = "h-60vh"
    "h-\[70vh\]" = "h-70vh"
    "h-\[95vh\]" = "h-95vh"
    "h-\[600px\]" = "h-full-height"
    "w-\[420px\]" = "w-menu"
    "w-\[360px\]" = "w-menu-sm"
    "w-\[260px\]" = "w-sidebar"
    "ml-\[270px\]" = "ml-sidebar"
    "max-w-\[80%\]" = "max-w-chat"
}

$filesUpdated = @{}
$totalReplacements = 0

Get-ChildItem -Path $srcPath -Recurse -Include "*.tsx", "*.ts" | ForEach-Object {
    $filePath = $_.FullName
    $content = Get-Content -Path $filePath -Raw
    $originalContent = $content
    
    foreach ($oldClass in $replacementMap.Keys) {
        $newClass = $replacementMap[$oldClass]
        $pattern = $oldClass
        
        if ([regex]::IsMatch($content, $pattern)) {
            $count = ([regex]::Matches($content, $pattern)).Count
            $content = [regex]::Replace($content, $pattern, $newClass)
            $totalReplacements += $count
            
            if (-not $filesUpdated.ContainsKey($filePath)) {
                $filesUpdated[$filePath] = @()
            }
            $filesUpdated[$filePath] += "$pattern -> $newClass ($count)"
        }
    }
    
    # Write if changed
    if ($content -ne $originalContent) {
        Set-Content -Path $filePath -Value $content -Encoding UTF8
    }
}

Write-Host "`nPhase 4 Complete" -ForegroundColor Cyan
Write-Host "Files updated: $($filesUpdated.Count)" -ForegroundColor Green
Write-Host "Total replacements: $totalReplacements" -ForegroundColor Green

foreach ($file in $filesUpdated.Keys) {
    $fileName = Split-Path -Leaf $file
    Write-Host "  * $fileName" -ForegroundColor Gray
    foreach ($replacement in $filesUpdated[$file]) {
        Write-Host "      - $replacement" -ForegroundColor DarkGray
    }
}
