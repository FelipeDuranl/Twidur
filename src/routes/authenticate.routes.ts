import { Router } from "express";
import { AuthenticateUserController } from "../authenticateUser/AuthenticateUserController";

export const authenticateRoutes = Router();

const authenticateController = new AuthenticateUserController();

authenticateRoutes.post("/sessions", authenticateController.handle);
