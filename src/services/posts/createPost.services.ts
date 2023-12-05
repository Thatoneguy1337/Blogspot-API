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
   
    const post: Posts = await prisma.posts.create({
     data: {
     ...data,
     user_id: userId,
     }
     

    })

    return postSchemaResponse.parse(post);


}






