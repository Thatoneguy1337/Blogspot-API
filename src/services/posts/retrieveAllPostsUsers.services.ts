import { Posts } from "@prisma/client";
import { prisma } from "../../server";
import { manyPostSchemaResponse } from "../../schemas/post.schemas";
import { TPostResponse } from "../../interfaces/post.interfaces";


export const listPostUserService = async (
    userId: number
  ): Promise<TPostResponse[]> => {
    const posts: Posts[] = await prisma.posts.findMany({
      where: {
        user_id: userId,
      },
      orderBy: [
        {
          id: "asc",
        },
      ],
    });
  
    return manyPostSchemaResponse.parse(posts);
  };