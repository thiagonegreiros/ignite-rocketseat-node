import { Router } from "express";

import { CreateCategoryService } from "../../services/CreateCategoryService";
import { CategoriesRepositories } from "../repositories/CategoriesRepository";

const categoriesRouters = Router();
const categoriesRepository = new CategoriesRepositories();

categoriesRouters.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return response.status(200).send();
});

categoriesRouters.get("/", (request, response) => {
  const all = categoriesRepository.list();

  return response.json({ all });
});
export { categoriesRouters };
