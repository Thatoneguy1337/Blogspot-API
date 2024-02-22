import { prisma } from "../../server";


export const deleteLikePostService = async(
    postLikeId: number
): Promise<void> => {
    await prisma.likes.delete({
        where:{
            id: postLikeId
        }
    })
}





