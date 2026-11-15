# Example Page

Deployed via [Github pages](https://razelkayamdev.github.io/example-page/)

## Tests

Use the Node version in `.nvmrc` and install dependencies with
`npm ci --include=dev`.

- `npm test`: run the test suite once.
- `npm run test:watch`: rerun tests as you edit.

The Vitest suite uses React Testing Library and jsdom to check page content,
feature and CTA links, theme switching, system preferences, and saved themes.
These component tests do not check visual layout in a browser.

The GitHub Actions test workflow runs the suite alongside `npm run lint` and
`npm run build`.

## Dependency maintenance

Use Node 24.13.0 from `.nvmrc`. Keep `@types/node` on major 24 and TypeScript
on 6.0 until `typescript-eslint` supports TypeScript 7. jsdom stays on 29.1.1
because versions 30 and 31 require Node 24.15.0 or newer on the Node 24 line.

The scoped `minimatch` override for `@typescript-eslint/typescript-estree`
addresses [GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249).
The parser uses the retained `minimatch()` API; version 11 removes other APIs
that it does not use. Remove the override when the parser depends on a patched
version (11.0.1 or newer) itself.

After updates, run `npm ci --include=dev`, `npm audit`, `npm ls`, `npm test`,
`npm run lint`, and `npm run build` (which also runs TypeScript checks).
