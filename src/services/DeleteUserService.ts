import { getRepository } from "typeorm";
import { User } from "../entities/Users";



export class DeleteUserService {
  async execute( id : string){
    const repo = getRepository(User);

    if(!(await repo.findOne(id))) {
      return new Error("User does not exists!");
    }

    await repo.delete(id);
   }
}