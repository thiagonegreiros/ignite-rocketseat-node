import { Router } from "express";
import { v4 as uuidV4 } from "uuid";

const categoriesRouters = Router();

const categories = [];

categoriesRouters.post("/", (request, response) => {
  const { name, description } = request.body;
  const category = {
    name,
    description,
    id: uuidV4(),
  };

  categories.push(category);

  return response.status(200).json({ categories });
});

export { categoriesRouters };
