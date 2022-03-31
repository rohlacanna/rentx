import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppErros } from "../errors/AppErrors";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppErros("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "f2debdd1b79be0f7e4742eaa8d26cccf",
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppErros("User does not exists!", 401);
    }

    next();
  } catch {
    throw new AppErros("Invalid token!", 401);
  }
}
