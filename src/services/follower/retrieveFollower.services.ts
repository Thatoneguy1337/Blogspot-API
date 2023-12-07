
import { Follow } from "@prisma/client";
import { prisma } from "../../server";
import { manyFollowersSchemaResponse } from "../../schemas/follower.schemas";
import { TManyFollowersResponse } from "../../interfaces/follower.interfaces";

export const listFollowersServices = async (
    userId: number
    ): Promise<TManyFollowersResponse> => {

  const followers = await prisma.follow.findMany({
    where: {
      user_id: userId,
    },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            user_img: true,
          },
        },
      },

   });
    
    return manyFollowersSchemaResponse.parse(followers);

}