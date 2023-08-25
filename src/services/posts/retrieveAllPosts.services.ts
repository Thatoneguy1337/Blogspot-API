import { Posts } from "@prisma/client";
import { prisma } from "../../server";
import { manyPostSchemaResponse } from "../../schemas/post.schemas";
import { TPostResponse } from "../../interfaces/post.interfaces";


export const listAllPostService = async (): Promise<TPostResponse[]> => {
    const posts:Posts[] = await prisma.posts.findMany({
      orderBy: [
        {
          id: "asc",
        },
      ],
    });
  
    return manyPostSchemaResponse.parse(posts);
  };

