import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  user_id: string;
  car_id: string;
  expect_return_date: Date;
}

export class CreateRentalUseCase {
  constructor(
    private rentalsRepository: IRentalsRepository,
    private dateProvider: IDateProvider
  ) {}

  async execute({
    car_id,
    expect_return_date,
    user_id,
  }: IRequest): Promise<Rental> {
    const MINIMUM_HOUR = 24;
    const carUnavailable = await this.rentalsRepository.findOpenRentalByCar(
      car_id
    );

    if (carUnavailable) {
      throw new AppError(`Car is unavailable`);
    }

    const rentalOpenToUser = await this.rentalsRepository.findOpenRentalByUser(
      user_id
    );

    if (rentalOpenToUser) {
      throw new AppError(`There's a rental in progress for this user`);
    }

    // TODO: The rental should have a minimum duration of 24 hours
    const dateNow = this.dateProvider.dateNow();
    const compare = this.dateProvider.compareInHours(
      dateNow,
      expect_return_date
    );

    if (compare < MINIMUM_HOUR) {
      throw new AppError(`Invalid return time`);
    }

    const rental = await this.rentalsRepository.create({
      user_id,
      car_id,
      expect_return_date,
    });

    return rental;
  }
}
