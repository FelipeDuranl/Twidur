import { Router } from "express";
import { CreatePostsController } from "./src/controllers/CreatePostsController";
import { CreateUserContoller } from "./src/controllers/CreateUsersController";
import { DeleteUsersConsoller } from "./src/controllers/DeleteUsersController";
import { GetAllPostController } from "./src/controllers/GetAllPostsController";
import { GetAllUsersController } from "./src/controllers/GetAllUsersController";
import { UpdateUsersController } from "./src/controllers/UpdateUsersController";

const routes = Router();

//Routes CRUD
routes.post("/Users", new CreateUserContoller().handle);
routes.get("/Users", new GetAllUsersController().handle);
routes.delete("/Users/:id", new DeleteUsersConsoller().handle);
routes.put("/Users/:id", new UpdateUsersController().handle);

routes.post("/Posts", new CreatePostsController().handle);
routes.get("./Post", new GetAllPostController().handle);

export { routes }