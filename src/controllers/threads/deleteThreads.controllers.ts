import express, { Request, Response } from "express";
import { deleteThreadService } from "../../services/threads/deleteThread.services";

export const deleteThreadController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const commentId: number = Number(req.params.id);

  await deleteThreadService(commentId);

  return res.status(204).send();
};