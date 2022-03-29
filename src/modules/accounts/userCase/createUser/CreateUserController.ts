import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, driver_license } = request.body;

    const createUsersUseCase = container.resolve(CreateUserUseCase);

    await createUsersUseCase.execute({
      name,
      email,
      password,
      driver_license,
    });

    return response.status(201).send();
  }
}

export { CreateUsersController };
