import { Request, Response } from "express";
import { TFollowResponse } from "../../interfaces/follower.interfaces";
import { addFollowerServices } from "../../services/follower/addFollower.services";

export const createFollowerController = async (
    req: Request,
    res: Response
): Promise<Response> => {

  const userId:number = Number(res.locals.userId);

  const newFollower: TFollowResponse = await addFollowerServices(
   userId
  );

    return res.status(201).json(newFollower);

}
