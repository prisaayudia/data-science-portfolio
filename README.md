# Data Science Portfolio

A responsive personal portfolio website built with React, Vite, plain CSS, and Lucide icons.

## Requirements
- Node.js 18+ recommended
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build
```bash
npm run build
npm run preview
```

## Personalize before publishing
1. Edit `src/data.js`: name, initials, email, GitHub, LinkedIn, profile introduction, skills, project descriptions, and experience.
2. Replace every placeholder repository URL (`https://github.com/yourusername`) with the actual project repository.
3. Remove skills you cannot confidently discuss in an interview.
4. Replace project starter descriptions with accurate details and results. Do not present work-in-progress research as completed.
5. Add a PDF CV as `public/cv.pdf` if you decide to add a CV download link.
6. Add real project screenshots if you have them. This starter uses a CSS-built visual instead of fake project screenshots.

## Deploy
Push the project to a GitHub repository and import it into Vercel, or use another static hosting provider that supports Vite. Build command: `npm run build`; output directory: `dist`.

## Notes
- The email button copies the configured email address, with a mailto fallback.
- The site is a static frontend. The contact section does not submit data to a backend.
