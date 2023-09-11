import { Request, Response } from "express";
import { TPostResponse } from "../../interfaces/post.interfaces";
import { findPostbyIdService } from "../../services/posts/retrievePostById.services";

export const retrievePostByIdController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const userId: number = Number(req.params.id);
    const user: TPostResponse = await findPostbyIdService(userId);
  
    return res.json(user);
  };

