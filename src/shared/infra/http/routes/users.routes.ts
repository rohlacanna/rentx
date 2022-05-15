import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateUsersController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "@modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUsersController = new CreateUsersController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", createUsersController.handle);

usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle,
);

export { usersRoutes };
