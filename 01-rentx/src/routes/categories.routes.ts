import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { importCategoryContoller } from "../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

const upload = multer({
  dest: "./tmp", // Vai colocar nessa pasta
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryContoller.handle(request, response);
});

export { categoriesRoutes };
