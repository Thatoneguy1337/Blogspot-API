import { Request, Response } from "express";
import { TPostResponse, TPostUpdate } from "../../interfaces/post.interfaces";
import { listAllPostService } from "../../services/posts/retrieveAllPosts.services";


export const listAllPostsController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
   
    let posts: TPostResponse[] = await listAllPostService();
    
  
    return res.json(posts);
  };




