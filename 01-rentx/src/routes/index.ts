import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { specificarionsRoutes } from "./specifications.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specification", specificarionsRoutes);

export { router };
