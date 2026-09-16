# Lit Le — Research & Career Website

A static academic portfolio website designed for GitHub Pages.

## Pages
- Home
- Research
- Publications
- Journey
- About

## Local preview
Open `index.html` in your browser, or use a simple local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages
1. Create a GitHub repository named `<your-username>.github.io`.
2. Upload the contents of this folder to the repository root.
3. In GitHub: Settings → Pages → Build and deployment → Deploy from a branch.
4. Select branch `main` and folder `/ (root)`.
5. Your site will be available at `https://<your-username>.github.io/`.

## Replace placeholders
Search for `PLACEHOLDER` across the files to update:
- email address
- Google Scholar link
- ORCID link
- GitHub link
- LinkedIn link
- CV file (current CV already included as `files/Lit_Le_CV.pdf`)
- publication details

## Add your photo
Replace the `LL` avatar block in `index.html` with an `<img>` tag, then place your photo in `assets/profile.jpg`.
