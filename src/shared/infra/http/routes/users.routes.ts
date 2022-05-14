import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateUsersController } from "@modules/accounts/userCase/createUser/CreateUserController";
import { UpdateUserAvatarController } from "@modules/accounts/userCase/updateUserAvatar/UpdateUserAvatarController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

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
