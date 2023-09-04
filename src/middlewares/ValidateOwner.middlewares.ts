import { Request, Response, NextFunction } from "express";
import { prisma } from "../server";
import { AppError } from "../errors/errors";

export const validateUserOwnerMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const userId: number = Number(req.params.id);
  const userLocal: number = Number(res.locals.userId)

  const user = await prisma.users.findFirst({
    where: {
      id: userId,
    }
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }
   
  if (user.is_moderator !== true ) {
   throw new AppError("You don't have the necessary credentials", 403);
  }

  if (user.id !== userLocal) {
    throw new AppError("You don't have the necessary credentials", 403);
  }

  return next();
};