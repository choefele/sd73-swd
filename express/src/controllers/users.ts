import { RequestHandler } from "express";
import User from "../models/user.js";

export const createUser: RequestHandler = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201);
    res.json(user);
  } catch (error) {
    res.status(400);
    res.json({ message: "Invalid input data" });
  }
};

export const readUsers: RequestHandler = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200);
    res.json(users);
  } catch (error) {
    res.status(400);
    res.json({ message: "Invalid input data" });
  }
};
