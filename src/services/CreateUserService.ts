import { getRepository } from "typeorm";
import { User } from "../entities/Users";
import { hash } from "bcrypt"

//REGISTRATION INFORMATION
type UserRequest = {
  email: string;
  username: string;
  name: string;
  password: string;
}

export class CreateUserService {
  //(CREATE REPOSITORY)
  async execute({ email, username, name, password }: UserRequest): Promise<User | Error>{
    const repo = getRepository(User);

    //SELECT * FROM USERS WHERE EMAIL = "EMAIL" LIMIT 1
    if(await repo.findOne({ email })){
      return new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);

    //CREATE OBJECT
    const user = repo.create({
      email,
      username,
      name,
      password: passwordHash,
    });

    //SAVE
    await repo.save(user);

    return user;
  }
}