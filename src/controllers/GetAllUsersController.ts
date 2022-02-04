import { Request, Response } from 'express';
import { GetAllUserService } from '../services/GetAllUserService';

export class GetAllUsersController {
  async handle(request: Request, response: Response){
    const service = new GetAllUserService();

    const users = await service.execute();

    return response.json(users);
  }
}