import request from "supertest";
import { describe, expect, it } from "vitest";
import { app } from "../app.js";

describe("users API", () => {
  it("rejects invalid create input", async () => {
    const response = await request(app).post("/users").send({}).expect(400);

    expect(response.body).toEqual({
      message: "Invalid input data",
    });
  });

  it("lists users as public API resources", async () => {
    await request(app).post("/users").send({ name: "Ada" }).expect(201);
    await request(app).post("/users").send({ name: "Grace" }).expect(201);

    const response = await request(app).get("/users").expect(200);

    expect(response.body).toEqual([
      {
        id: expect.any(String),
        name: "Ada",
      },
      {
        id: expect.any(String),
        name: "Grace",
      },
    ]);

    for (const user of response.body) {
      expect(user).not.toHaveProperty("_id");
      expect(user).not.toHaveProperty("__v");
    }
  });
});
