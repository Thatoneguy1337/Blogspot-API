
import { Followers } from "@prisma/client";
import { prisma } from "../../server";
import { manyFollowersSchemaResponse } from "../../schemas/follower.schemas";
import { TManyFollowersResponse } from "../../interfaces/follower.interfaces";

export const listFollowersServices = async (
    userId: number
    ): Promise<TManyFollowersResponse> => {

  const followers = await prisma.followers.findMany({
    where: {
      followingId: userId,
    },
    select: {
      follower: {
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