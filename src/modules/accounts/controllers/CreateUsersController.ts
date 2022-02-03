// import { Request, Response } from "express";
// import { CreateUserService } from "../services/CreateUserService";

// export class CreateUserContoller{

//   //REQUEST AND RESPONSE
//   async handle(request: Request, response: Response){

//     //INFO TO REQUEST BODY
//     const { email, name, password } = request.body;
  
//     //CALL SERVICE
//     const service = new CreateUserService();
    
//     //RESULT EXPECT | ERROR
//     const result = await service.execute({ email, name, password });

//     //ERROR ABOULT SOMETHING WONRG
//     if(result instanceof Error) {
//       return response.status(400).json(result.message);
//     }

//     return response.json(result);
//   }
// }