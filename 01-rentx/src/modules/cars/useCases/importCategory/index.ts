import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const imporCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
const importCategoryContoller = new ImportCategoryController(
  imporCategoryUseCase
);

export { importCategoryContoller };
