# Project guide

## Architecture and conventions
- Client-only React 19 + TypeScript app built with Vite; no backend or router.
- `index.html` loads `src/main.tsx`, which renders `App` inside `StrictMode`.
- `src/App.tsx` contains the page, reusable `FeatureCard`, and theme state. Theme selection persists in `localStorage` and sets the root `data-theme` attribute.
- `src/index.css` defines global styles and light/dark CSS variables; `src/App.css` defines page layout and responsive styles. Reuse these variables and existing CSS classes. Static assets live in `public/`.
- Follow existing typed function components, hooks, and ES module imports. Formatting: four spaces, double quotes, semicolons, no trailing commas, 80-column target (`.prettierrc`). ESLint includes type-aware TypeScript and React Hooks rules.

## Development and checks
- Use npm and maintain `package-lock.json`. Match Node to `.nvmrc` (24.13.0); install with `npm ci --include=dev`.
- `npm run dev`: start the Vite development server.
- `npm run lint`: run ESLint.
- `npm run build`: run TypeScript project checks (`tsc -b`) and build to `dist/`.
- `npm run preview`: serve the built site locally.
- `npm run prettify`: format the entire repository; avoid unrelated formatting changes. Prettier is invoked through `npx` and is not a declared dependency.
- No automated test suite or test script is configured. For UI changes, manually verify responsive layouts, light/dark themes, and theme persistence after reload.
- CI runs lint and build on pushes to `develop`, `feature/*`, and `bug/*`, and on PRs targeting `main`. Pushes to `main` build and deploy `dist/` to GitHub Pages. Preserve Vite's `/example-page/` base path.

## Engineering principles
- Prefer simple, maintainable solutions and follow existing patterns and conventions.
- Use TDD for bug fixes and new behavior where practical; account for the current lack of test tooling.
- Keep changes focused; avoid unrelated refactoring.
- Keep dependencies up to date without unnecessary additions; update the npm lockfile with dependency changes.
- Before completing work, run relevant tests when available, lint, type checks, and builds; report any failures or checks not run.
- Never commit secrets or modify production infrastructure without approval.
- Work autonomously on safe, reversible changes.
