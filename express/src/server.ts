import express from "express";
import { createUser, readUsers } from "./controllers/users.js";
import "./db.js";

export const app = express();

app.use(express.json());

app.get("/health", (_request, response) => {
  response.json({
    status: "ok",
  });
});

app.post("/users", createUser);
app.get("/users", readUsers);

if (process.env.NODE_ENV !== "test") {
  const port = Number(process.env.PORT) || 3000;
  const host = process.env.HOST || "127.0.0.1";

  app.listen(port, host, () => {
    console.log(`Server listening on http://${host}:${port}`);
  });
}
