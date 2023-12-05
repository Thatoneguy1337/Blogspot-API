import { prisma } from "../../server";
import { Posts } from "@prisma/client";
import { postLikeResponse } from "../../schemas/post.schemas";
import { TPostLike } from "../../interfaces/post.interfaces";


export const listAllLikePostService = async (
    likePostId: number
): Promise<TPostLike> => {

    const postlikes: Posts | null = await prisma.posts.findUnique({
        where: {
          id: likePostId,
        },
        include: {
          likes: {
            include: {
              user: true,
            },
            orderBy: {
              id: "asc",
            },
          },
        },
      });
        
    
    return postLikeResponse.parse(postlikes)

}





