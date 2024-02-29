import {
    TThreadResponse,
    TThreadsUpdateRequest,
  } from "../../interfaces/thread.interfaces";
  import { prisma } from "../../server";
  import { Threads } from "@prisma/client";
  import { threadSchemaResponse } from "../../schemas/threads.schemas";
  export const updateThreadService = async (
    data: TThreadsUpdateRequest,
    threadId: number
  ): Promise<TThreadResponse> => {
    const updatedThreads: Threads = await prisma.threads.update({
      where: { id: threadId },
      data: {
        ...data,
        edited: true,
      },
      include: {
        user: true,
      },
    });
  
    return threadSchemaResponse.parse(updatedThreads);
  };