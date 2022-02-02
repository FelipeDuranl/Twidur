import { Request, Response } from 'express';
import { CreatePostService } from '../services/CreatePostService';

export class CreatePostsController {
  async handle(request: Request, response: Response){
    const {message, likes, user_id} = request.body

    const service = new CreatePostService();

    const result = await service.execute({
      message,
      likes,
      user_id
    });

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }


    return response.json(result);
  }
}