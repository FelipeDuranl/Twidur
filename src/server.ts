import "reflect-metadata";
import express from "express";
import { Request, Response, NextFunction } from "express";
import "express-async-errors";
import "./database";
import { routes } from "./routes/routes";
import { AppError } from "./error/AppError";


const app = express();

app.use(express.json())

app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message
    })
  }

  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`
  });
});

app.listen(3000, () => console.log("Server is Running"));