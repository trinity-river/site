# Trinity River Management — site

Single-page brochure site at [trinityrivermgmt.com](https://trinityrivermgmt.com).
Static HTML/CSS/JS — no build step.

## Files

| Path | What it is |
|---|---|
| `index.html` | Page structure and copy. Edit this for any wording change. |
| `styles.css` | All visual styling. Brand colors live as CSS variables in `:root`. |
| `scripts.js` | Nav scroll state, fade-up scroll animations, runtime email obfuscation. |
| `assets/portrait.jpg` | About-section photo. |

## Editing

Open `index.html` in any text editor. Sections are clearly commented (`<!-- HERO -->`, `<!-- INTENT -->`, etc.). Brand colors and typography are defined in `:root` at the top of `styles.css`; change the variable values to retheme without hunting through the file.

For local preview, open `index.html` directly in a browser, or run a simple server:

```
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Deploying

Pushes to `main` auto-deploy via Cloudflare Pages.

```
git add -A
git commit -m "Edit description"
git push
```

Cloudflare watches the repo and rebuilds within ~30 seconds of a push. Verify at trinityrivermgmt.com.

## Brand reference

The full brand specification (colors, typography, spacing rules, voice) lives in `acquisition-ai/data/external/confidential/trm-brand/TRM_Style_Guide.docx`. This site is the canonical implementation of that style guide — match it when adding new sections or materials elsewhere.
