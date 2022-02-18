import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUser } from "./AuthenticUserService";


export class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {

    const { email, password  } = request.body;

    const authenticateUser = container.resolve(AuthenticateUser);

    try {
      
    
      const token = await authenticateUser.execute({
        email,
        password
      });

      return response.json(token);

    } catch (error) {
      return response.json({error: error.message});
        
    }
  }
}