import { Request, Response, NextFunction } from "express";
import { prisma } from "../server";
import { Posts } from "@prisma/client";
import { AppError } from "../errors/errors";

export const validateOwnerPostMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const postId: number = Number(req.params.id);
  const userId: number = Number(res.locals.userId);

  const post: Posts | null = await prisma.posts.findFirst({
    where: {
      id: postId,
    }
  });

  if (!post) {
    throw new AppError("Post not found", 404);
  }

  if (post.user_id !== userId) {
    throw new AppError("You don't have the necessary credentials", 403);
  }

  return next();
};