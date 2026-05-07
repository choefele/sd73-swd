import express from "express";
import userRouter from "./users/routes.js";

export const app = express();

app.use(express.json());

app.get("/health", (_request, response) => {
  response.json({
    status: "ok",
  });
});

app.use(userRouter);
