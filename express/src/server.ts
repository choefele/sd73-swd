import { app } from "./app.js";
import { connectDb, disconnectDb } from "./db.js";

try {
  const mongoUri = process.env.MONGO_URI || "";
  const mongoDb = process.env.MONGO_DB || "project0";
  await connectDb(mongoUri, mongoDb).then(() => {
    console.log("MongoDB connected");
  });

  const port = Number(process.env.PORT) || 3000;
  const host = process.env.HOST || "127.0.0.1";
  const server = app.listen(port, host, () => {
    console.log(`Server listening on http://${host}:${port}`);
  });

  process.on("SIGTERM", shutDown);
  process.on("SIGINT", shutDown);

  function shutDown() {
    console.log("Received kill signal, shutting down gracefully");
    server.close(() => {
      console.log("Closed out server connections");
      disconnectDb().then(() => {
        console.log("Closed DB connection");
        process.exit(0);
      });
    });

    setTimeout(() => {
      console.error(
        "Could not close connections in time, forcefully shutting down",
      );
      process.exit(1);
    }, 2000);
  }
} catch (error) {
  console.error("Error starting server", error);
  process.exit(1);
}
