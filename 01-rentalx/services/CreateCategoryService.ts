import { CategoriesRepositories } from "../src/repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepositories) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error(`This category ${name} already exists`);
    }

    this.categoriesRepository.create({ name, description });
  }
}
