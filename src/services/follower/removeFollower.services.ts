import { prisma } from "../../server";
import { Followers } from "@prisma/client";


export const removeFollowerService = async (
    userId: number,
    followerId: number
    ): Promise<void> => {

        const user = await prisma.users.findUnique({ where: { id: userId } });
        const follower = await prisma.users.findUnique({ where: { id: followerId } });
      
        if (!user || !follower) {
          throw new Error("User or Follower not Found !");
        }
      
        
        const existingFollower: Followers | null = await prisma.followers.findFirst({
          where: {
            followerId: followerId,
            followingId: userId,
          },
        });


        await prisma.followers.delete({
            where: {
                id:existingFollower?.id ,
            },
        });
        return;
    }






