import { getRepository } from "typeorm";
import { User } from "../entities/Users";



export class GetAllUserService {
  async execute(){
    const repo = getRepository(User);

    const users = await repo.find();

    return users;
    
   }
}