import { Request, Response } from "express";
import { TPostResponse, TPostUpdate } from "../../interfaces/post.interfaces";
import { listPostUserService } from "../../services/posts/retrieveAllPostsUsers.services";

export const listAllPostUserController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const userId: number = Number(req.params.id);
  
    const allAds: TPostResponse[] = await listPostUserService(userId);
  
    return res.json(allAds);
  };