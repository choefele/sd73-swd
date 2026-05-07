import { app } from "./app.js";
import { connectDb } from "./db.js";

try {
  await connectDb();

  const port = Number(process.env.PORT) || 3000;
  const host = process.env.HOST || "127.0.0.1";

  app.listen(port, host, () => {
    console.log(`Server listening on http://${host}:${port}`);
  });
} catch (error) {
  console.error("Error starting server", error);
  process.exit(1);
}
