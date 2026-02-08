# Hosting on GitHub Pages Guide

This guide details how to host your SvelteKit website on GitHub Pages. The project has already been configured for this, so you primarily need to know how to trigger a deployment and verify settings.

## 1. Project Configuration (Already Completed)

The following changes were made to prepare the project for GitHub Pages:

### A. Static Adapter

We installed `@sveltejs/adapter-static` to convert the dynamic SvelteKit app into static HTML/CSS/JS files that GitHub Pages can host.

### B. Base Path (`svelte.config.js`)

GitHub Pages hosts project sites at `https://<username>.github.io/<repository-name>/`.
We configured `svelte.config.js` to add `/<repository-name>` (e.g., `/Sri-Speech`) to all URLs in production mode.

### C. Prerendering (`src/routes/+layout.js`)

We added `export const prerender = true;` to the root layout to ensure every page is generated as a static file during the build process.

### D. Deployment Script (`package.json`)

We added a `deploy` script:

```json
"deploy": "npm run build && touch build/.nojekyll && npx gh-pages -d build -t"
```

This script:

1. Builds the project (`npm run build`).
2. Creates a `.nojekyll` file to prevent GitHub from ignoring files starting with `_` (like `_app`).
3. Pushes the `build` folder to the `gh-pages` branch using the `gh-pages` package.

## 2. How to Deploy

To deploy or update your website, simply run this command in your terminal:

```bash
npm run deploy
```

This will:

1. Compile your site.
2. Push the static files to the `gh-pages` branch on GitHub.
3. Your site will be live at: **<https://anshumsrivastava.github.io/Sri-Speech/>** (within 1-2 minutes).

> **Note:** Always ensure your working directory is clean (commit your changes) before deploying, although it's not strictly required, it's good practice.

## 3. GitHub Repository Settings

You need to tell GitHub to serve your website from the `gh-pages` branch.

1. Go to your repository on GitHub: [https://github.com/AnshumSrivastava/Sri-Speech](https://github.com/AnshumSrivastava/Sri-Speech)
2. Click on **Settings** (top right tab).
3. On the left sidebar, click **Pages**.
4. Under **Build and deployment** > **Source**, select **Deploy from a branch**.
5. Under **Branch**, select `gh-pages` and `/ (root)`.
6. Click **Save**.

If the `gh-pages` branch doesn't appear, run `npm run deploy` once first to create it.

## 4. Troubleshooting Common Issues

### 404 Not Found on specific pages

If you click a link and get a 404, or an image is missing:

- **Cause:** The link or image path might be missing the repository base path.
- **Fix:** Ensure all internal links use the `{base}` import:

  ```svelte
  <script>
    import { base } from '$app/paths';
  </script>
  <a href="{base}/about">About</a>
  <img src="{base}/images/logo.png" />
  ```

### Site shows README.md instead of the app

- **Cause:** GitHub Pages is serving the `main` branch instead of `gh-pages`.
- **Fix:** Go to **Settings > Pages** and ensure the branch is set to `gh-pages`.

### "Touch" command not found (Windows)

If you are on Windows and not using Git Bash, the `touch` command in the deploy script might fail.

- **Fix:** You can remove `&& touch build/.nojekyll` from `package.json` if you manually create a `.nojekyll` file in your `static` folder (it will be copied to build automatically).
