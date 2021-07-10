import request from "supertest";

import { app } from "@shared/infra/http/app";

describe("Create Category Controller", () => {
  beforeEach(() => {});
  it("should be able to create a new category", async () => {
    const response = await request(app).post("/categories").send({
      name: "Category Supertest",
      description: "Description Supertest",
    });

    expect(response.status).toBe(201);
  });
});
