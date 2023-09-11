import { NextFunction, Request, Response } from "express";
import { prisma } from "../server";
import { AppError } from "../errors/errors";

export const validateModMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const userIsModerator: boolean = res.locals.isModerator;
  const userId: number = Number(res.locals.userId);

  const user = await prisma.users.findFirst({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  if (user.is_moderator && userIsModerator) {
    return next();
  }

  throw new AppError("User is not a moderator");
}