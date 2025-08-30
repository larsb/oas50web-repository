# GitHub Pages Deployment Instructions

## To deploy this site to GitHub Pages:

1. Push your code to the `main` branch of your GitHub repository
2. Go to your repository settings on GitHub
3. Navigate to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. The deployment will happen automatically using the workflow in `.github/workflows/deploy.yml`

## Important Notes:

- The site will be available at: `https://larsb.github.io/oas50web-repository/`
- The Vite config is set up with the correct base path for GitHub Pages
- If you change the repository name, update the `base` property in `vite.config.ts`

## Local Development:

For local development, you can still use:
```bash
npm run dev
```

This will work locally even with the GitHub Pages base path configured.