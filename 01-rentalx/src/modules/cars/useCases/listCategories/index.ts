import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const listCategoriesRepository = new CategoriesRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(
  listCategoriesRepository
);
const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase
);

export { listCategoriesController };
