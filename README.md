<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/7bc8bc45-a76d-46fa-a2bf-fd61d1f6e768

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

The site is built and published automatically by
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push
to `main`.

**One-time setup in the GitHub repo:**

1. Go to **Settings → Pages**.
2. Under **Build and deployment → Source**, pick **GitHub Actions**.
3. Push to `main` — the workflow builds with Vite and deploys to
   `https://<your-user>.github.io/samizdat/`.

The base path `/samizdat/` is set in [`vite.config.ts`](vite.config.ts); if
you rename the repository, update it there too.
