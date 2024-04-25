import { TPostResponse, TPostUpdateRequest } from "../../interfaces/post.interfaces";
import { prisma } from "../../server";
import { postSchemaResponse } from "../../schemas/post.schemas";
import { Posts } from "@prisma/client";

export const updatePostService = async (
  data: TPostUpdateRequest,
  postId: number
): Promise<TPostResponse> => {
  
  const { description, post_img } = data;
  
  const updatedPost: Posts = await prisma.posts.update({
    where: { id: postId },
    data: {
      description: description || null, 
      post_img: post_img || null,

    }
    
});

  return postSchemaResponse.parse(updatedPost);
};