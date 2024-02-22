import { Request, Response, NextFunction } from "express";
import { prisma } from "../server";
import { AppError } from "../errors/errors";

export const validateSocialSecurityExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { ssc_number } = req.body;

  if (ssc_number) {
    const user = await prisma.users.findFirst({
      where: {
        ssc_number,
      },
    });

    if (user) {
      throw new AppError("Social Security already registered", 409);
    }
  }

  return next();
};