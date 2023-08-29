import { Request, Response, NextFunction } from "express";
import { prisma } from "../server";
import { Threads } from "@prisma/client";
import { AppError } from "../errors/errors";

export const validateIsOwnerThreadMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: number = Number(req.params.id);
  const userId: number = Number(res.locals.userId);

  const thread: Threads | null = await prisma.threads.findFirst({
    where: {
      id,
    },
    include: {
      user: true,
    },
  });

  if (!thread) {
    throw new AppError("Thread not found", 404);
  }

  if (thread.user_id !== userId) {
    throw new AppError("You don't have the necessary credentials", 403);
  }

  return next();
};