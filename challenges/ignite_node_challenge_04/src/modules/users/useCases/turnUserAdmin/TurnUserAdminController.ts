import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const user = this.turnUserAdminUseCase.execute({ user_id });

      return response.status(200).send(user);
    } catch (err) {
      return response.status(404).send({
        error: err.message || "Unexpected error.",
      });
    }
  }
}

export { TurnUserAdminController };
