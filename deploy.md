# Deploy instructions

No payment accounts, secrets, databases, or external APIs are required.

## GitHub Pages

1. Create a public GitHub repository.
2. Upload `index.html`, `styles.css`, and `app.js` to the repository root.
3. Go to repository Settings > Pages.
4. Set source to the default branch and `/root`.
5. Save and wait for the GitHub Pages URL.

## Vercel

1. Create a new Vercel project from the repository.
2. Framework preset: Other.
3. Build command: leave empty.
4. Output directory: leave empty or use repository root.
5. Deploy.

## Netlify

1. Create a new Netlify site from the repository or drag the folder into Netlify Drop.
2. Build command: leave empty.
3. Publish directory: repository root.
4. Deploy.

## Client handoff option

If the client only needs files, deliver:

- `index.html`
- `styles.css`
- `app.js`
- `delivery-package.md`

The client can open `index.html` locally or host the three static files anywhere.
