# sigmaflo.ai

Marketing site for Sigmaflo, served by GitHub Pages at https://sigmaflo.ai.

Built with [Astro](https://astro.build) on the [AstroWind](https://github.com/arthelokyo/astrowind) template (MIT, see `LICENSE-astrowind.md`).

## Develop

```
npm install
npm run dev       # http://localhost:4321
npm run build     # output in dist/
npm run preview   # serve dist/
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.
The repository's Pages source must be set to "GitHub Actions" (Settings → Pages → Source).

## Forms

The "Book 15 minutes" form posts to a Google Apps Script web app (`SHEET_URL` in
`src/components/sigmaflo/Book15Form.astro`). The script itself is in `scripts/google-apps-script.js`.

## SuiteWorld announcement bar

To remove it after the event, delete the `<Announcement ... />` block between the
`SUITEWORLD ANNOUNCEMENT BAR: START` and `END` comments in `src/pages/index.astro`.
