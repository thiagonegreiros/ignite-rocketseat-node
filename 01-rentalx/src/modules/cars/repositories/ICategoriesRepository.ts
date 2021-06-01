import { Category } from "../model/Category";

export interface ICategoriesReopsitory {
  findByName(name: string): Category;
  list(): Category[];
  create(name: string, description: string): void;
}
