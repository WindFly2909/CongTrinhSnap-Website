# CongTrinhSnap Website

Official Vietnamese-first website for CongTrinhSnap.

- Production URL: https://congtrinhsnap.pages.dev
- Framework: Astro static site
- Hosting: Cloudflare Pages
- Content management: Sveltia CMS at /admin
- Repository visibility: Public
- CMS owner: WindFly2909 only

## Local development

Requirement: Node.js 22.12.0 or newer.

```bash
npm install
npm run dev
```

## Check and build

```bash
npm run check
npm run build
npm run preview
```

Static output is generated in `dist/`.

## Cloudflare Pages

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js: 22.12 or newer
- Free hostname: `congtrinhsnap.pages.dev`

## CMS

The CMS interface is served at `/admin`; configuration is in `public/admin/config.yml`.

CMS authentication uses a GitHub fine-grained personal access token restricted to the single website repository, with Contents read/write permission. Do not commit tokens or other secrets. See `docs/CMS-SETUP.md`.

## Security

- The repository is public; all committed content should be treated as public.
- Never commit credentials, personal access tokens, private customer data, private construction photos, or project documents.
- The CMS token must be restricted to `WindFly2909/CongTrinhSnap-Website`.
- The Android application repository is separate and must not be included in the CMS token's repository selection.

## Documentation

- `docs/ARCHITECTURE.md`
- `docs/CMS-SETUP.md`
- `docs/DEPLOYMENT.md`
- `docs/CONTENT-PLAN.md`
