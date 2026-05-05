import { Router } from "express";
import User from "../models/users.js";

const userRoutes = Router();

userRoutes.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201);
    res.json(user);
  } catch (error) {
    res.status(400);
    res.json({ message: "Invalid input data" });
  }
});

userRoutes.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200);
    res.json(users);
  } catch (error) {
    res.status(400);
    res.json({ message: "Invalid input data" });
  }
});

export default userRoutes;
