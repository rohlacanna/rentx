import { NextFunction, Request, Response } from "express";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { AppErros } from "@shared/errors/AppErrors";

export async function ensureAdmin(
  request: Request,
  reponse: Response,
  next: NextFunction,
) {
  const { id } = request.user;

  const usersRepository = new UsersRepository();
  const user = await usersRepository.findById(id);

  if (!user.isAdmin) {
    throw new AppErros("User isn't admin!");
  }

  return next();
}
