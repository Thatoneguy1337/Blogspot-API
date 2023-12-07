import { Request, Response } from "express";
import { TFollowResponse } from "../../interfaces/follower.interfaces";
import { addFollowerService } from "../../services/follower/addFollower.services";

export const createFollowerController = async (
    req: Request,
    res: Response
): Promise<Response> => {
  
  const userId:number = Number(req.params.userId);
  const newFollower: TFollowResponse = await addFollowerService(
   userId
   );

  
    return res.status(201).json(newFollower);

}
