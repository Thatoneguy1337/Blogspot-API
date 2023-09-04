import { prisma } from "../../server";
import { Followers } from "@prisma/client";
import { TFollowerRequest, TFollowResponse } from "../../interfaces/follower.interfaces";
import { followerSchemaResponse } from "../../schemas/follower.schemas";



export const addFollowerServices = async (
    userId:number
): Promise<TFollowResponse> => {

  const follower: Followers = await prisma.followers.create({

    data: {  
    user_id:userId,
    is_following: true

    },
    include: {
        user: true
    },
   });


   return followerSchemaResponse.parse(follower);


}