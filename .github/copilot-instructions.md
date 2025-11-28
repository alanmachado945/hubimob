# Copilot Instructions for HUBIMOB - IA para Corretores de Elite

## Project Overview
- **Type:** Modern React (TSX) web app with Vite, TailwindCSS, and Cloudflare Workers backend.
- **Purpose:** AI-driven real estate platform for elite brokers, with automated lead qualification, CRM, and analytics.

## Key Architecture
- **Frontend:**
  - Located in `src/react-app/`.
  - Pages: `pages/` (e.g., `Home.tsx`, `Login.tsx`, `Planos.tsx`).
  - Components: `components/` (grouped by feature, e.g., `corretores/`, `ia/`, `encontre/`, `planos/`, `sobre/`).
  - Shared types: `shared/types.ts`.
  - Styling: TailwindCSS (`index.css`, `tailwind.config.js`).
- **Backend/Worker:**
  - Cloudflare Worker code in `src/worker/`.
  - Configured via `wrangler.json` (D1 DB, R2 bucket, SPA routing).

## Developer Workflows
- **Install dependencies:**
  ```
  npm install
  ```
- **Start dev server:**
  ```
  npm run dev
  ```
- **Build for production:**
  ```
  npm run build
  ```
- **Type check & dry-run deploy:**
  ```
  npm run check
  ```
- **Cloudflare type generation:**
  ```
  npm run cf-typegen
  ```

## Conventions & Patterns
- **Component Structure:**
  - Use functional components, named exports, and group by feature/domain.
  - Use icons from `lucide-react`.
  - Use Tailwind utility classes for all styling.
  - Use `Montserrat` and `Playfair Display` fonts for headings and text.
- **Data & Logic:**
  - Most UI logic is local to components; props and local state are preferred over global state.
  - Feature lists, testimonials, and steps are often defined as arrays at the top of components.
- **Routing:**
  - Uses `react-router-dom` for navigation.
- **Linting:**
  - ESLint config in `eslint.config.js` (TypeScript, React, hooks, refresh plugins).
- **Aliases:**
  - Use `@` as alias for `src/` (see `vite.config.ts`).

## Integration Points
- **Cloudflare D1 (SQL) and R2 (object storage):**
  - Bindings configured in `wrangler.json`.
- **Mocha platform:**
  - Created with [getmocha.com](https://getmocha.com), uses `@getmocha/vite-plugins` and `@getmocha/users-service`.

## Examples
- **Feature array pattern:**
  ```tsx
  // At top of component
  const features = [
    { icon: Brain, title: 'AI', description: '...' },
    ...
  ];
  // In JSX
  {features.map(f => <FeatureCard ... />)}
  ```
- **Tailwind usage:**
  ```tsx
  <div className="text-4xl font-bold text-amber-400" />
  ```

## References
- Main entry: `src/react-app/main.tsx`
- Page examples: `src/react-app/pages/`
- Worker entry: `src/worker/index.ts`
- Config: `vite.config.ts`, `wrangler.json`, `tailwind.config.js`, `eslint.config.js`

---
For questions, see the [README.md](https://github.com/alanmachado945/hubimob/blob/main/README.md) or join the [Discord](https://discord.gg/shDEGBSe2d).
