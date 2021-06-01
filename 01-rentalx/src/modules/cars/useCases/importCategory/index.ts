import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const importCategoryRepository = CategoriesRepository.getInstance();
const imporCategoryUseCase = new ImportCategoryUseCase();
const importCategoryContoller = new ImportCategoryController(
  imporCategoryUseCase
);

export { importCategoryContoller };
