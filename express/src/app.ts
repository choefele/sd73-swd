import express from "express";
import userRouter from "./users/routes.js";
import errorHandler from "./middleware/errorHandler.js";

export const app = express();

app.use(express.json());

app.get("/health", (_request, response) => {
  response.json({
    status: "ok",
  });
});

app.use(userRouter);
app.use("*splat", (req, res, next) => {
  throw new Error("Not Found", { cause: { status: 404 } });
});
app.use(errorHandler);
