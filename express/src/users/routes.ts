import { Router } from "express";
import { createUser, readUsers } from "./controllers.js";

const router = Router();
router.post("/users", createUser);
router.get("/users", readUsers);

export default router;
