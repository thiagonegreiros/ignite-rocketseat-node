import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, email } = request.body;

    const authenticate = container.resolve(AuthenticateUserUseCase);

    const token = await authenticate.execute({ password, email });

    return response.json(token);
  }
}
