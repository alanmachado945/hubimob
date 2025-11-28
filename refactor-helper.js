#!/usr/bin/env node

/**
 * Design Tokens Refactoring Helper
 * 
 * Script para ajudar na refatoração de hardcoded colors para CSS variables
 * Uso: node refactor-helper.js [--check|--report|--validate]
 * 
 * Funcionalidades:
 * --check    : Encontra todas as cores hardcoded no projeto
 * --report   : Gera relatório detalhado de instâncias
 * --validate : Valida conversões após refatoração
 */

const fs = require('fs');
const path = require('path');

// ============================================================================
// MAPPING DE CORES PARA REFATORAÇÃO
// ============================================================================

const colorMapping = {
  // Cores que já tem tokens
  '#C8A96A': { token: 'var(--brand-primary)', description: 'Dourado primário' },
  '#A68A52': { token: 'var(--brand-primary-dark)', description: 'Dourado escuro' },
  '#0D1A2D': { token: 'var(--brand-secondary)', description: 'Azul secundário' },
  '#0A0F1F': { token: 'var(--brand-secondary-light)', description: 'Azul-Marinho' },
  '#1A1A1A': { token: 'var(--brand-dark)', description: 'Escuro principal' },
  '#0D0D0D': { token: 'var(--brand-dark-secondary)', description: 'Escuro secundário' },
  '#F7F9FB': { token: 'var(--brand-light)', description: 'Fundo claro' },
  '#E7ECF2': { token: 'var(--brand-light-gray)', description: 'Cinza claro' },
  '#F7F7F7': { token: 'var(--brand-text-muted)', description: 'Texto muted' },
  '#4CAF50': { token: 'var(--color-success)', description: 'Verde' },
  '#FF9800': { token: 'var(--color-warning)', description: 'Laranja' },
  '#2196F3': { token: 'var(--color-info)', description: 'Azul info' },
  '#F44336': { token: 'var(--color-error)', description: 'Vermelho' },
  
  // Cores que PRECISAM de novos tokens
  '#E3A93C': { token: 'var(--accent-gold)', description: 'NOVO: Ouro accent' },
  '#C8912F': { token: 'var(--accent-gold-dark)', description: 'NOVO: Ouro accent dark' },
  '#111827': { token: 'var(--bg-dark-secondary)', description: 'NOVO: Dark secondary bg' },
  '#0B0B0C': { token: 'var(--bg-ultra-dark)', description: 'NOVO: Ultra dark bg' },
  '#F2F2F2': { token: 'var(--text-light-secondary)', description: 'NOVO: Text light' },
  '#C7C7C7': { token: 'var(--text-gray-light)', description: 'NOVO: Gray light' },
  '#7A7A7A': { token: 'var(--text-gray-medium)', description: 'NOVO: Gray medium' },
  '#666666': { token: 'var(--text-muted-dark)', description: 'NOVO: Muted dark' },
  '#FFFFFF': { token: 'var(--white)', description: 'NOVO: White' },
  '#000000': { token: 'var(--black)', description: 'NOVO: Black' },
};

const fontMapping = {
  "'Playfair Display, serif'": { token: 'var(--font-display)', description: 'Display font' },
  "'Playfair Display'": { token: 'var(--font-display)', description: 'Display font' },
  "'Montserrat, sans-serif'": { token: 'var(--font-sans)', description: 'Body font' },
  "'Montserrat'": { token: 'var(--font-sans)', description: 'Body font' },
  "'Inter, sans-serif'": { token: 'var(--font-default)', description: 'Default font' },
  "'Inter'": { token: 'var(--font-default)', description: 'Default font' },
};

const shadowMapping = {
  '0 0 20px rgba(200,169,106,0.4)': { token: 'var(--shadow-glow-primary)' },
  '0 0 20px rgba(227,169,60,0.3)': { token: 'var(--shadow-glow-accent)' },
  '0 0 25px rgba(212,175,103,0.1)': { token: 'var(--shadow-glow-soft)' },
  '0 2px 8px rgba(10, 15, 31, 0.3)': { token: 'var(--shadow-navy)' },
  '0 2px 4px rgba(10,15,31,0.2)': { token: 'var(--shadow-navy-sm)' },
  '0 0 40px rgba(212,175,103,0.10)': { token: 'var(--shadow-glow-soft)' },
  '0 4px 12px rgba(10,15,31,0.25)': { token: 'var(--shadow-navy)' },
  '0 0 20px #E3A93C': { token: 'var(--shadow-glow-accent)' },
};

// ============================================================================
// UTILITÁRIOS
// ============================================================================

function getAllTsxFiles(dir) {
  let files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && !entry.name.startsWith('.')) {
        files = files.concat(getAllTsxFiles(fullPath));
      }
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  return files;
}

function findColorInstances(content, filePath) {
  const instances = [];
  const regex = /#[0-9A-Fa-f]{6}|#[0-9A-Fa-f]{3}/gi;
  
  let match;
  const lines = content.split('\n');
  let charCount = 0;
  
  for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
    const line = lines[lineIdx];
    const lineRegex = /#[0-9A-Fa-f]{6}|#[0-9A-Fa-f]{3}/gi;
    
    while ((match = lineRegex.exec(line)) !== null) {
      const color = match[0].toUpperCase();
      if (colorMapping[color]) {
        instances.push({
          color,
          line: lineIdx + 1,
          column: match.index + 1,
          context: line.trim(),
          mapping: colorMapping[color],
        });
      }
    }
  }
  
  return instances;
}

function findFontInstances(content, filePath) {
  const instances = [];
  
  Object.entries(fontMapping).forEach(([font, mapping]) => {
    const lines = content.split('\n');
    
    lines.forEach((line, idx) => {
      if (line.includes(font)) {
        instances.push({
          font,
          line: idx + 1,
          context: line.trim(),
          mapping,
        });
      }
    });
  });
  
  return instances;
}

function findShadowInstances(content, filePath) {
  const instances = [];
  
  Object.entries(shadowMapping).forEach(([shadow, mapping]) => {
    const lines = content.split('\n');
    
    lines.forEach((line, idx) => {
      if (line.includes(shadow)) {
        instances.push({
          shadow,
          line: idx + 1,
          context: line.trim().substring(0, 80),
          mapping,
        });
      }
    });
  });
  
  return instances;
}

// ============================================================================
// PRINCIPAIS FUNÇÕES
// ============================================================================

function checkColors() {
  const srcDir = path.join(__dirname, 'src', 'react-app');
  const files = getAllTsxFiles(srcDir);
  
  console.log('🔍 Procurando cores hardcoded...\n');
  
  let totalInstances = 0;
  const colorStats = {};
  
  files.forEach((file) => {
    const content = fs.readFileSync(file, 'utf-8');
    const instances = findColorInstances(content, file);
    
    if (instances.length > 0) {
      totalInstances += instances.length;
      const relPath = path.relative(srcDir, file);
      
      console.log(`📄 ${relPath}: ${instances.length} instâncias`);
      
      instances.forEach((inst) => {
        const status = inst.mapping.token.includes('NOVO') ? '⭐' : '✅';
        console.log(`  ${status} ${inst.color} → ${inst.mapping.token} (linha ${inst.line})`);
        
        colorStats[inst.color] = (colorStats[inst.color] || 0) + 1;
      });
    }
  });
  
  console.log(`\n📊 Total de instâncias: ${totalInstances}`);
  console.log('\n🎨 Resumo por cor:');
  Object.entries(colorStats)
    .sort((a, b) => b[1] - a[1])
    .forEach(([color, count]) => {
      const mapping = colorMapping[color];
      console.log(`  ${color}: ${count}x → ${mapping.token}`);
    });
}

function generateReport() {
  const srcDir = path.join(__dirname, 'src', 'react-app');
  const files = getAllTsxFiles(srcDir);
  
  const report = {
    timestamp: new Date().toISOString(),
    totalFiles: files.length,
    affectedFiles: [],
    colorInstances: 0,
    fontInstances: 0,
    shadowInstances: 0,
    newTokensNeeded: new Set(),
  };
  
  files.forEach((file) => {
    const content = fs.readFileSync(file, 'utf-8');
    const colors = findColorInstances(content, file);
    const fonts = findFontInstances(content, file);
    const shadows = findShadowInstances(content, file);
    
    if (colors.length || fonts.length || shadows.length) {
      const relPath = path.relative(srcDir, file);
      
      report.affectedFiles.push({
        file: relPath,
        colorCount: colors.length,
        fontCount: fonts.length,
        shadowCount: shadows.length,
      });
      
      report.colorInstances += colors.length;
      report.fontInstances += fonts.length;
      report.shadowInstances += shadows.length;
      
      colors.forEach((c) => {
        if (c.mapping.token.includes('--accent') || 
            c.mapping.token.includes('--bg-') ||
            c.mapping.token.includes('--text-') ||
            c.mapping.token.includes('--white') ||
            c.mapping.token.includes('--black')) {
          report.newTokensNeeded.add(c.mapping.token);
        }
      });
    }
  });
  
  report.newTokensNeeded = Array.from(report.newTokensNeeded);
  
  const reportPath = path.join(__dirname, 'REFACTORING_REPORT.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  console.log('✅ Relatório gerado: REFACTORING_REPORT.json');
  console.log(`\n📊 Estatísticas:`);
  console.log(`  Arquivos afetados: ${report.affectedFiles.length}`);
  console.log(`  Instâncias de cores: ${report.colorInstances}`);
  console.log(`  Instâncias de fonts: ${report.fontInstances}`);
  console.log(`  Instâncias de sombras: ${report.shadowInstances}`);
  console.log(`  Novos tokens necessários: ${report.newTokensNeeded.length}`);
}

function validateRefactoring() {
  const srcDir = path.join(__dirname, 'src', 'react-app');
  const files = getAllTsxFiles(srcDir);
  
  console.log('✔️ Validando refatoração...\n');
  
  let remainingHardcoded = 0;
  
  files.forEach((file) => {
    const content = fs.readFileSync(file, 'utf-8');
    const instances = findColorInstances(content, file);
    
    // Filtrar apenas cores que NÃO deveriam estar inline
    const shouldBeRefactored = instances.filter((i) => {
      // Exceções: cores em rgba() ou dados
      return !content.includes('rgba');
    });
    
    if (shouldBeRefactored.length > 0) {
      remainingHardcoded += shouldBeRefactored.length;
      const relPath = path.relative(srcDir, file);
      console.log(`⚠️  ${relPath}: ${shouldBeRefactored.length} cores ainda hardcoded`);
    }
  });
  
  if (remainingHardcoded === 0) {
    console.log('✅ Nenhuma cor hardcoded encontrada!');
  } else {
    console.log(`\n❌ Ainda há ${remainingHardcoded} cores para refatorar`);
  }
}

// ============================================================================
// MAIN
// ============================================================================

const command = process.argv[2];

switch (command) {
  case '--check':
    checkColors();
    break;
  case '--report':
    generateReport();
    break;
  case '--validate':
    validateRefactoring();
    break;
  default:
    console.log(`
Design Tokens Refactoring Helper

Uso: node refactor-helper.js [comando]

Comandos disponíveis:
  --check      Encontra todas as cores hardcoded
  --report     Gera relatório completo (JSON)
  --validate   Valida após refatoração

Exemplo:
  node refactor-helper.js --check
  node refactor-helper.js --report
    `);
}
