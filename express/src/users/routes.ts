import { Router } from "express";
import { createUser, readUsers } from "./controllers.js";
import validateBody from "../middleware/validateBody.js";
import { userInputSchema } from "./model.js";

const router = Router();
router.post("/users", validateBody(userInputSchema), createUser);
router.get("/users", readUsers);

export default router;
