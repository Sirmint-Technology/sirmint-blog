# Sirmint Journal

A fast static technology blog for **blog.sirmint.com**, built with Astro, Markdown and GitHub Pages.

## Repository details

- **Repository name:** `sirmint-blog`
- **Description:** `Official Sirmint Technology journal built with Astro and Markdown, deployed on GitHub Pages.`
- **Visibility:** Public (required for free GitHub Pages on a free organization account)
- **Production domain:** `https://blog.sirmint.com`

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

## Build test

```bash
npm run build
```

The production output is generated in `dist/`.

## Publish a new article

1. Open `src/content/blog/`.
2. Copy an existing `.md` file.
3. Change the filename and frontmatter.
4. Write the article in Markdown.
5. Commit to the `main` branch.

GitHub Actions will build and deploy the updated site automatically.

Example frontmatter:

```yaml
---
title: "Article title"
description: "A clear 40–180 character search description."
publishDate: 2026-07-20
author: "Rajiv Kapur"
category: "Web Applications"
tags: ["React", "Node.js", "APIs"]
featuredImage: "/images/example.png"
draft: false
---
```

Set `draft: true` to keep an article out of the production build.

## Create the GitHub repository

Create a new repository under the preferred owner:

- Recommended owner: `Sirmint-Technology`
- Repository: `sirmint-blog`
- Do not initialize it with another README, `.gitignore`, or license.

Then upload this project or run:

```bash
git init
git add .
git commit -m "Launch Sirmint Journal"
git branch -M main
git remote add origin https://github.com/Sirmint-Technology/sirmint-blog.git
git push -u origin main
```

## Enable GitHub Pages

In the repository:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, select **GitHub Actions** as the source.
3. Open **Actions** and confirm the `Deploy to GitHub Pages` workflow succeeds.
4. In **Settings → Pages → Custom domain**, enter `blog.sirmint.com`.
5. Enable **Enforce HTTPS** when GitHub makes the option available.

## Cloudflare DNS

Remove the old Blogger `blog` record, then create:

| Type | Name | Target | Proxy |
|---|---|---|---|
| CNAME | `blog` | `Sirmint-Technology.github.io` | DNS only |

If the repository is created under the personal `rajivkap` account instead, use `rajivkap.github.io` as the target.

Do not include `/sirmint-blog` in the CNAME target.

## Important files

- `src/content/blog/` — Markdown articles
- `src/content.config.ts` — article field validation
- `src/pages/` — site pages and routes
- `src/styles/global.css` — complete visual design
- `.github/workflows/deploy.yml` — automatic GitHub Pages deployment
- `public/CNAME` — custom domain
- `public/robots.txt` — crawler rules

## URLs generated

- `/` — homepage
- `/articles/` — searchable article archive
- `/articles/<slug>/` — article pages
- `/categories/` — category directory
- `/categories/<category>/` — category pages
- `/about/`
- `/privacy/`
- `/rss.xml`
- `/sitemap-index.xml`

## Contact and transactions

This is a static publication. It intentionally does not contain logins, payments, customer data or a local contact-form backend. Project enquiries are sent to the main Sirmint website.
