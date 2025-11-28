# HUBIMOB Design Tokens - Guide de Uso (Phase 5)

## Visão Geral

Este documento explica como usar o sistema centralizado de design tokens para cores e tipografia no projeto HUBIMOB.

## Objetivo Principal

**Alterar cores e tipografia em UMA ÚNICA PÁGINA: `src/react-app/styles/tokens.css`**

Todas as cores e fontes do projeto são definidas como CSS custom properties (variáveis CSS) neste arquivo.

---

## 📚 Estrutura de Tokens

### 1. **Tokens de Cor**

#### Brand Primária (Dourado)
```css
--brand-primary: var(--color-c8a96a);       /* Dourado principal: #C8A96A */
--brand-primary-dark: var(--color-a68a52);  /* Dourado escuro (hover): #A68A52 */
```

#### Brand Secundária (Azul)
```css
--brand-secondary: var(--color-0d1a2d);           /* Azul: #0D1A2D */
--brand-secondary-light: var(--color-0a0f1f);    /* Azul-Marinho: #0A0F1F */
```

#### Cores Neutras
```css
--brand-dark: var(--color-1a1a1a);              /* Escuro: #1A1A1A */
--brand-light: var(--color-f7f9fb);             /* Claro: #F7F9FB */
--brand-text-dark: var(--color-0d1a2d);         /* Texto escuro */
--brand-text-gray: var(--color-c7c7c7);         /* Texto cinza */
```

#### Cores de Destaque (Novo Phase 5)
```css
--accent-gold: #E3A93C;              /* Dourado (Dashboard) */
--accent-gold-dark: #C8912F;         /* Dourado escuro */
--text-gray-dark: #7A7A7A;           /* Cinza escuro para texto */
--bg-dark-navy: #0A0F1F;             /* Fundo azul-marinho */
```

#### Cores Semânticas
```css
--color-success: var(--color-4caf50);    /* Verde */
--color-warning: var(--color-ff9800);    /* Laranja */
--color-error: var(--color-f44336);      /* Vermelho */
--color-info: var(--color-2196f3);       /* Azul */
```

---

### 2. **Variantes RGBA (Transparência)**

Para cores com transparência, use as variantes pré-calculadas:

```css
/* Luz com transparência */
--rgba-light-70: rgba(var(--color-f2f2f2-rgb), 0.70);
--rgba-light-80: rgba(var(--color-f2f2f2-rgb), 0.80);
--rgba-light-90: rgba(var(--color-f2f2f2-rgb), 0.90);

/* Ouro com transparência */
--rgba-gold-accent-10: rgba(227, 169, 60, 0.10);
--rgba-gold-accent-15: rgba(227, 169, 60, 0.15);
--rgba-gold-accent-20: rgba(227, 169, 60, 0.20);

/* Navy escuro com transparência */
--rgba-navy-dark-60: rgba(var(--color-0a0f1f-rgb), 0.60);
--rgba-navy-dark-70: rgba(var(--color-0a0f1f-rgb), 0.70);
--rgba-navy-dark-85: rgba(var(--color-0a0f1f-rgb), 0.85);
--rgba-navy-dark-95: rgba(var(--color-0a0f1f-rgb), 0.95);
```

---

### 3. **Gradientes**

```css
/* Gradiente Navy (topo para baixo) */
--gradient-navy-top: linear-gradient(to bottom, 
  rgba(var(--color-0a0f1f-rgb), 0.95), 
  rgba(var(--color-0a0f1f-rgb), 0.85), 
  rgba(var(--color-0a0f1f-rgb), 0.70)
);

/* Gradiente Ouro-Accent */
--gradient-gold-accent: linear-gradient(to bottom right, 
  rgba(var(--color-d4af67-rgb), 0.00), 
  rgba(var(--color-d4af67-rgb), 0.20)
);

/* Gradiente Ouro para Navy */
--gradient-gold-to-navy: linear-gradient(to bottom right, 
  rgba(var(--color-d4af67-rgb), 0.20), 
  rgba(var(--color-0a0f1f-rgb), 0)
);
```

---

### 4. **Tipografia (Typography)**

#### Famílias de Fonte
```css
--font-display: 'Playfair Display', serif;      /* Headings */
--font-sans: 'Montserrat', sans-serif;          /* Body/UI */
--font-default: 'Inter', sans-serif;            /* Fallback */
```

#### Tamanhos
```css
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
--text-5xl: 3rem;       /* 48px */
--text-6xl: 3.75rem;    /* 60px */
```

#### Pesos
```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

#### Alturas de Linha
```css
--line-tight: 1.1;      /* 110% */
--line-snug: 1.2;       /* 120% */
--line-normal: 1.5;     /* 150% */
--line-relaxed: 1.625;  /* 162.5% */
--line-loose: 2;        /* 200% */
```

#### Bundles Semânticos (Novo Phase 5)
```css
/* Heading 1 */
--font-h1-size: var(--text-5xl);
--font-h1-weight: var(--font-extrabold);
--font-h1-family: var(--font-display);
--font-h1-line-height: var(--line-tight);

/* Heading 2 */
--font-h2-size: var(--text-4xl);
--font-h2-weight: var(--font-bold);
--font-h2-family: var(--font-display);

/* Body */
--font-body-size: var(--text-base);
--font-body-family: var(--font-sans);
--font-body-weight: var(--font-normal);
--font-body-line-height: var(--line-relaxed);

/* Small Text */
--font-small-size: var(--text-sm);
--font-small-family: var(--font-sans);
--font-small-weight: var(--font-normal);
```

---

### 5. **Espaçamento**

```css
--space-1: 0.25rem;     /* 4px */
--space-2: 0.5rem;      /* 8px */
--space-3: 0.75rem;     /* 12px */
--space-4: 1rem;        /* 16px */
--space-6: 1.5rem;      /* 24px */
--space-8: 2rem;        /* 32px */
--space-12: 3rem;       /* 48px */
--space-16: 4rem;       /* 64px */
--space-20: 5rem;       /* 80px */
--space-24: 6rem;       /* 96px */
--space-32: 8rem;       /* 128px */
```

---

### 6. **Sombras**

```css
--shadow-none: 0;
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-base: 0 1px 3px rgba(0, 0, 0, 0.1);
--shadow-soft: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-medium: 0 10px 15px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 20px 25px rgba(0, 0, 0, 0.15);
--shadow-xl: 0 25px 50px rgba(0, 0, 0, 0.25);
```

---

### 7. **Transições**

```css
--transition-fast: 0.15s ease;      /* Animações rápidas */
--transition-base: 0.25s ease;      /* Animação padrão */
--transition-slow: 0.35s ease;      /* Animações lentas */
```

---

## 💻 Uso em Componentes

### Em CSS/Styled Components

```css
.header {
  background-color: var(--brand-secondary-light);
  color: var(--brand-text-light);
  padding: var(--space-4);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}

.button {
  background-color: var(--brand-primary);
  color: var(--text-white);
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  padding: var(--space-2) var(--space-4);
}

.button:hover {
  background-color: var(--brand-primary-dark);
}

.highlight {
  background-color: var(--rgba-gold-accent-10);
  border-left: 4px solid var(--accent-gold);
}
```

### Em Tailwind (através de `tailwind.config.js`)

```tsx
<div className="bg-[var(--brand-secondary-light)] text-[var(--brand-text-light)] p-4 rounded-lg">
  <h1 className="font-display font-extrabold text-5xl">Título</h1>
  <p className="font-sans font-normal text-base">Parágrafo</p>
</div>
```

### Em Componentes React (Inline Styles)

```tsx
<button
  style={{
    backgroundColor: 'var(--brand-primary)',
    color: 'var(--text-white)',
    padding: 'var(--space-2) var(--space-4)',
    fontFamily: 'var(--font-sans)',
    transition: 'all var(--transition-base)'
  }}
>
  Clique aqui
</button>
```

---

## 🎨 Como Alterar Cores/Tipografia

### Exemplo 1: Mudar a cor primária dourada

**Antes (sem tokens):**
```css
.banner {
  background-color: #C8A96A;  /* ❌ Hardcoded em vários arquivos */
}
```

**Depois (com tokens):**
1. Editar em `src/react-app/styles/tokens.css`:
```css
--color-c8a96a: #D4AF67;  /* Novo dourado */
```

2. **Pronto!** Todos os componentes que usam `var(--brand-primary)` serão automaticamente atualizados.

---

### Exemplo 2: Mudar tipografia

1. Editar em `src/react-app/styles/tokens.css`:
```css
--font-display: 'Georgia', serif;  /* Mudar Playfair para Georgia */
```

2. **Pronto!** Todos os headings (h1, h2, h3) que usam `var(--font-display)` serão atualizados.

---

## ✅ Checklist de Implementação

- [x] **Phase 1-2**: Normalize cores de base + criar `tokens.css`
- [x] **Phase 3-4**: Normalizar borders, shadows, radius, spacing
- [x] **Phase 5**: Adicionar 40+ tokens de cor, rgba, gradiente, tipografia semântica
- [x] **Validação**: Script Python verificou todos os arquivos
- [ ] **Próxima**: Monitorar novos componentes - SEMPRE usar tokens, nunca hardcoded

---

## 📋 Tokens Disponíveis (Resumo)

| Categoria | Exemplos | Arquivo |
|-----------|----------|---------|
| **Cores** | `--brand-primary`, `--brand-secondary`, `--accent-gold` | `tokens.css` |
| **RGBA** | `--rgba-light-70`, `--rgba-gold-accent-10` | `tokens.css` |
| **Gradientes** | `--gradient-navy-top`, `--gradient-gold-accent` | `tokens.css` |
| **Tipografia** | `--font-h1-size`, `--font-body-family`, `--text-5xl` | `tokens.css` |
| **Espaçamento** | `--space-4`, `--space-8`, `--space-16` | `tokens.css` |
| **Sombras** | `--shadow-sm`, `--shadow-lg`, `--shadow-xl` | `tokens.css` |
| **Transições** | `--transition-base`, `--transition-fast` | `tokens.css` |

---

## 🔄 Workflow para Novos Componentes

Ao criar um novo componente:

1. **Defina cores em `tokens.css` PRIMEIRO** (nunca hardcoded)
2. Use `var(--token-name)` em estilos CSS
3. Teste no componente
4. Documente se adicionou novo token

**NUNCA faça:**
```tsx
const buttonStyle = { backgroundColor: '#C8A96A' };  // ❌ Errado!
```

**SEMPRE faça:**
```tsx
const buttonStyle = { backgroundColor: 'var(--brand-primary)' };  // ✅ Correto!
```

---

## 📞 Dúvidas?

Consulte os arquivos:
- `src/react-app/styles/tokens.css` - Definição de todos os tokens
- `src/react-app/styles/index.css` - Importação e uso
- `tailwind.config.js` - Integração com Tailwind

---

**Última atualização:** Phase 5 - November 28, 2025
**Próxima revisão:** Quando 100% dos componentes estiverem usando tokens
