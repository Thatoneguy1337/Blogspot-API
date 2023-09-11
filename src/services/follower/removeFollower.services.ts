import { prisma } from "../../server";

export const removeFollowerService = async (
    followerId: number
    ): Promise<void> => {
        await prisma.followers.delete({
            where: {
                user_id:followerId
            },
        });
        return;
    }






