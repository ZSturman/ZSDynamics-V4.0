# Static Site Documentation

This directory contains the static build of the portfolio website.

## How to serve the static site

You can serve this static site using the following command:

```bash
npx serve docs
```

Or use the npm script:

```bash
npm run serve
```

The site will be available at `http://localhost:3000`.

## Building the static site

To rebuild the static site, run:

```bash
npm run build
```

This will generate the static files in the `/docs` directory.

## Deployment

This static site can be deployed to any static hosting service such as:
- GitHub Pages (the `.nojekyll` file ensures compatibility)
- Netlify
- Vercel
- AWS S3
- Any web server that can serve static files