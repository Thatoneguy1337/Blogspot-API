import { Request, Response } from "express";
import { TPostResponse, TPostUpdateRequest } from "../../interfaces/post.interfaces";
import { likePostService } from "../../services/posts/likePost.services";


export const likePostController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const postId: number = Number(req.params.id);
    const updatedValues: TPostUpdateRequest = req.body;

   const updatedAds: TPostResponse = await likePostService(
      updatedValues,
      postId
    );
  
    return res.json(updatedAds);
  };