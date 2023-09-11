import { Posts } from "@prisma/client";
import { TPostResponse } from "../../interfaces/post.interfaces";
import { prisma } from "../../server";
import { postSchemaResponse } from "../../schemas/post.schemas";

export const findPostbyIdService = async (postId: number): Promise<TPostResponse> => {
  const post: Posts | null = await prisma.posts.findUnique({
    where: {
      id: postId,
    }
  });

  return postSchemaResponse.parse(post);
};