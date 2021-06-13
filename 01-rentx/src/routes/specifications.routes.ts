import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificarionsRoutes = Router();
const createSpecificationController = new CreateSpecificationController();

specificarionsRoutes.use(ensureAuthenticated);
specificarionsRoutes.post("/", createSpecificationController.handle);

export { specificarionsRoutes };
