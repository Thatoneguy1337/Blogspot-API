import { prisma } from "../../server";
import { Likes } from "@prisma/client";
import {
  TlikePostResponse,
  TLikeSchemaRequest
} from "../../interfaces/likePost.interfaces";
import { likePostSchemaResponse } from "../../schemas/likePost.schemas";


export const likePostService = async (
    data: TLikeSchemaRequest,
    postId: number,
    userId: number
  ): Promise<TlikePostResponse> => {

  const likedPost: Likes = await prisma.likes.create({
      data: {
        ...data,
        post_id: postId,
        user_id: userId,
        
      },
      include: {
        user:true,
      }
      
  });
  
    return likePostSchemaResponse.parse(likedPost);
  };











