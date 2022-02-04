import { getRepository } from "typeorm";
import { User } from "../entities/Users";

type UserUpdateRequest = {
  id: string;
  email: string;
  name: string;
  password: string;
}



export class UpdateUserService {
  async execute({id, email, name, password}: UserUpdateRequest){
     const repo = getRepository(User);

    const user = await repo.findOne(id);

    if(!user) {
      return Error("User does not exist!");
    }

    user.email = email ? email : user.email;
    user.name = name ? name : user.name;
    user.password = password ? password: user.password;

    await repo.save(user);

    return user;

   }
}