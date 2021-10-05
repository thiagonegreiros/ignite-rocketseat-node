import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;

    try {
      const user = this.createUserUseCase.execute({
        name,
        email,
      });

      return response.status(201).send(user);
    } catch (err) {
      return response.status(400).send({
        error: err.message || "Unexpected error.",
      });
    }
  }
}

export { CreateUserController };
