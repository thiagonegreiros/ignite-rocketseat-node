import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    try {
      const user = this.listAllUsersUseCase.execute({ user_id });

      return response.status(200).json(user);
    } catch (err) {
      if (err === "User not found") {
        return response.status(404).send({
          error: err.message || "Unexpected error.",
        });
      }

      return response.status(400).send({
        error: err.message || "Unexpected error.",
      });
    }
  }
}

export { ListAllUsersController };
