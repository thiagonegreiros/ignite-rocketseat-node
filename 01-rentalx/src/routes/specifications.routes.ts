import { Router } from "express";

import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificarionsRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificarionsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createSpecificationService = new CreateSpecificationService(
    specificationRepository
  );

  createSpecificationService.execute({ name, description });

  return response.status(201).send();
});

// specificarionsRoutes.get("/", (request, response) => {
//   const all = specificationRepository.list();

//   return response.json({ all });
// });
export { specificarionsRoutes };
