# CongTrinhSnap Website

Official Vietnamese-first website for CongTrinhSnap.

- Production URL (after Cloudflare Pages setup): https://congtrinhsnap.pages.dev
- Framework: Astro static site
- Hosting target: Cloudflare Pages
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

## Cloudflare Pages settings

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js: 22.12 or newer
- Use the free `*.pages.dev` hostname.

## CMS

The CMS interface is served from `/admin`; configuration is in `public/admin/config.yml`.
Before using it, deploy the Sveltia CMS Authenticator Worker and set its GitHub OAuth secrets in Cloudflare. See `docs/CMS-SETUP.md`.

The repository is public. Never commit credentials, private customer data, private construction photos, or project documents here.

## Documentation

- `docs/ARCHITECTURE.md`
- `docs/CMS-SETUP.md`
- `docs/DEPLOYMENT.md`
- `docs/CONTENT-PLAN.md`
