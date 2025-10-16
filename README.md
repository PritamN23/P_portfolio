# Pritam's Developer Portfolio

This is a simple, responsive frontend developer portfolio built using plain HTML, CSS and JavaScript. The project showcases skills, work experience and contact information.

Folder structure
```
index.html
style.css
script.js
assets/
```

What I have done so far (step-by-step)

1. Project setup
   - Created the project root with the main files: `index.html`, `style.css`, and `script.js`.
   - Added an `assets/` folder to store images used in the site.

2. `index.html`
   - Added HTML5 document structure and meta tags for responsive behavior and description.
   - Linked `style.css` and `script.js`.
   - Included Google Fonts (Poppins) via stylesheet link.
   - Implemented accessible "Skip to content" link for keyboard users.
   - Created a header with a brand label and a navigation menu (Home, About, Services, Projects, Contact).
   - Implemented a semantic `main` area with:
     - A hero section containing a left column (greeting, subtitle, typed effect placeholder, CTA buttons) and a right column (profile image from `assets/bg.png`).
     - A "Work Experience & Skills" section that lists technologies (C, C++, Python, HTML5, CSS3) using cards with images from the `assets/` folder.
     - A contact section with an email link.
   - Added a footer with a short description and copyright notice.

3. `style.css`
   - Defined CSS variables for colors, layout, and spacing (e.g., `--bg`, `--accent`, `--muted`).
   - Applied global box-sizing and reset rules.
   - Set body font stack using Poppins and system fonts.
   - Built a responsive container class and accessibility-focused skip link styles.
   - Styled header and navigation, including hover and focus states.
   - Implemented responsive layout for the hero section with a two-column layout on desktop and stacked layout on small screens.
   - Styled buttons, cards, timeline grid, and the footer.
   - Added responsive breakpoints at 900px and 640px to adjust the grid columns, hero sizes and enable mobile navigation behavior.

4. `script.js`
   - Implemented mobile navigation toggle (hamburger) which toggles `open` class on the nav and updates `aria-expanded` for accessibility.
   - Added a typed-text effect using `Typed` if the `Typed` library is loaded. The typed strings are: "Web developer", "Web designer", "Frontend Engineer".
   - Close mobile nav automatically when a nav link is clicked on small screens (improves UX).

5. `assets/` folder
   - Images included:
     - `bg.png` — hero/profile image used in the hero section
     - `C Programming.jpg` — card image for C programming
     - `c++.png` — card image for C++
     - `developer.png` — (present in folder, not currently referenced in HTML)
     - `html.png` — card image for HTML5 and CSS3
     - `python.png` — card image for Python

Notes, assumptions and next steps
- The typed effect depends on an external library (`Typed.js`). If you want the effect, add the library via CDN in `index.html`, for example:

- The "Download Resume" button currently links to `#`. Replace the `href` with the actual resume file (e.g., `assets/resume.pdf`) and ensure the file is added to `assets/`.
- `developer.png` is available in `assets/` but not referenced. You may use it in another section or replace `bg.png` if desired.
- Consider adding `rel="noopener noreferrer"` to external links (GitHub link already has it).
- Add proper `alt` text for all images (existing `alt` attributes are present but can be improved for clarity).

How to view locally

1. Open `index.html` in your browser. On Windows you can right-click the file and choose "Open with" → your browser.
2. For a simple local server (useful for testing routing or external libs), run a local HTTP server in the project folder. For example, using Python 3 from the project root:

```
python -m http.server 8000
```

Then open http://localhost:8000 in your browser.

Completion

I added this `README.md` file to document what's present in the project and the step-by-step changes. If you'd like, I can:

- Add a proper resume file and wire the Download Resume button.
- Include `Typed.js` via CDN so the typed effect works out-of-the-box.
- Improve accessibility and missing image alt text.
- Create a packaged release or add more project pages.

File added:
- `README.md` — project summary and step-by-step documentation

If you'd like any of the follow-ups implemented now, tell me which one and I'll do it next.
