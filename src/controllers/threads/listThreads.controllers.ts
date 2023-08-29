import { Request, Response } from "express";
import { listAllPostThreadsService } from "../../services/threads/listThreads.services";
export const listAllPostThreadsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const postId: number = Number(req.params.id);
  const threads = await listAllPostThreadsService(postId);

  return res.json(threads);
};