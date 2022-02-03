// import { Router } from "express";
// import { CreatePostsController } from "./src/modules/posts/controllers/CreatePostsController";
// import { CreateUserContoller } from "./src/modules/accounts/controllers/CreateUsersController";
// import { DeleteUsersConsoller } from "./src/modules/accounts/controllers/DeleteUsersController";
// import { GetAllPostController } from "./src/modules/posts/controllers/GetAllPostsController";
// import { GetAllUsersController } from "./src/modules/accounts/controllers/GetAllUsersController";
// import { UpdateUsersController } from "./src/modules/accounts/controllers/UpdateUsersController";

// const routes = Router();

// //Routes CRUD
// routes.post("/Users", new CreateUserContoller().handle);
// routes.get("/Users", new GetAllUsersController().handle);
// routes.delete("/Users/:id", new DeleteUsersConsoller().handle);
// routes.put("/Users/:id", new UpdateUsersController().handle);

// routes.post("/Posts", new CreatePostsController().handle);
// routes.get("./Post", new GetAllPostController().handle);

// export { routes }