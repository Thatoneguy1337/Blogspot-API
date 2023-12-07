import { prisma } from "../../server";
import { Follow } from "@prisma/client";


export const removeFollowerService = async (
    followerId: number
    ): Promise<void> => {
      await prisma.follow.delete({
          where: {
           id:followerId,
          },
        });
        return;
    };






