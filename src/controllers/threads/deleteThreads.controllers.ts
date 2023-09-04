import express, { Request, Response } from "express";
import { deleteThreadService } from "../../services/threads/deleteThread.services";

export const deleteThreadController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const threadId: number = Number(req.params.id);

  await deleteThreadService(threadId);

  return res.status(204).send();
};