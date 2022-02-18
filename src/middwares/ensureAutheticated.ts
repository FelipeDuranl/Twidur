import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { getRepository } from "typeorm";
import { User } from "../entities/Users";
import { AppError } from "../error/AppError";

interface IPayload{
  sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  //Bearer token (headers)

  const authHeader = request.headers.authorization; //informações q tem no header

  if(!authHeader) {
    throw new AppError("Token missing", 401);

  }

  //Bearer token (desestruturar)
  //[0] = Bearer
  //[1] = token

  const [, token] = authHeader.split(" ");

  try{
    const { sub: id } = verify(token, "1558d888249a8b4b5e41606c575c1a6f") as IPayload; //if sucess - go 

    const repo = getRepository(User);
    // console.log(await repo.findOne(id))
    const user = await repo.findOne(id);

    if(!user) {
      throw new AppError("User does exist!", 401)
    }

    console.log(id);

    next();

  }catch{
    throw new AppError("Invalid token", 401)
  }
  
}