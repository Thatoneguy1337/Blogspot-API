import { Request, Response } from "express";
import { TPostResponse, TPostUpdate } from "../../interfaces/post.interfaces";
import { updatePostService } from "../../services/posts/editPost.services";


export const updatePostController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const postId: number = Number(req.params.id);
    const updatedValues: TPostUpdate = req.body;

   const updatedAds: TPostResponse = await updatePostService(
      updatedValues,
      postId
    );
  
    return res.json(updatedAds);
  };






