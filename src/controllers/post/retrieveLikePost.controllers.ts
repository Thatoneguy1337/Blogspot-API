import { Request, Response } from "express";
import { listAllLikePostService } from "../../services/posts/retrieveLikePost.services";


export const listAllLikePostController = async (
    req: Request,
    res: Response
): Promise<Response> => {

    const postId: number = Number(req.params.id);
    const likes = await listAllLikePostService(postId);

    return res.json(likes);
};



