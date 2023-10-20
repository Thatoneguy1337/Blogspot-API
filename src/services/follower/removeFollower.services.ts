import { prisma } from "../../server";
import { Followers } from "@prisma/client";


export const removeFollowerService = async (
    followerId: number
    ): Promise<void> => {

        const follower = await prisma.users.findUnique({ where: { id: followerId } });
      
        if (!follower) {
          throw new Error("User or Follower not Found !");
        }
      
        await prisma.followers.delete({
          where: {
           id:followerId
          },
        });
        return;
    }






