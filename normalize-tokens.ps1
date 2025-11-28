# Script para normalizar TODAS as cores hardcoded para usar tokens CSS

$basePath = "c:\Users\Alan\Desktop\PROJETO HUB\ARQUIVOS HUBIMOB\HUBIMOB - IA para Corretores de Elite"

# Mapeamento de cores hardcoded para tokens
$colorMap = @{
    "'#E3A93C'" = "'var(--brand-primary)'"
    '"#E3A93C"' = '"var(--brand-primary)"'
    "'#C8912F'" = "'var(--brand-primary-dark)'"
    '"#C8912F"' = '"var(--brand-primary-dark)"'
    "'#0B0B0C'" = "'var(--brand-dark)'"
    '"#0B0B0C"' = '"var(--brand-dark)"'
    "'#C7C7C7'" = "'var(--brand-text-gray)'"
    '"#C7C7C7"' = '"var(--brand-text-gray)"'
    "'#FFFFFF'" = "'var(--brand-light)'"
    '"#FFFFFF"' = '"var(--brand-light)"'
    "'#000000'" = "'var(--brand-dark-secondary)'"
    '"#000000"' = '"var(--brand-dark-secondary)"'
    "'#2196F3'" = "'var(--color-info)'"
    '"#2196F3"' = '"var(--color-info)"'
    "'#FF9800'" = "'var(--color-warning)'"
    '"#FF9800"' = '"var(--color-warning)"'
    "'#4CAF50'" = "'var(--color-success)'"
    '"#4CAF50"' = '"var(--color-success)"'
    "'#F44336'" = "'var(--color-error)'"
    '"#F44336"' = '"var(--color-error)"'
    "'#D4AF67'" = "'var(--brand-primary)'"
    '"#D4AF67"' = '"var(--brand-primary)"'
    "'#9C27B0'" = "'var(--color-purple)'"
    '"#9C27B0"' = '"var(--color-purple)"'
    "'#666666'" = "'var(--brand-text-gray)'"
    '"#666666"' = '"var(--brand-text-gray)"'
    "'#0A0F1F'" = "'var(--brand-secondary-light)'"
    '"#0A0F1F"' = '"var(--brand-secondary-light)"'
    "'#F2F2F2'" = "'var(--brand-light)'"
    '"#F2F2F2"' = '"var(--brand-light)"'
    "'#1A1A1A'" = "'var(--brand-dark)'"
    '"#1A1A1A"' = '"var(--brand-dark)"'
    "'#111827'" = "'var(--brand-dark)'"
    '"#111827"' = '"var(--brand-dark)"'
    "'#C8A96A'" = "'var(--brand-primary)'"
    '"#C8A96A"' = '"var(--brand-primary)"'
    "'#A68A52'" = "'var(--brand-primary-dark)'"
    '"#A68A52"' = '"var(--brand-primary-dark)"'
    "'#0D0D0D'" = "'var(--brand-dark-secondary)'"
    '"#0D0D0D"' = '"var(--brand-dark-secondary)"'
    "'#F7F9FB'" = "'var(--brand-light)'"
    '"#F7F9FB"' = '"var(--brand-light)"'
    "'#2A2A2A'" = "'var(--brand-dark-secondary)'"
    '"#2A2A2A"' = '"var(--brand-dark-secondary)"'
}

# Regex para hex colors em strings de template (backticks)
$regexReplacements = @(
    @{ pattern = '\[#E3A93C\]'; replacement = '[var(--brand-primary)]' }
    @{ pattern = '\[#C8912F\]'; replacement = '[var(--brand-primary-dark)]' }
)

# Arquivos a processar
$files = Get-ChildItem -Path "$basePath\src\react-app" -Recurse -Include "*.tsx", "*.ts" -File

$processedCount = 0
$totalChanges = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $originalContent = $content
    
    # Aplicar mapeamento de cores
    foreach ($oldColor in $colorMap.Keys) {
        $newColor = $colorMap[$oldColor]
        $content = $content -replace [regex]::Escape($oldColor), $newColor
    }
    
    # Aplicar replacements com regex
    foreach ($replacement in $regexReplacements) {
        $content = $content -replace $replacement.pattern, $replacement.replacement
    }
    
    # Verificar se houve mudanças
    if ($content -ne $originalContent) {
        Set-Content $file.FullName $content -Encoding UTF8
        $processedCount++
        
        # Contar mudanças (aproximado)
        $changes = ($originalContent | Select-String -Pattern '#[0-9A-Fa-f]{6}|#[0-9A-Fa-f]{3}' -AllMatches).Matches.Count
        $totalChanges += $changes
        Write-Host "✅ $($file.Name) - $changes substituições"
    }
}

Write-Host ""
Write-Host "================================================"
Write-Host "Normalização Concluída!"
Write-Host "Arquivos processados: $processedCount"
Write-Host "Total de cores substituídas: ~$totalChanges"
Write-Host "================================================"
