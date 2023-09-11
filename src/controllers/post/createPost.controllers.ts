import { Request, Response } from "express";
import { createPostService } from "../../services/posts/createPost.services";
import {
    TPostRequest,
    TPostResponse
} from "../../interfaces/post.interfaces";


export const createPostController = async (req:Request, res:Response):Promise<Response> => {
    const postData: TPostRequest = req.body;
    const userId: number = Number(res.locals.userId);
   
    const newPost: TPostResponse = await createPostService(postData, userId);

    return res.status(201).json(newPost);

}