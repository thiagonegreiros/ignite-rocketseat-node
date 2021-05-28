import { Router } from "express";

import { CategoriesRepositories } from "../repositories/CategoriesRepository";

const categoriesRouters = Router();
const categoriesRepositories = new CategoriesRepositories();

categoriesRouters.post("/", (request, response) => {
  const { name, description } = request.body;

  categoriesRepositories.create({ name, description });

  return response.status(200).send();
});

export { categoriesRouters };
