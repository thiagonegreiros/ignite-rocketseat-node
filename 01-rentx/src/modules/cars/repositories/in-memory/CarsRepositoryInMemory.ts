import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";

import { ICarsRepository } from "../ICarsRepository";

export class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];

  async create({
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    name,
    license_plate,
    id,
  }: ICreateCarDTO): Promise<Car> {
    const car = new Car();

    Object.assign(car, {
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      name,
      license_plate,
      id,
    });

    this.cars.push(car);

    return car;
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    return this.cars.find((car) => car.license_plate === license_plate);
  }

  async findAvailable(
    category_id?: string,
    brand?: string,
    name?: string
  ): Promise<Car[]> {
    // ? 1º Forma
    // const carsAvailable = this.cars
    //   .filter((cars) => cars.available === true)
    //   .filter(
    //     (cars) =>
    //       (brand && cars.brand === brand) ||
    //       (category_id && cars.category_id === category_id) ||
    //       (name && cars.brand === name)
    //   );

    // ? 2º Forma
    const carsAvailable = this.cars.filter((cars) => {
      if (
        cars.available === true ||
        (brand && cars.brand === brand) ||
        (category_id && cars.category_id === category_id) ||
        (name && cars.brand === name)
      ) {
        return cars;
      }

      return null;
    });

    return carsAvailable;
  }

  async findById(id: string): Promise<Car> {
    return this.cars.find((car) => car.id === id);
  }

  async updateAvailable(id: string, available: boolean): Promise<void> {
    const findIndex = this.cars.findIndex((car) => car.id === id);

    this.cars[findIndex].available = available;
  }
}
