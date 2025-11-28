param([switch]$DryRun = $false)

$srcPath = "c:\Users\Alan\Desktop\PROJETO HUB\ARQUIVOS HUBIMOB\HUBIMOB - IA para Corretores de Elite\src"
$fileCount = 0
$totalReplacements = 0

$colors = @(
    @{ old = '#E3A93C'; new = 'var(--accent-gold)' },
    @{ old = '#C8912F'; new = 'var(--accent-gold-dark)' },
    @{ old = '#D4AF67'; new = 'var(--brand-gold-alt)' },
    @{ old = '#C8A96A'; new = 'var(--brand-primary)' },
    @{ old = '#A68A52'; new = 'var(--brand-primary-dark)' },
    @{ old = '#0D1A2D'; new = 'var(--brand-secondary)' },
    @{ old = '#0A0F1F'; new = 'var(--brand-secondary-light)' },
    @{ old = '#1A1A1A'; new = 'var(--brand-dark)' },
    @{ old = '#0D0D0D'; new = 'var(--brand-dark-secondary)' },
    @{ old = '#F7F9FB'; new = 'var(--brand-light)' },
    @{ old = '#E7ECF2'; new = 'var(--brand-light-gray)' },
    @{ old = '#F7F7F7'; new = 'var(--brand-text-muted)' },
    @{ old = '#C7C7C7'; new = 'var(--brand-text-gray)' }
)

$files = Get-ChildItem -Path $srcPath -Recurse -Include *.tsx, *.ts -ErrorAction SilentlyContinue

Write-Host "Phase 5: Token Centralization" -ForegroundColor Cyan
Write-Host "Files to process: $($files.Count)" -ForegroundColor Yellow
Write-Host "DryRun Mode: $DryRun`n" -ForegroundColor Yellow

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    $originalContent = $content
    $fileChanges = 0
    
    foreach ($color in $colors) {
        $count = 0
        $content = $content -ireplace [regex]::Escape($color.old), $color.new -replace '(?<count>)', { $count++; '' }
        if ($content -ne $originalContent) {
            $fileChanges = ($originalContent.Length - $content.Length) / $color.old.Length
        }
    }
    
    if ($content -ne $originalContent) {
        if (-not $DryRun) {
            Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -Force
        }
        $fileCount++
        Write-Host "✓ $($file.Name)" -ForegroundColor Green
    }
}

Write-Host "`nPhase 5 Complete: $fileCount files processed" -ForegroundColor Green
