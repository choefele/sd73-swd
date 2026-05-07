# Express TypeScript

A minimal Express server using Node.js, TypeScript, native ESM modules, and tsx for auto-reload during development.

## Scripts

- `npm run dev` starts the Express server with tsx watch mode on port 3000.
- `npm run build` builds the server into `dist`.
- `npm start` runs the built server.
- `npm run typecheck` checks TypeScript types.

Both `npm run dev` and `npm start` load local configuration from `.env` when the file exists.

The Express app is defined in `src/app.ts` without connecting to MongoDB. Runtime startup in `src/server.ts` connects to MongoDB first, then starts listening.

## Endpoints

- `GET /` returns a hello message.
- `GET /health` returns a health check response.
