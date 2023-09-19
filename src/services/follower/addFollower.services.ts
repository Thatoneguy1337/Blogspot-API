import { prisma } from "../../server";
import { Users,Followers } from "@prisma/client";
import { TFollowResponse, TFollowerRequest } from "../../interfaces/follower.interfaces";
import { followerSchemaResponse } from "../../schemas/follower.schemas";

interface FollowerData {
  follower: {
    connect: {
      id: number;
    };
  };
  following: {
    connect: {
      id: number;
    };
  };
}



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
      followerId: userId,
      followingId: followerId,
    },
  });

  if (existingFollower) {
    throw new Error("Follower already exists!");
  }

  const followerData: FollowerData = {
    follower: {
      connect: {
        id: userId,
      },
    },
    following: {
      connect: {
        id: followerId,
      },
    },
  };

  const newFollower: Followers = await prisma.followers.create({
    data: followerData,
  });

  return followerSchemaResponse.parse(newFollower);
};



