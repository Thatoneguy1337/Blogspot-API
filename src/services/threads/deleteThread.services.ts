import { prisma } from "../../server";

export const deleteThreadService = async (
  threadId: number
): Promise<void> => {
  await prisma.threads.delete({
    where: {
      id: threadId,
    },
  });
  return;
};