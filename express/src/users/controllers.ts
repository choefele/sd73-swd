import type { RequestHandler } from "express";
import { UserModel, userInputSchema } from "./model.js";

export const createUser: RequestHandler = async (req, res) => {
  try {
    const userInput = userInputSchema.parse(req.body);
    const user = await UserModel.create(userInput);
    res.status(201);
    res.json(user);
  } catch (error) {
    res.status(400);
    res.json({ message: "Invalid input data" });
  }
};

export const readUsers: RequestHandler = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200);
    res.json(users);
  } catch (error) {
    res.status(400);
    res.json({ message: "Invalid input data" });
  }
};
