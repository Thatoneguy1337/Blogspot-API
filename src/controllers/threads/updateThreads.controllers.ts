import { Request, Response } from "express";
import {
  TThreadResponse,
  TThreadsUpdateRequest,
} from "../../interfaces/thread.interfaces";
import { updateThreadService } from "../../services/threads/editThread.services";

export const updateThreadController = async (req: Request, res: Response) => {
  const threadId: number = Number(req.params.id);
  const updatedValues: TThreadsUpdateRequest = req.body;

  const updatedThreads: TThreadResponse = await updateThreadService(
    updatedValues,
    threadId
  );

  return res.json(updatedThreads);
};