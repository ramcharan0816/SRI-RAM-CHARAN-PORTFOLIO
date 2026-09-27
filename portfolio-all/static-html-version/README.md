# Sri Ram Charan — Portfolio

A single-page personal portfolio site: about, skills, projects, experience, certifications, education and contact.

## Files
- `index.html` — the entire site (HTML, CSS and JS in one file, no build step needed).

## Run locally
Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy for free with GitHub Pages
1. Create a new GitHub repo (e.g. `portfolio`) and push these files to it.
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. Save — your site will be live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## Editing
Everything (text, colors, sections) lives in `index.html`:
- Colors/fonts are CSS variables near the top of the `<style>` block.
- Content sections (`About`, `Skills`, `Projects`, `Experience`, `Certifications`, `Education`, `Contact`) are plain HTML further down — search for the `<section id="...">` tags to find each one.
