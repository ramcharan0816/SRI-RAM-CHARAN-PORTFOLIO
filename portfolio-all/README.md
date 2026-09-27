# Sri Ram Charan — Portfolio (All Code)

This zip contains two complete, independent versions of the same portfolio site.
Use whichever matches how you want to deploy it — don't mix files between them.

## 1. static-html-version/
A single self-contained `index.html` — no framework, no build step, no dependencies.

**Deploy on GitHub Pages:** push this folder's contents to a repo, enable Pages
(Settings → Pages → Deploy from branch → main → / root).

**Deploy on Vercel/Netlify:** if your project's Framework Preset is set to "Other"
(a plain static site, not Next.js), drag this folder in or connect the repo directly.

## 2. nextjs-version/
Drop-in files for an existing Next.js (App Router) project:
- `app/layout.tsx` — root layout: fonts, metadata, page shell
- `app/page.tsx` — the portfolio content and interactivity (client component)
- `app/globals.css` — all styling

**Use this if** your Vercel project was already scaffolded as a Next.js app
(has an `app/` folder, `package.json`, `next.config.*`, etc.) — copy these three
files into that project's `app/` folder, overwriting the defaults, then commit and push.

---

Both versions render the identical design: hero with photo, about, skills, projects,
experience, certifications, education, and contact — including the animated hover
states and the click-to-copy email button.
