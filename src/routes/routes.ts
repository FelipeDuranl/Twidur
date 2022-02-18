import { Router } from "express";
import { CreatePostsController } from "../controllers/CreatePostsController";
import { CreateUserContoller } from "../controllers/CreateUsersController";
import { DeleteUsersConsoller } from "../controllers/DeleteUsersController";
import { GetAllPostController } from "../controllers/GetAllPostsController";
import { GetAllUsersController } from "../controllers/GetAllUsersController";
import { UpdateUsersController } from "../controllers/UpdateUsersController";
import { AuthenticateUserController } from "../authenticUsers/AuthenticUserController";
import { DeletePostController } from "../controllers/DeletePostController";
// import { authenticateRoutes } from "./authentic.routes";

export const routes = Router();

//Routes CRUD
routes.post("/sessions", new AuthenticateUserController().handle);

routes.post("/Users", new CreateUserContoller().handle);
routes.get("/Users", new GetAllUsersController().handle);
routes.delete("/Users/:id", new DeleteUsersConsoller().handle);
routes.put("/Users/:id", new UpdateUsersController().handle);

routes.post("/Posts", new CreatePostsController().handle);
routes.get("/Posts", new GetAllPostController().handle);
routes.delete("/Post", new DeletePostController().handle);
