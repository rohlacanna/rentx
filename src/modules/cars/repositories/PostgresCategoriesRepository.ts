import { Category } from "../model/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "./ICategoryRepository";

class PostgresCategoriesRepository implements ICategoryRepository {
  findByName(name: string): Category {
    // eslint-disable-next-line no-console
    console.log(name);
    return null;
  }
  list(): Category[] {
    return null;
  }
  create({ name, description }: ICreateCategoryDTO): void {
    // eslint-disable-next-line no-console
    console.log(name, description);
  }
}

export { PostgresCategoriesRepository };
