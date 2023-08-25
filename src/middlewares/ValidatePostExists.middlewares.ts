import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/errors";
import { prisma } from "../server";

export const validatePostExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const id: number = Number(req.params.id);

  if (isNaN(id)) {
    throw new AppError("Post not found", 404);
  }

  const post = await prisma.posts.findFirst({
    where: {
      id,
    },
  });

  if (!post) {
    throw new AppError("Post not found", 404);
  }

  return next();
};