# Express TypeScript

A minimal Express server using Node.js, TypeScript, native ESM modules, and nodemon for auto-reload during development.

## Scripts

- `npm run dev` starts the Express server with nodemon on port 3000.
- `npm run build` builds the server into `dist`.
- `npm start` runs the built server.
- `npm run typecheck` checks TypeScript types.

## Endpoints

- `GET /` returns a hello message.
- `GET /health` returns a health check response.
