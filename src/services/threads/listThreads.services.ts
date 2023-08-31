import { prisma } from "../../server";
import { Posts } from "@prisma/client";
import { postThreadsResponse } from "../../schemas/post.schemas";
import { TThreadsUpdateRequest, TThreadResponse } from "../../interfaces/thread.interfaces"; 
import { TPostThreads} from "../../interfaces/post.interfaces";

export const listAllPostThreadsService = async (
  postId: number
): Promise<TPostThreads> => {
  const threads: Posts | null = await prisma.posts.findUnique({
    where: {
      id: postId,
    },
    include: {
      threads: {
        include: {
          user: true,
        },
        orderBy: {
          id: "asc",
        },
      },
    },
  });
    

  return postThreadsResponse.parse(threads);
};