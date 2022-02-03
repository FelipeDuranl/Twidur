import { getRepository } from "typeorm";
import { Post } from "../entities/Posts";
import { User } from "../../accounts/entities/User";

type PostRequest = {
  message: string;
  likes: number;
  user_id: string;
}

export class CreatePostService {
  async execute({message, likes, user_id}: PostRequest){
     const repo = getRepository(Post);
     const repoUser = getRepository(User);

     if(await repoUser.findOne(user_id)) {
       return new Error("User does not exist!")
       
     }
     const post = repo.create({message, likes, user_id});
     
     await repo.save(post);

     return post;
   }
}