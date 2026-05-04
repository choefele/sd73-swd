import "dotenv/config";
import express from "express";
import "./db.js";

export const app = express();

app.use(express.json());

app.get("/", (_, response) => {
  response.json({
    message: "Hello from Express and TypeScript",
  });
});

app.get("/health", (_request, response) => {
  response.json({
    status: "ok",
  });
});

if (process.env.NODE_ENV !== "test") {
  const port = Number(process.env.PORT) || 3000;
  const host = process.env.HOST || "127.0.0.1";

  app.listen(port, host, () => {
    console.log(`Server listening on http://${host}:${port}`);
  });
}
