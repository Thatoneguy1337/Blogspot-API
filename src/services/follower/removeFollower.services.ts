import { prisma } from "../../server";
import { Followers } from "@prisma/client";


export const removeFollowerService = async (
    followerId: number
    ): Promise<void> => {
      await prisma.followers.delete({
          where: {
           id:followerId,
          },
        });
        return;
    };






