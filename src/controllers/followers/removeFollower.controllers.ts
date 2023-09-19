import express, { Request, Response } from "express";
import { removeFollowerService } from "../../services/follower/removeFollower.services";

export const deleteFollowerController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const followerId: number = Number(req.params.id);
  const userId : number = Number(req.params.id);
  await removeFollowerService(followerId, userId);

  return res.status(204).send();
};