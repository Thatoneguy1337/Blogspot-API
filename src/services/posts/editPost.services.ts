import { TPostResponse, TPostUpdate } from "../../interfaces/post.interfaces";
import { prisma } from "../../server";
import { postSchemaResponse } from "../../schemas/post.schemas";
import { Posts } from "@prisma/client";

export const updatePostService = async (
  data: TPostUpdate,
  postId: number
): Promise<TPostResponse> => {
  
 const updatedPost: Posts = await prisma.posts.update({
     where: { id: postId },
     data: {
      ...data,
    },
    });

  return postSchemaResponse.parse(updatedPost);
};