import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExist =
      await this.specificationRepository.findByName(name);

    if (specificationAlreadyExist) {
      throw new AppError(
        `This Specification ${specificationAlreadyExist.name} already exists`
      );
    }

    await this.specificationRepository.create({
      name,
      description,
    });
  }
}
