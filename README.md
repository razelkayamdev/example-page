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
