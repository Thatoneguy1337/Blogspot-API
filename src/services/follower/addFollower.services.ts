import { prisma } from "../../server";
import { Users,Follow } from "@prisma/client";
import { TFollowResponse, TFollowerRequest } from "../../interfaces/follower.interfaces";
import { followerSchemaResponse } from "../../schemas/follower.schemas";



export const addFollowerService = async (
  userId: number
): Promise<TFollowResponse> => {
  
  const newFollower: Follow | null = await prisma.follow.create({
    data: {
      user_id: userId
    },
    include: {
      user: true
    }
  });
  console.log('resposta bruta do prisma', newFollower)
  return followerSchemaResponse.parse(newFollower);
};



