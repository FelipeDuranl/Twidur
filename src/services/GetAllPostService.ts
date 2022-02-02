import { getRepository } from "typeorm";
import { Post } from "../entities/Posts";


export class GetAllPostService {
  async execute(){
     const repo = getRepository(Post);

     const post = await repo.find();

     return post;
   }
}