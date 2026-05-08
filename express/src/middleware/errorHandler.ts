import { type ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let errorMessage = "Internal server error";
  let statusCode = 500;

  if (err instanceof Error) {
    // check if cause property exists, is an object, and has a 'status' property
    if (err.cause && typeof err.cause === "object" && "status" in err.cause) {
      statusCode = err.cause.status as number;
    }
    errorMessage = err.message;
  }
  process.env.NODE_ENV !== "production" &&
    statusCode != 404 &&
    console.log(err.stack);
  res.status(statusCode).json({ error: errorMessage });
};

export default errorHandler;
