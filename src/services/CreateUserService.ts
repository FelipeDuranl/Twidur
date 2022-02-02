import { getRepository } from "typeorm"
import { User } from "../entities/Users"

//REGISTRATION INFORMATION
type UserRequest = {
  email: string;
  name: string;
  password: string;
}

export class CreateUserService {
  //(CREATE REPOSITORY)
  async execute({ name, email, password }: UserRequest): Promise<User | Error>{
    const repo = getRepository(User);

    //SELECT * FROM USERS WHERE EMAIL = "EMAIL" LIMIT 1
    if(await repo.findOne({ email })){
      return new Error("User already exists");
    }

    //CREATE OBJECT
    const user = repo.create({
      email,
      name,
      password,
    });

    //SAVE
    await repo.save(user);

    return user;
  }
}