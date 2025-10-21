# GitHub Pages Deployment Guide

This project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

## 🚀 Quick Setup

### 1. Enable GitHub Pages in Your Repository

1. Go to your GitHub repository settings
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
4. Save the settings

### 2. Push Your Code

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

The GitHub Action will automatically build and deploy your site!

## 📋 Configuration Details

### Repository Settings
- **Repository name**: `portfolio` (in your GitHub settings)
- **Base path**: `/ZSDynamics-V4.0` (configured in `next.config.mjs`)
- **Build output**: `docs/` directory with assets in `docs/static/`
- **Site URL**: `https://zsturman.github.io/ZSDynamics-V4.0/`

### Important Files

- **`.github/workflows/deploy.yml`**: GitHub Actions workflow for automatic deployment
- **`next.config.mjs`**: Next.js configuration for static export
- **`scripts/post-export.js`**: Post-build script that creates `.nojekyll` file
- **`package.json`**: Contains build scripts

## 🔧 Build Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the static site (Next.js build + image optimization)
- `npm run export` - Full export process (build + post-export tasks)
- `npm run serve` - Locally serve the built site from `docs/`

## 🧪 Test Locally Before Deploying

```bash
npm run build
npm run serve
```

Then visit `http://localhost:3000` to test the production build locally.

## ✅ Static Export Features

- ✅ No server-side rendering (SSR)
- ✅ No API routes (all removed)
- ✅ Client-side components only
- ✅ Static HTML generation
- ✅ Optimized images with `next-image-export-optimizer`
- ✅ GitHub Pages compatible

## 📝 Notes

### Contact Form
The contact form in `components/ContactForm.tsx` calls an external API at `https://www.zsdynamics.com/api/send-mail` directly from the client. This is fully compatible with static hosting.

### Base Path
The site is configured with `basePath: "/ZSDynamics-V4.0"` to match your GitHub repository name. If you change your repository name, update this in `next.config.mjs`.

### Static Assets
All assets (CSS, JavaScript, images) are moved from `_next/static/` to `docs/static/` during the post-export process. This ensures GitHub Pages can serve them correctly without the underscore prefix.

### Custom Domain (Optional)
If you want to use a custom domain:

1. Add a `CNAME` file to the `docs/` folder with your domain
2. Update `next.config.mjs` to remove or change the `basePath`
3. Configure your DNS settings to point to GitHub Pages

## 🐛 Troubleshooting

### Styles Not Loading
- Ensure the `basePath` in `next.config.mjs` matches your repository name
- Check that `.nojekyll` file exists in `docs/` folder

### 404 Errors
- Make sure GitHub Pages source is set to "GitHub Actions"
- Verify the workflow completed successfully in the Actions tab
- Check that `trailingSlash: true` is set in `next.config.mjs`

### Build Failures
- Check the GitHub Actions logs in the repository's "Actions" tab
- Ensure all dependencies are in `package.json`
- Verify there are no server-side features (API routes, `getServerSideProps`, etc.)

## 🔄 Workflow Process

When you push to `main`:

1. GitHub Actions starts the workflow
2. Checks out your code
3. Installs Node.js and dependencies
4. Runs `npm run build`:
   - Next.js builds static HTML/CSS/JS
   - Images are optimized
   - Output goes to `docs/`
   - `.nojekyll` file is created
5. Uploads the `docs/` folder as an artifact
6. Deploys to GitHub Pages
7. Your site is live at `https://zsturman.github.io/portfolio/`

## 📚 Additional Resources

- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
