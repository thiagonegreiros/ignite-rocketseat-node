import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, username, email, password, driver_license } = request.body;

    const createUser = container.resolve(CreateUserUseCase);

    await createUser.execute({
      name,
      email,
      password,
      driver_license,
    });

    return response.status(201).json();
  }
}
