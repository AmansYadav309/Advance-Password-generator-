# Password Generator

A responsive React + Vite app for generating random passwords with adjustable length, character sets, strength meter, and one-click copy.

## Features
- Toggle uppercase, lowercase, numbers, and symbols (all on by default).
- Adjustable length from 5–32 via slider or numeric input (default 8).
- Real-time strength indicator (0–100%) based on length ≥ 8 and presence of each character class.
- One-click “Generate Password” and “Copy” with snackbar feedback.
- Tailwind-styled UI with Material UI controls and radial-gradient background.

## Tech Stack
- React 19, Vite 7
- Tailwind CSS 4 (@tailwindcss/vite)
- Material UI 7 (@mui/material, @mui/icons-material, emotion)

## Getting Started
1) Install dependencies: `npm install`
2) Run dev server: `npm run dev` (default http://localhost:5173)
3) Build for production: `npm run build`
4) Preview the build: `npm run preview`

## Usage
- Set the desired length with the slider or number field (5–32).
- Toggle the character sets you want included.
- Click “Generate Password” to create a new password; the strength bar updates automatically.
- Click “Copy” to place the generated password on your clipboard.

## Project Structure
- `src/App.jsx` – app shell
- `src/Page/PasswordPage.jsx` – main layout & state
- `src/components/PasswordBox.jsx` – display + copy
- `src/components/StregthBar.jsx` – strength meter
- `src/components/LenghtSlider.jsx` – length controls
- `src/components/Options.jsx` – character set toggles
- `src/components/GenerateButton.jsx` – action button
- `src/components/Background.jsx` – radial gradient wrapper
- `src/index.css` – global styles (Tailwind + number input tweaks)

## Notes
- Passwords are generated with `Math.random`; use the Web Crypto API for stronger entropy in production scenarios.
- Customize theming via `src/App.css` or Tailwind utilities as needed.
