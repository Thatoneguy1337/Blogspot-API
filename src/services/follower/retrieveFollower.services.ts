import { Followers } from "@prisma/client";
import { prisma } from "../../server";
import { manyFollowersSchemaResponse } from "../../schemas/follower.schemas";
import { TFollowResponse } from "../../interfaces/follower.interfaces";

export const listFollowersServices = async (
    userId: number
    ): Promise<TFollowResponse[]> => {

    const followers: Followers[] = await prisma.followers.findMany({

      where: {
        user_id:userId
      },
      orderBy: [
        {
          user_id: "asc",
        },
      ],
    });
    
    return manyFollowersSchemaResponse.parse(followers);

}