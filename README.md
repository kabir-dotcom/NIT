# Natural Immunotherapy – MERN MVP

Modern starter kit for a Natural Immunotherapy platform built with the MERN stack, Tailwind CSS, and Vite.

## Project Structure

```
natural-immunotherapy/
├── client/   # React + Vite frontend with Tailwind and React Router
└── server/   # Express + MongoDB backend with modular architecture
```

> Note: `node_modules_old/` can be removed if present; it is safe to delete once no processes are using it.

## Getting Started

### Backend (`server/`)
```bash
cd server
npm install
npm run dev
```
The Express server listens on `http://localhost:5000` by default. Configure MongoDB and JWT settings in `.env` (see `.env.example` for guidance).

### Frontend (`client/`)
```bash
cd client
npm install
npm run dev
```
The Vite dev server runs on `http://localhost:5173` and proxies API calls from `/api/*` to the backend.

Set `VITE_API_URL` in `client/.env` if the backend runs on a different host or port.

## Backend Highlights
- Express app split into config, routes, controllers, models, and services.
- Ready-to-use authentication flow (register/login/profile) with JWT + bcrypt.
- Sample content endpoints for diseases, boosters, blog posts, and hero content.
- Centralized error handling and MongoDB connection helper.

## Frontend Highlights
- Tailwind configured with custom color palette and global styles.
- Responsive navigation, hero, and card components tailored to the immunotherapy domain.
- React Router pages: Home, About, Diseases, Boosters, Blog, Contact.
- Axios-based API layer with graceful fallbacks when the backend is offline.

## Environment Variables

### `server/.env`
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/natural-immunotherapy
JWT_SECRET=dev-secret-key
JWT_EXPIRES_IN=7d
CLIENT_URL=http://localhost:5173
```

### `client/.env`
```env
VITE_API_URL=http://localhost:5000/api
```

Adjust these values for your local or production deployment needs.
