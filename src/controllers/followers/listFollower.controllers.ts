import { Request, Response } from "express";
import { listFollowersServices } from "../../services/follower/retrieveFollower.services";

export const listAllFollowerControler = async(
    req: Request,
    res: Response
): Promise<Response> => {

    const userId: number = Number(req.params.id);

    const allFollowers = await listFollowersServices(userId) 
    
    return res.json(allFollowers)
}