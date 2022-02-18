import { getRepository } from "typeorm";
import { User } from "../entities/Users";

import { compare } from "bcrypt";
import { sign } from "jsonwebtoken"
import { AppError } from "../error/AppError";

//REGISTRATION INFORMATION
interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

export class AuthenticateUser {
  async execute({ email, password }: IRequest): Promise<IResponse> {
    const repo = getRepository(User);

    //User exist ?
    const user = await repo.findOne({email});

    if(!user) {
      throw new AppError("Email or password incorrect", 400);
    }

    //Correct password
    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch) {
      throw new AppError("Email or password incorrect", 400);
    }

    //Generator token
    const token = sign({}, "1558d888249a8b4b5e41606c575c1a6f", {
      subject: user.id,
      expiresIn: "1d"
    });


    return {
      user,
      token
    }


  }
} 