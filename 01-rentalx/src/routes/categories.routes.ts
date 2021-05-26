import { Router } from "express";

const categoriesRouters = Router();

const categories = [];

categoriesRouters.post("/categories", (request, response) => {
  const { name, description } = request.body;

  categories.push({
    name,
    description,
  });

  return response.status(200).json({ categories });
});

export { categoriesRouters };
