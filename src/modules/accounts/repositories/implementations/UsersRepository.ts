import { getRepository, Repository } from "typeorm";

import { User } from "../../entities/User";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

import { IUsersRepository } from "../IUsersRepository";



export class UsersRepository implements IUsersRepository{
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }
  async create({
    name, 
    username, 
    email, 
    password 
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name, 
      username, 
      email, 
      password

    });

    await this.repository.save(user);
  }
}