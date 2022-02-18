import { getRepository } from "typeorm";
import { Post } from "../entities/Posts";



export class DeletePostService {
  async execute( id : string) {
    const repo = getRepository(Post);

    if(!(await repo.findOne(id))) {
      return new Error("Post does not exists!")
    }
    
    await repo.delete(id);
  }
}