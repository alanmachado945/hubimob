# Phase 4: Convert Tailwind arbitrary to custom theme-based classes
# This script replaces w-[xxx], h-[xxx], min-h-[xxx], ml-[xxx], max-w-[xxx] with custom Tailwind classes

$srcPath = "C:\Users\Alan\Desktop\PROJETO HUB\ARQUIVOS HUBIMOB\HUBIMOB - IA para Corretores de Elite\src\react-app"
$replacements = @(
    @{ old = "w-\[420px\]"; new = "w-menu"; file = "MegaMenuComprar.tsx" },
    @{ old = "w-\[360px\]"; new = "w-menu-sm"; file = "MegaMenuVender.tsx" },
    @{ old = "h-\[600px\]"; new = "h-full-height"; file = "Methodology.tsx" },
    @{ old = "min-h-\[340px\]"; new = "min-h-card-lg"; files = @("PremiumExperiences.tsx", "Testimonials.tsx") },
    @{ old = "min-h-\[500px\]"; new = "min-h-card-med"; file = "FollowUpIA.tsx" },
    @{ old = "min-h-\[380px\]"; new = "min-h-card-2xl"; file = "HowItWorks.tsx" },
    @{ old = "min-h-\[350px\]"; new = "min-h-card-xl"; file = "Benefits.tsx" },
    @{ old = "min-h-\[400px\]"; new = "min-h-card-3xl"; file = "WhyChooseHub.tsx" },
    @{ old = "min-h-\[320px\]"; new = "min-h-card"; file = "SidebarCorretor.tsx" },
    @{ old = "ml-\[270px\]"; new = "ml-sidebar"; file = "DashboardLayout.tsx" },
    @{ old = "max-w-\[80%\]"; new = "max-w-chat"; file = "FollowUpIA.tsx" },
    @{ old = "w-\[260px\]"; new = "w-sidebar"; file = "SidebarCorretor.tsx" }
)

$filesProcessed = @()

foreach ($replacement in $replacements) {
    $pattern = $replacement.old
    $newValue = $replacement.new
    $filesToSearch = if ($replacement.file) { @($replacement.file) } else { $replacement.files }
    
    foreach ($filename in $filesToSearch) {
        $filePath = Get-ChildItem -Path $srcPath -Recurse -Filter $filename -ErrorAction SilentlyContinue | Select-Object -First 1
        
        if ($filePath) {
            $content = Get-Content -Path $filePath.FullName -Raw
            
            # Check if pattern exists
            if ([regex]::IsMatch($content, $pattern)) {
                Write-Host "Replacing in $($filePath.Name): $pattern -> $newValue" -ForegroundColor Green
                
                # Replace using regex
                $newContent = [regex]::Replace($content, $pattern, $newValue)
                
                # Write back
                Set-Content -Path $filePath.FullName -Value $newContent -Encoding UTF8
                
                if ($filePath.FullName -notin $filesProcessed) {
                    $filesProcessed += $filePath.FullName
                }
            }
            else {
                Write-Host "Pattern not found in $($filePath.Name): $pattern" -ForegroundColor Yellow
            }
        }
        else {
            Write-Host "File not found: $filename" -ForegroundColor Red
        }
    }
}

Write-Host "`n✅ Phase 4 Complete: Processed $($filesProcessed.Count) files" -ForegroundColor Cyan
Write-Host "Files updated: $($filesProcessed -join ', ')"
