import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/errors";
import { prisma } from "../server";

export const validateThreadExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: number = Number(req.params.id);

  if (isNaN(id)) {
    throw new AppError("Comment not found", 404);
  }

  const thread = await prisma.threads.findFirst({
    where: {
      id,
    },
  });

  if (!thread) {
    throw new AppError("This thread could not be found", 404);
  }

  return next();
};