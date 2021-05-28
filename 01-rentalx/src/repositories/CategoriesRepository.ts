import { Category } from "../model/Category";

// DTO => Data Transfer Object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export class CategoriesRepositories {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }
}
