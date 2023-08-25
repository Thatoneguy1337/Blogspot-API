import { Request, Response } from "express";
import { deletePostService } from "../../services/posts/deletePost.services";

export const deletePostController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const postId: number = Number(req.params.id);

  await deletePostService(postId);

  return res.status(204).json();
};