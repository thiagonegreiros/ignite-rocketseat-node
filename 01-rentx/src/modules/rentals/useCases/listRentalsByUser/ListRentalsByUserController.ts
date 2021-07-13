import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListRentalsByUserUseCase } from "./ListRentalsByUserUseCase";

export class ListRentalsByUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;

    const listRentalsUserUseCase = container.resolve(ListRentalsByUserUseCase);

    const listRentals = await listRentalsUserUseCase.execute(user_id);

    return response.json(listRentals);
  }
}
