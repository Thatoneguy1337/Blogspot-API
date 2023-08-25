import { prisma } from "../../server";


export const deletePostService = async (postId: number): Promise<void> => {
    await prisma.posts.delete({
      where: {
        id: postId,
      },
    });
  
    return;
  };