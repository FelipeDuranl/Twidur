import { Request, Response} from "express";
import { container, injectable } from "tsyringe"
import { CreateUserUseCase } from "./CreateUserCase";


export class CreateUserController {

  async handle(request: Request, response: Response): Promise<Response> {
    const {name, username, email, password} = request.body

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      name, 
      username, 
      email, 
      password
    });

    return response.status(201).send();
  }
}