import { Request, Response } from "express";
import { TFollowResponse } from "../../interfaces/follower.interfaces";
import { addFollowerService } from "../../services/follower/addFollower.services";

export const createFollowerController = async (
    req: Request,
    res: Response
): Promise<Response> => {
  
  const userId:number = Number(req.params.userId);
  const followerId:number = Number(req.params.followerId);
  const newFollower: TFollowResponse = await addFollowerService(
   userId,
   followerId
   );

  
    return res.status(201).json(newFollower);

}
