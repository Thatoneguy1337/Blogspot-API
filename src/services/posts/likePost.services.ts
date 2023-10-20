import { prisma } from "../../server";
import { Posts } from "@prisma/client";
import {
  TPostResponse,
  TPostUpdateRequest
} from "../../interfaces/post.interfaces";
import { postSchemaResponse } from "../../schemas/post.schemas";


export const likePostService = async (
    data: TPostUpdateRequest,
    postId: number
  ): Promise<TPostResponse> => {

  const likes = typeof data.likes === 'number' ? data.likes + 1 : 1;
  const dislikes = typeof data.dislikes === 'number' ? data.dislikes : 0;

  const updatedPost: Posts = await prisma.posts.update({
      where: { id: postId },
      data: {
        ...data,
        likes, 
        dislikes
      },

      
  });
  
    return postSchemaResponse.parse(updatedPost);
  };











