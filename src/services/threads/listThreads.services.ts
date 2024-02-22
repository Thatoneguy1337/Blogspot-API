import { prisma } from "../../server";
import { Posts } from "@prisma/client";
import { postThreadsResponse } from "../../schemas/post.schemas";
import { TThreadsUpdateRequest, TThreadResponse } from "../../interfaces/thread.interfaces"; 
import { TPostThreads} from "../../interfaces/post.interfaces";
import { AppError } from "../../errors/errors";

export const listAllPostThreadsService = async (
  postId: number
): Promise<TPostThreads> => {
  
  const post = await prisma.posts.findUnique({
    where:{
      id: postId
    }
  });

  if (!post) {
    throw new AppError("Post not found!", 404);
  }

  
  const threads: Posts | null = await prisma.posts.findUnique({
    where: {
      id: postId,
    },
    include: {
      threads: true
    },
  });
    

  return postThreadsResponse.parse(threads);
};