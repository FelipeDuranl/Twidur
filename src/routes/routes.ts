import { Router } from "express";
import { CreatePostsController } from "../controllers/CreatePostsController";
import { CreateUserContoller } from "../controllers/CreateUsersController";
import { DeleteUsersConsoller } from "../controllers/DeleteUsersController";
import { GetAllPostController } from "../controllers/GetAllPostsController";
import { GetAllUsersController } from "../controllers/GetAllUsersController";
import { UpdateUsersController } from "../controllers/UpdateUsersController";
import { authenticateRoutes } from "./authenticate.routes";

const routes = Router();

//Routes CRUD
routes.post("/Users", new CreateUserContoller().handle);
routes.get("/Users", new GetAllUsersController().handle);
routes.delete("/Users/:id", new DeleteUsersConsoller().handle);
routes.put("/Users/:id", new UpdateUsersController().handle);

routes.post("/Posts", new CreatePostsController().handle);
routes.get("./Post", new GetAllPostController().handle);
routes.use(authenticateRoutes);

export { routes }