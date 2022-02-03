import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";


@injectable()
export class CreateUserUseCase{
  
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}



  async execute({
    name, 
    username, 
    email, 
    password
  } : ICreateUserDTO): Promise<void> {

    await this.usersRepository.create({
      name, 
      username, 
      email, 
      password
    });
  }
}