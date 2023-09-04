import { Request, Response } from "express";
import { TFollowResponse } from "../../interfaces/follower.interfaces";
import { listFollowersServices } from "../../services/follower/retrieveFollower.services";

export const listAllFollowerControler = async(
    req: Request,
    res: Response
): Promise<Response> => {

    const userId: number = Number(req.params.id);

    const allFollowers: TFollowResponse[] = await listFollowersServices(userId);

    return res.json(allFollowers)
}