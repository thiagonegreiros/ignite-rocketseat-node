import "reflect-metadata";
import express from "express";
// import "express-async-errors"
import swaggerUi from "swagger-ui-express";

import "./shared/container";
import { router } from "./routes";
import swaggerFile from "./swagger.json";

import "./database";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(3333, () => console.log("Server is running"));
