# FullStackNotes

FullStackNotes is the frontend app for the MERN-NOTES project. It is built with React and Vite and connects to a backend API for note management.

## Project structure

- `src/`
  - `App.jsx` — main application component
  - `main.jsx` — React entry point and router setup
  - `index.css` — global CSS styles
- `public/` — static assets
- `package.json` — frontend dependencies and scripts

## Features

- React + Vite frontend
- Browser routing support via `react-router-dom`
- Connects to backend API for notes
- Fast local development with HMR

## Setup

1. Install dependencies

```powershell
cd frontend\FullStackNotes
npm install
```

2. Start the frontend

```powershell
npm run dev
```

3. Open the local URL shown by Vite (usually `http://localhost:5173`)

## Backend

The backend lives in `../backend` and uses Express, Mongoose, and Upstash Redis for rate limiting.

To run the backend:

```powershell
cd ..\backend
npm install
npm run dev
```

## Important notes

- Keep secret values out of Git by adding `.env` to `.gitignore`
- If you already committed a secret file, remove it from Git tracking with:

```powershell
git rm --cached .env
```

- Make sure the frontend and backend are running in separate terminals while developing.

## Useful commands

- `npm run dev` — start the Vite dev server
- `npm run build` — create a production build
- `npm run preview` — preview the production build locally

## Troubleshooting

- If you see React hook errors, ensure `react` and `react-dom` versions match and that `BrowserRouter` is imported from `react-router-dom`.
- If the app fails to connect to the backend, confirm the backend server is running and the API URL is correct.
