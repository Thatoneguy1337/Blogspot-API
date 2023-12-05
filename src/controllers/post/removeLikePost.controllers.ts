import { Request, Response} from "express";
import { deleteLikePostService } from "../../services/posts/removeLikePost.services"; 

export const deleteLikePostController = async (
    req: Request,
    res: Response
): Promise<Response> => {

  const likeId: number = Number(req.params.id);

  await deleteLikePostService(likeId);

  return res.status(204).send();
};