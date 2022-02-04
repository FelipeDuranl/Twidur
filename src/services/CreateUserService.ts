import { getRepository } from "typeorm"
import{ hash } from "bcrypt";

import { User } from "../entities/Users"

//REGISTRATION INFORMATION
type UserRequest = {
  email: string;
  username: string;
  name: string;
  password: string;
}

export class CreateUserService {
  //(CREATE REPOSITORY)
  async execute({ name, username, email, password }: UserRequest): Promise<User | Error>{
    const repo = getRepository(User);

    //SELECT * FROM USERS WHERE EMAIL = "EMAIL" LIMIT 1
    if(await repo.findOne({ email, username})){
      return new Error("User already exists");
    }

    // const userAlreadyExist = await repo.findOne({email, username});

    // if(userAlreadyExist) {
    //   return new Error("User already exists");
    // }

    // const passwordHash = await hash(password, 8); 

    //CREATE OBJECT
    const user = repo.create({
      email,
      username,
      name,
      password,
    });

    //SAVE
    await repo.save(user);

    return user;
  }
}