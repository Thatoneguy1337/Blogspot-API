import { prisma } from "../../server";
import { Users,Followers } from "@prisma/client";
import { TFollowResponse, TFollowerRequest } from "../../interfaces/follower.interfaces";
import { followerSchemaResponse } from "../../schemas/follower.schemas";



export const addFollowerService = async (
  userId: number,
  followerId: number
): Promise<TFollowResponse> => {
  
  const user = await prisma.users.findUnique({ where: { id: userId } });
  const follower = await prisma.users.findUnique({ where: { id: followerId } });

  if (!user || !follower) {
    throw new Error("User or Follower not Found!");
  }
  
  const existingFollower = await prisma.followers.findFirst({
    where: {
      followerId,
      followingId: userId,
    },
  });
  
  console.log(existingFollower);

  if (existingFollower) {
    throw new Error("Follower already exists for this user!");
  }



  const newFollower: Followers | null = await prisma.followers.create({
    data: {
      followerId: userId,
      followingId: followerId,
    },
    include: {
      follower: true
    }
  });
  console.log('resposta bruta do prisma', newFollower)
  return followerSchemaResponse.parse(newFollower);
};



