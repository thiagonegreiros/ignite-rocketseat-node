import { Router } from "express";

import { CategoriesRepositories } from "../repositories/CategoriesRepository";

const categoriesRouters = Router();
const categoriesRepository = new CategoriesRepositories();

categoriesRouters.post("/", (request, response) => {
  const { name, description } = request.body;
  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists) {
    return response
      .status(400)
      .json({ error: `This category ${name} already exists` });
  }

  categoriesRepository.create({ name, description });

  return response.status(200).send();
});

categoriesRouters.get("/", (request, response) => {
  const all = categoriesRepository.list();

  return response.json({ all });
});
export { categoriesRouters };
