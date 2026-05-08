import request from "supertest";
import { describe, expect, it } from "vitest";
import { app } from "../app.js";

const isoPattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

describe("users API", () => {
  it("rejects invalid create input", async () => {
    const response = await request(app).post("/users").send({}).expect(400);

    expect(response.body).toEqual({
      error: expect.any(String),
    });
  });

  it("creates a new user", async () => {
    const response = await request(app)
      .post("/users")
      .send({
        name: "name",
      })
      .expect(201);

    expect(response.body).toEqual({
      id: expect.any(String),
      name: "name",
      createdAt: expect.stringMatching(isoPattern),
      updatedAt: expect.stringMatching(isoPattern),
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
        createdAt: expect.stringMatching(isoPattern),
        updatedAt: expect.stringMatching(isoPattern),
      },
      {
        id: expect.any(String),
        name: "Grace",
        createdAt: expect.stringMatching(isoPattern),
        updatedAt: expect.stringMatching(isoPattern),
      },
    ]);
  });
});
