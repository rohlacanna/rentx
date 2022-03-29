import { Router } from "express";

import { CreateUsersController } from "../modules/accounts/userCase/createUser/CreateUserController";

const usersRoutes = Router();

const createUsersController = new CreateUsersController();

usersRoutes.post("/", createUsersController.handle);

export { usersRoutes };
