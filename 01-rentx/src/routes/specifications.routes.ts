import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificarionsRoutes = Router();

specificarionsRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

// specificarionsRoutes.get("/", (request, response) => {
//   const all = specificationRepository.list();

//   return response.json({ all });
// });
export { specificarionsRoutes };
