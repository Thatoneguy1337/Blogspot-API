import { prisma } from "../../server";
import { Posts } from "@prisma/client";
import {
  TPostResponse,
  TPostRequest
} from "../../interfaces/post.interfaces";
import { postSchemaResponse } from "../../schemas/post.schemas";


export const createPostService = async (
  data:TPostRequest, 
  userId:number
  
  ): Promise<TPostResponse> => {
   
    const { description, post_img } = data;

    const post: Posts = await prisma.posts.create({
     data: {
      user_id: userId,
      description: description || null, 
      post_img: post_img || null,
     }
     

    })

    return postSchemaResponse.parse(post);


}






