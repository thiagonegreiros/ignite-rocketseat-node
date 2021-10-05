import { IRentalsDTO } from "../dtos/IRentalsDTO";
import { Rental } from "../infra/typeorm/entities/Rental";

export interface IRentalsRepository {
  findOpenRentalByCar(car_id: string): Promise<Rental>;
  findOpenRentalByUser(user_id: string): Promise<Rental>;
  create(data: IRentalsDTO): Promise<Rental>;
  findById(id: string): Promise<Rental>;
  findByUser(user_id: string): Promise<Rental[]>;
}
