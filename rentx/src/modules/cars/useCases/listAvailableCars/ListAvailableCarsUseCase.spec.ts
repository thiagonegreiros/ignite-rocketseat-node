import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListCarsUseCase } from "./ListAvailableCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });
  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Car Description",
      daily_rate: 90,
      license_plate: "ASD-5852",
      fine_amount: 1000,
      brand: "Car brand",
      category_id: "category_id1",
    });

    const listcar = await listCarsUseCase.execute({});

    expect(listcar).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car2",
      description: "Car Description",
      daily_rate: 90,
      license_plate: "ASD-5852",
      fine_amount: 1000,
      brand: "Car brand",
      category_id: "category_id1",
    });

    const listcar = await listCarsUseCase.execute({
      name: "Car2",
    });

    expect(listcar).toEqual([car]);
  });
  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car3",
      description: "Car Description",
      daily_rate: 90,
      license_plate: "ASD-5852",
      fine_amount: 1000,
      brand: "brand",
      category_id: "category_id1",
    });

    const listcar = await listCarsUseCase.execute({
      brand: "brand",
    });

    expect(listcar).toEqual([car]);
  });
  it("shoul be able to list all available cars by category_id", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car2",
      description: "Car Description",
      daily_rate: 90,
      license_plate: "ASD-5852",
      fine_amount: 1000,
      brand: "Car brand",
      category_id: "category_id3",
    });

    const listcar = await listCarsUseCase.execute({
      category_id: "category_id3",
    });

    expect(listcar).toEqual([car]);
  });
});
