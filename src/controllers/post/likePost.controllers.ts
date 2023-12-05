import { Request, Response } from "express";
import { TlikePostResponse } from "../../interfaces/likePost.interfaces";
import { likePostService } from "../../services/posts/likePost.services";


export const likePostController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const postId: number = Number(req.params.id);
    const userId: number = Number(res.locals.userId);
    const likeData = req.body;

   const likedPosts: TlikePostResponse = await likePostService(
      likeData,
      userId,
      postId
    );
  
    return res.status(201).json(likedPosts);
  };