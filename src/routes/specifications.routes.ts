import { Router } from "express";
import { ensureAuthenticated } from "../middwares/ensureAutheticated";

export const specificationsRoutes = Router();

specificationsRoutes.use(ensureAuthenticated);
