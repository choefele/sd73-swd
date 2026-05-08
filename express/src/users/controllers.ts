import type { RequestHandler } from "express";
import { UserModel } from "./model.js";

export const createUser: RequestHandler = async (req, res) => {
  const user = await UserModel.create(req.body);
  res.status(201);
  res.json(user);
};

export const readUsers: RequestHandler = async (req, res) => {
  const users = await UserModel.find();
  res.status(200);
  res.json(users);
};
