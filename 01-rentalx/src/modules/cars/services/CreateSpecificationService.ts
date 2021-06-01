import { ISpecificationRepository } from "../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}
export class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExist =
      this.specificationRepository.findByName(name);

    if (specificationAlreadyExist) {
      throw new Error(
        `This Specification ${specificationAlreadyExist.name} already exists`
      );
    }

    this.specificationRepository.create({
      name,
      description,
    });
  }
}
