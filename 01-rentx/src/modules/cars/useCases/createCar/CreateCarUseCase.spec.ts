import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });
  it("should be create car", async () => {
    const car = await createCarUseCase.execute({
      name: "Name car",
      description: "Description car",
      daily_rate: 100,
      license_plate: "ABC-8596",
      fine_amount: 2,
      brand: "Brand",
      category_id: "category",
    });

    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car with exists license plate", () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "Name car",
        description: "Description car",
        daily_rate: 100,
        license_plate: "ABC-8596",
        fine_amount: 2,
        brand: "Brand",
        category_id: "category",
      });

      await createCarUseCase.execute({
        name: "Name car",
        description: "Description car",
        daily_rate: 100,
        license_plate: "ABC-8596",
        fine_amount: 2,
        brand: "Brand",
        category_id: "category",
      });
    });
  });
  it("should not be able to create a car with available true by default", async () => {
    const car = await createCarUseCase.execute({
      name: "Car Available",
      description: "Description car",
      daily_rate: 100,
      license_plate: "ABC-8596",
      fine_amount: 2,
      brand: "Brand",
      category_id: "category",
    });

    expect(car.available).toBe(true);
  });
});
