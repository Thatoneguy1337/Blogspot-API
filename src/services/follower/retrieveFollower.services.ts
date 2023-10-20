
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
      include: {
        follower: {
          select: {
            id: true,
            username: true,
            user_img: true,
          },
        },
      },


  });
    console.log('Resposta bruta do Prisma:', followers);
    return manyFollowersSchemaResponse.parse(followers);

}