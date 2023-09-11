import { Request, Response } from "express";
import { TThreadResponse } from "../../interfaces/thread.interfaces";
import { createThreadService } from "../../services/threads/createThread.services";

export const createThreadController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const threadData = req.body;
  const userId: number = Number(res.locals.userId);
  const postId: number = Number(req.params.id);

  const newThread: TThreadResponse = await createThreadService(
    threadData,
    userId,
    postId,
  );

  return res.status(201).json(newThread);
};