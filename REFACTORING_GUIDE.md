# Design Tokens Refactoring Guide

## Visão Geral
Este documento detalha o plano de refatoração para centralizar todos os valores hardcoded de design em variáveis CSS reutilizáveis.

---

## 1. TOKENS CSS A ADICIONAR

### Cores que faltam (adicionar ao `tokens.css`)

```css
:root {
  /* CORES ADICIONAIS NECESSÁRIAS */
  
  /* Ouro/Gold Accent (Dashboard) */
  --accent-gold: #E3A93C;
  --accent-gold-dark: #C8912F;
  
  /* Backgrounds - Dark variants */
  --bg-dark-secondary: #111827;      /* Preto azul-grafite */
  --bg-ultra-dark: #0B0B0C;          /* Ultra escuro para cards */
  
  /* Texto */
  --text-light-secondary: #F2F2F2;   /* Cinza neutro */
  --text-gray-light: #C7C7C7;        /* Cinza claro secundário */
  --text-gray-medium: #7A7A7A;       /* Cinza médio */
  --text-muted-dark: #666666;        /* Cinza escuro muted */
  --white: #FFFFFF;                  /* Branco puro */
  --black: #000000;                  /* Preto puro */
  
  /* Sombras com cor */
  --shadow-glow-primary: 0 0 20px rgba(200, 169, 106, 0.4);
  --shadow-glow-accent: 0 0 20px rgba(227, 169, 60, 0.3);
  --shadow-glow-soft: 0 0 25px rgba(212, 175, 103, 0.1);
  --shadow-navy: 0 2px 8px rgba(10, 15, 31, 0.3);
  --shadow-navy-sm: 0 2px 4px rgba(10, 15, 31, 0.2);
}
```

---

## 2. REFATORAÇÃO POR ARQUIVO (Ordem de Prioridade)

### PRIORITY P0 - DASHBOARD (91 replacements)

#### `src/react-app/pages/Dashboard/Relatorios.tsx`
```
#E3A93C → var(--accent-gold)
#C8912F → var(--accent-gold-dark)
#C7C7C7 → var(--text-gray-light)
#0B0B0C → var(--bg-ultra-dark)
#000000 → var(--black)
#FFFFFF → var(--white)
```
**Instances:** 89
**Impact:** HIGH - Relatorios tem muitas referências

#### `src/react-app/pages/Dashboard/PropostasLista.tsx`
```
#E3A93C → var(--accent-gold)
#0B0B0C → var(--bg-ultra-dark)
#C7C7C7 → var(--text-gray-light)
#000000 → var(--black)
#FFFFFF → var(--white)
```
**Instances:** 45
**Impact:** HIGH

#### `src/react-app/pages/Dashboard/Proposta.tsx`
```
#E3A93C → var(--accent-gold)
#0B0B0C → var(--bg-ultra-dark)
#C7C7C7 → var(--text-gray-light)
#FFFFFF → var(--white)
```
**Instances:** 32
**Impact:** HIGH

---

### PRIORITY P1 - PÁGINAS PÚBLICAS (94 replacements)

#### `src/react-app/pages/Public/Imobiliarias.tsx`
```
#C8A96A → var(--brand-primary)
#1A1A1A → var(--brand-dark)
#F7F7F7 → var(--brand-text-muted)
#0D0D0D → var(--brand-dark-secondary)
#0C1F26 → [Considerar remoção ou criar token]
fontFamily: 'Montserrat, sans-serif' → style in component
fontFamily: 'Playfair Display, serif' → style in component
```
**Instances:** 47
**Impact:** HIGH - Arquivo muito grande

#### `src/react-app/components/LayoutController.tsx`
```
backgroundColor: "#0A0F1F" → backgroundColor: 'var(--brand-secondary-light)'
backgroundColor: "#111827" → backgroundColor: 'var(--bg-dark-secondary)'
color: "#F2F2F2" → color: 'var(--text-light-secondary)'
```
**Instances:** 6
**Impact:** HIGH - Afeta layout geral

---

### PRIORITY P2 - COMPONENTES (21 replacements)

#### `src/react-app/components/siteimobiliario2/MegaMenuComprar.tsx`
```
color: "#D4AF67" → color: 'var(--brand-primary)' [ou considerar novo token]
border: "1px solid rgba(212, 175, 103, 0.20)" → var CSS
```
**Instances:** 5
**Impact:** MEDIUM

#### `src/react-app/components/siteimobiliario2/Testimonials.tsx`
```
boxShadow: "0 0 25px rgba(212,175,103,0.10)" → var(--shadow-glow-soft)
```
**Instances:** 1

#### `src/react-app/components/siteimobiliario2/WhatsAppButton.tsx`
```
boxShadow: "0 0 20px rgba(212,175,103,0.35)" → var(--shadow-glow-primary)
```
**Instances:** 1

---

### PRIORITY P3 - REFACTOR FONTS (48 replacements)

**Padrão a seguir:**
```tsx
// ❌ ANTES:
style={{ fontFamily: 'Playfair Display, serif', color: '#C8A96A' }}

// ✅ DEPOIS:
style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-primary)' }}
```

**Arquivos afetados:**
- `Imobiliarias.tsx` (12 instances)
- `Dashboard/Relatorios.tsx` (4 instances)
- `Dashboard/Proposta.tsx` (8 instances)
- `Dashboard/PropostasLista.tsx` (4 instances)
- Múltiplos outros Dashboard pages (20 instances)

---

## 3. MAPA DE CORES CONSOLIDADAS

| Hardcoded | Token Atual | Token Recomendado | Uso |
|-----------|------------|-------------------|-----|
| #C8A96A | --brand-primary | ✓ (manter) | Principal gold |
| #D4AF67 | NÃO | Mesclar com --brand-primary | Menu gold |
| #E3A93C | NÃO | --accent-gold | Dashboard gold |
| #C8912F | NÃO | --accent-gold-dark | Dashboard gold hover |
| #0A0F1F | --brand-secondary-light | ✓ (manter) | Nav navy |
| #0D1A2D | --brand-secondary | ✓ (manter) | Dark navy |
| #111827 | NÃO | --bg-dark-secondary | Dashboard bg |
| #0B0B0C | NÃO | --bg-ultra-dark | Card dark bg |
| #1A1A1A | --brand-dark | ✓ (manter) | Dark main |
| #0D0D0D | --brand-dark-secondary | ✓ (manter) | Dark secondary |
| #F7F7F7 | --brand-text-muted | ✓ (manter) | Text muted |
| #F2F2F2 | NÃO | --text-light-secondary | Text light |
| #FFFFFF | NÃO | --white | Pure white |
| #000000 | NÃO | --black | Pure black |
| #C7C7C7 | NÃO | --text-gray-light | Gray light text |
| #7A7A7A | NÃO | --text-gray-medium | Gray medium text |

---

## 4. SOMBRAS A CONSOLIDAR

```typescript
// ❌ INSTANCES INLINE:
boxShadow: "0 0 20px rgba(200,169,106,0.4)"        → var(--shadow-glow-primary)
boxShadow: "0 0 20px rgba(227,169,60,0.3)"        → var(--shadow-glow-accent)
boxShadow: "0 0 25px rgba(212,175,103,0.1)"       → var(--shadow-glow-soft)
boxShadow: "0 2px 8px rgba(10, 15, 31, 0.3)"      → var(--shadow-navy)
boxShadow: "0 2px 4px rgba(10,15,31,0.2)"         → var(--shadow-navy-sm)
boxShadow: '0 0 40px rgba(200,169,106,0.4)'       → var(--shadow-glow-primary)
```

**Total:** 8 instances a refatorar

---

## 5. ESTRATÉGIA DE IMPLEMENTAÇÃO

### PASSO 1: Atualizar tokens.css (15 min)
```bash
# Adicionar tokens CSS faltantes (vide seção 1)
```

### PASSO 2: Refatorar P0 (Dashboard) - 1-2 horas
```bash
# Usar multi_replace_string_in_file para:
1. Relatorios.tsx (89 replacements)
2. PropostasLista.tsx (45 replacements)
3. Proposta.tsx (32 replacements)
```

### PASSO 3: Refatorar P1 (Público) - 1-2 horas
```bash
# 1. Imobiliarias.tsx (47 replacements)
# 2. LayoutController.tsx (6 replacements)
# 3. Site2* pages (múltiplas pequenas)
```

### PASSO 4: Refatorar P2 (Componentes) - 30 min
```bash
# MegaMenu, Testimonials, etc.
```

### PASSO 5: Refatorar Fonts - 1 hora
```bash
# 48 replacements de fontFamily
```

### PASSO 6: Validação - 30 min
```bash
# grep para confirmar:
# - Nenhuma cor hex inline (exceto necessárias)
# - Todas as fontes usam var(--font-*)
# - Teste visual da aplicação
```

---

## 6. CHECKLIST DE VALIDAÇÃO

- [ ] Todas cores em `#ABC` ou `#ABCDEF` substituídas
- [ ] Todas referências a `rgba()` com cores hardcoded substituídas
- [ ] Todas `fontFamily` inline substituídas por variáveis
- [ ] Todas sombras inline substituídas por variáveis
- [ ] `tokens.css` contém todos os 15 novos tokens
- [ ] Teste visual em light e dark mode (se aplicável)
- [ ] Build sem warnings
- [ ] Nenhuma quebra visual no app

---

## 7. IMPACTO ESTIMADO

| Métrica | Antes | Depois | Impacto |
|---------|-------|--------|------|
| Hardcoded colors | 281 | ~50* | 82% redução |
| Arquivos afetados | 34 | 34 | Mesmos arquivos, melhor |
| CSS variables usadas | ~12 | 27 | +125% completude |
| Manutenibilidade | ⭐⭐ | ⭐⭐⭐⭐⭐ | Crítico |

*50 cores seriam referências legítimas (rgba transparências, gradientes, etc)

---

## 8. NOTAS IMPORTANTES

### Exceções onde hex é aceitável:
1. **rgba() com transparência dinâmica** - se não existir token para aquela variação
2. **Gradientes** - considerar criar tokens para gradientes comuns
3. **Inline eventos** (onMouseEnter/Over) - considerar refatorar para usar CSS

### Antes/Depois Exemplos:

```tsx
// ❌ ANTES
<div style={{ 
  color: '#C8A96A',
  backgroundColor: '#0B0B0C',
  fontFamily: 'Montserrat, sans-serif',
  boxShadow: '0 0 20px rgba(200,169,106,0.4)'
}}>

// ✅ DEPOIS
<div style={{ 
  color: 'var(--brand-primary)',
  backgroundColor: 'var(--bg-ultra-dark)',
  fontFamily: 'var(--font-sans)',
  boxShadow: 'var(--shadow-glow-primary)'
}}>
```

---

**Gerado em:** 2025-11-28  
**Status:** Ready for Implementation  
**Estimado:** 4-5 horas de refatoração
