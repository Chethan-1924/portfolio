# D Chethan Kumar — Portfolio

Personal portfolio site. Built with plain HTML, CSS, and JavaScript — terminal
and security-report themed to reflect a Python + full-stack background with an
ethical hacking internship. No frameworks, no build step.

**Live site:** _add your GitHub Pages link here after deploying_

## Tech stack

- HTML5
- CSS3 (custom properties for theming, no framework)
- Vanilla JavaScript (DOM rendering, IntersectionObserver for scroll reveals,
  a small terminal-typing effect)

## Sections

- **Hero** — animated terminal boot sequence, name, and CTA buttons
- **Profile** — summary pulled from resume
- **Skills** — grouped by category, styled as a scan report
- **Projects** — Grocery Store Management System, Social Engineering simulation
- **Experience** — L&T EduTech ethical hacking internship
- **Education & Certifications**
- **Contact** — email, phone, LinkedIn, GitHub, resume download

## Project structure

```
index.html      # page structure and static content
style.css        # all styling and theming
script.js        # renders Skills/Projects/Experience/Education from data
                  # arrays at the top of the file, plus nav + animations
assets/
  profile.png                    # profile image
  D_Chethan_Kumar_Resume.pdf     # resume, linked from Hero and Contact
  favicon.svg
```

## Running it locally

No install, no build. Just open `index.html` directly in a browser, or serve
it locally for a slightly more accurate preview:

```bash
# Python
python3 -m http.server 5500

# or, if you have Node's npx
npx serve .
```

Then visit `http://localhost:5500` (or whatever port it prints).

## Editing content

Skills, Projects, Experience, and Education are defined as plain arrays near
the top of `script.js` (`SKILLS`, `PROJECTS`, `EXPERIENCE`, `EDUCATION`). Edit
those arrays to update the content — the rendering code below builds the HTML
automatically. The Hero text and Contact details are static in `index.html`.

## Deploying to GitHub Pages

Since there's no build step, this is simpler than a React/Vite deploy:

1. Push this project to a GitHub repository.
2. In the repo's **Settings → Pages**, set:
   - Source: **Deploy from a branch**
   - Branch: **main**, folder **/ (root)**
3. Save. GitHub Pages will publish directly from your `main` branch — no
   `gh-pages` branch or deploy command needed.
4. Site goes live at `https://<username>.github.io/<repo-name>/`.

Any time you push a change to `main`, the live site updates automatically
within a minute or two.

## License

Personal project — feel free to fork for structure/reference, but please
swap in your own content before reusing.
