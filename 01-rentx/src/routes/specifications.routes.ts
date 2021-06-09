import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificarionsRoutes = Router();
const createSpecificationController = new CreateSpecificationController();

specificarionsRoutes.post("/", createSpecificationController.handle);

// specificarionsRoutes.get("/", (request, response) => {
//   const all = specificationRepository.list();

//   return response.json({ all });
// });
export { specificarionsRoutes };
