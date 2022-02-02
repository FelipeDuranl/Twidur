

import { Request, Response } from 'express';
import { GetAllPostService } from '../services/GetAllPostService';

export class GetAllPostController {
  async handle(request: Request, response: Response){
    const service = new GetAllPostService();


    const posts = await service.execute();

    return response.json(posts);
  }
}