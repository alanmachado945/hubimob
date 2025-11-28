# Refactoring Examples - Before & After

Exemplos práticos de como refatorar cada tipo de hardcoding encontrado no HUBIMOB.

---

## 1. Cores em Inline Styles

### ❌ ANTES (Imobiliarias.tsx)

```tsx
return (
  <div
    className="mb-12 p-6 rounded-2xl border-2"
    style={{
      backgroundColor: '#1A1A1A',
      borderColor: '#C8A96A'
    }}
  >
```

### ✅ DEPOIS

```tsx
return (
  <div
    className="mb-12 p-6 rounded-2xl border-2"
    style={{
      backgroundColor: 'var(--brand-dark)',
      borderColor: 'var(--brand-primary)'
    }}
  >
```

---

## 2. Cores em Dashboard

### ❌ ANTES (Dashboard/Relatorios.tsx)

```tsx
<div
  style={{
    backgroundColor: '#0B0B0C',
    borderColor: '#E3A93C'
  }}
>
```

### ✅ DEPOIS

```tsx
<div
  style={{
    backgroundColor: 'var(--bg-dark-pure)',
    borderColor: 'var(--accent-gold)'
  }}
>
```

---

## 3. Cores em Event Handlers

### ❌ ANTES (MegaMenuComprar.tsx)

```tsx
onMouseOver={(e) => (e.currentTarget.style.color = "#D4AF67")}
```

### ✅ DEPOIS

```tsx
onMouseOver={(e) => (e.currentTarget.style.color = "var(--brand-primary)")}
```

---

## 4. Cores Condicionais com Transparência

### ❌ ANTES (Imobiliarias.tsx)

```tsx
const getBadgeColor = (badge: string) => {
  switch (badge) {
    case 'Premium':
      return { bg: '#C8A96A20', color: '#C8A96A' };
    case 'Nova':
      return { bg: '#1A1A1A20', color: '#F7F7F7' };
    case 'Parceira':
      return { bg: '#0C1F2620', color: '#0C1F26' };
    default:
      return { bg: '#1A1A1A20', color: '#F7F7F7' };
  }
};
```

### ✅ DEPOIS (Com CSS Variables)

```tsx
const getBadgeColor = (badge: string) => {
  switch (badge) {
    case 'Premium':
      return { 
        bg: `rgba(var(--brand-primary-rgb), 0.13)`, 
        color: 'var(--brand-primary)' 
      };
    case 'Nova':
      return { 
        bg: `rgba(var(--brand-dark-rgb), 0.13)`, 
        color: 'var(--brand-text-muted)' 
      };
    case 'Parceira':
      return { 
        bg: 'rgba(12, 31, 38, 0.13)', 
        color: '#0C1F26'
      };
    default:
      return { 
        bg: `rgba(var(--brand-dark-rgb), 0.13)`, 
        color: 'var(--brand-text-muted)' 
      };
  }
};
```

---

## 5. Font-Family Inline

### ❌ ANTES (Imobiliarias.tsx)

```tsx
<h1
  className="text-5xl md:text-6xl font-bold mb-4"
  style={{
    fontFamily: 'Playfair Display, serif',
    color: '#C8A96A'
  }}
>
  Imobiliárias Parceiras
</h1>

<p
  className="text-xl"
  style={{
    fontFamily: 'Montserrat, sans-serif',
    color: '#F7F7F7'
  }}
>
  Encontre as melhores imobiliárias conectadas ao HUBIMOB.
</p>
```

### ✅ DEPOIS

```tsx
<h1
  className="text-5xl md:text-6xl font-bold mb-4"
  style={{
    fontFamily: 'var(--font-display)',
    color: 'var(--brand-primary)'
  }}
>
  Imobiliárias Parceiras
</h1>

<p
  className="text-xl"
  style={{
    fontFamily: 'var(--font-sans)',
    color: 'var(--brand-text-muted)'
  }}
>
  Encontre as melhores imobiliárias conectadas ao HUBIMOB.
</p>
```

---

## 6. Box-Shadow Inline

### ❌ ANTES (Dashboard/LeadPerfil.tsx)

```tsx
style={{ 
  boxShadow: stage.active ? '0 0 20px #E3A93C' : 'none' 
}}
```

### ✅ DEPOIS

```tsx
style={{ 
  boxShadow: stage.active ? 'var(--shadow-glow-accent)' : 'var(--shadow-none)' 
}}
```

---

## 7. Box-Shadow em Componentes

### ❌ ANTES (Testimonials.tsx)

```tsx
style={{
  boxShadow: "0 0 25px rgba(212,175,103,0.10)"
}}
```

### ✅ DEPOIS

```tsx
style={{
  boxShadow: 'var(--shadow-glow-soft)'
}}
```

---

## 8. Sombras Complexas

### ❌ ANTES (FinalCTA.tsx)

```tsx
style={{
  boxShadow: '0 0 40px rgba(200,169,106,0.4)'
}}
```

### ✅ DEPOIS

```tsx
style={{
  boxShadow: 'var(--shadow-glow-primary)'
}}
```

---

## 9. Border-Radius com Shadow

### ❌ ANTES (PropertyMap.tsx)

```tsx
style={{
  'border-radius': '50% 50% 50% 0',
  'box-shadow': '0 2px 8px rgba(10, 15, 31, 0.3)'
}}
```

### ✅ DEPOIS

```tsx
style={{
  borderRadius: '50% 50% 50% 0',
  boxShadow: 'var(--shadow-navy)'
}}
```

---

## 10. Múltiplas Sombras

### ❌ ANTES

```tsx
style={{
  boxShadow: 'var(--shadow-base), var(--shadow-glow-primary)'
}}
```

### ✅ DEPOIS (Criar token novo)

**Em tokens.css:**
```css
--shadow-primary-glow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 0 20px rgba(200, 169, 106, 0.4);
```

**Então usar:**
```tsx
style={{
  boxShadow: 'var(--shadow-primary-glow)'
}}
```

---

## 11. RGBA com Transparência Pré-calculada

### ❌ ANTES (Dashboard)

```tsx
const colors = {
  light70: 'rgba(242, 242, 242, 0.70)',
  light80: 'rgba(242, 242, 242, 0.80)',
  light90: 'rgba(242, 242, 242, 0.90)',
  gold10: 'rgba(227, 169, 60, 0.10)',
  navy60: 'rgba(10, 15, 31, 0.60)',
};
```

### ✅ DEPOIS (Usar tokens pré-calculados)

```tsx
const colors = {
  light70: 'var(--rgba-light-70)',
  light80: 'var(--rgba-light-80)',
  light90: 'var(--rgba-light-90)',
  gold10: 'var(--rgba-gold-accent-10)',
  navy60: 'var(--rgba-navy-dark-60)',
};
```

---

## 12. Event Handlers com Cores

### ❌ ANTES (Dashboard/Relatorios.tsx)

```tsx
onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#00000050'}
onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '...'}

// Ou:
onMouseEnter={(e) => e.currentTarget.style.color = '#E3A93C'}
onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E3A93C'}
```

### ✅ DEPOIS (Usar classes CSS)

**Em CSS:**
```css
.button-interactive:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.button-accent {
  color: var(--accent-gold);
}

.button-accent:hover {
  background-color: var(--accent-gold);
  color: var(--text-black);
}
```

**Em React:**
```tsx
<button 
  className="button-accent hover:bg-accent-gold hover:text-black transition-colors"
>
  Click
</button>
```

---

## 13. Background Gradientes

### ❌ ANTES (Dashboard/Relatorios.tsx)

```tsx
<div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E3A93C]/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C8912F]/5 rounded-full blur-3xl pointer-events-none"></div>
```

### ✅ DEPOIS (Criar classes CSS)

**Em index.css:**
```css
.glow-accent-primary {
  background: radial-gradient(
    circle, 
    rgba(var(--brand-primary-rgb), 0.1) 0%, 
    transparent 100%
  );
}

.glow-accent-dark {
  background: radial-gradient(
    circle, 
    rgba(200, 137, 47, 0.1) 0%, 
    transparent 100%
  );
}
```

**Em TSX:**
```tsx
<div className="absolute top-0 left-1/4 w-96 h-96 glow-accent-primary rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 glow-accent-dark rounded-full blur-3xl pointer-events-none"></div>
```

---

## 14. Border Colors

### ❌ ANTES (Imobiliarias.tsx)

```tsx
<div
  style={{
    borderWidth: '2px',
    backgroundColor: '#0D0D0D',
    borderColor: '#C8A96A',
    color: '#F7F7F7'
  }}
>
```

### ✅ DEPOIS

```tsx
<div
  style={{
    borderWidth: '2px',
    backgroundColor: 'var(--brand-dark-secondary)',
    borderColor: 'var(--brand-primary)',
    color: 'var(--brand-text-muted)'
  }}
>
```

---

## 15. Tailwind Background com Valores Inline

### ❌ ANTES (Relatorios.tsx)

```tsx
<div className="bg-[#E3A93C]/5 rounded-full"></div>
<div className="bg-[#C8912F]/5 rounded-full"></div>
```

### ✅ DEPOIS (Adicionar ao tailwind.config.js)

**Em tailwind.config.js:**
```javascript
module.exports = {
  theme: {
    extend: {
      backgroundColor: {
        'accent-primary': 'var(--accent-gold)',
        'accent-primary-light': 'rgba(227, 169, 60, 0.05)',
        'accent-dark-light': 'rgba(200, 137, 47, 0.05)',
      },
    },
  },
};
```

**Em TSX:**
```tsx
<div className="bg-accent-primary-light rounded-full"></div>
<div className="bg-accent-dark-light rounded-full"></div>
```

---

## 16. Padrão para Componentes Novos

### ✅ PADRÃO RECOMENDADO

```tsx
interface BadgeProps {
  type: 'premium' | 'nova' | 'parceira';
  children: React.ReactNode;
}

export function Badge({ type, children }: BadgeProps) {
  const badgeStyles = {
    premium: {
      backgroundColor: `rgba(var(--brand-primary-rgb), 0.13)`,
      color: 'var(--brand-primary)',
      fontFamily: 'var(--font-sans)',
    },
    nova: {
      backgroundColor: `rgba(var(--brand-dark-rgb), 0.13)`,
      color: 'var(--brand-text-muted)',
      fontFamily: 'var(--font-sans)',
    },
    parceira: {
      backgroundColor: 'rgba(12, 31, 38, 0.13)',
      color: '#0C1F26',
      fontFamily: 'var(--font-sans)',
    },
  };

  return (
    <span style={badgeStyles[type]}>
      {children}
    </span>
  );
}
```

---

## 17. Migration Checklist por Arquivo

### Imobiliarias.tsx
- [ ] backgroundColor colors → var()
- [ ] borderColor colors → var()
- [ ] color values → var()
- [ ] fontFamily → var(--font-*)
- [ ] Remover borderWidth inline se possível

### Dashboard/Relatorios.tsx
- [ ] #E3A93C (89 instances) → var(--accent-gold)
- [ ] #0B0B0C → var(--bg-dark-pure)
- [ ] #C7C7C7 → var(--text-gray-light)
- [ ] fontFamily → var()
- [ ] boxShadow glows → var()

### Dashboard/PropostasLista.tsx
- [ ] Same as Relatorios (45 instances)

### Dashboard/Proposta.tsx
- [ ] Same as Relatorios (32 instances)

### LayoutController.tsx
- [ ] #0A0F1F → var(--brand-secondary-light)
- [ ] #111827 → var(--bg-dark-blue)
- [ ] #F2F2F2 → var(--text-light-secondary)

### Components (Mega, Testimonials, etc)
- [ ] #D4AF67 → var(--brand-primary)
- [ ] boxShadow → var()

---

## 📝 Notas Importantes

1. **Sempre use tokens** para novas cores - nunca hardcode
2. **Para transparências**, use os tokens `--rgba-*` pré-calculados
3. **Para gradientes**, crie novos tokens em `tokens.css` conforme necessidade
4. **Para sombras**, use `--shadow-*` ou crie novos conforme necessário
5. **Para tipografia**, use `--font-*` family, size, weight variables

---

**Última atualização:** Phase 5 - November 28, 2025
