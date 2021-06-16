import { Router } from "express";

import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const specificarionsRoutes = Router();
const createSpecificationController = new CreateSpecificationController();

specificarionsRoutes.use(ensureAuthenticated);
specificarionsRoutes.post("/", createSpecificationController.handle);

export { specificarionsRoutes };
