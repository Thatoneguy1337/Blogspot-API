import { prisma } from "../../server";
import { Threads } from ".prisma/client";
import {
    TThreadRequest,
    TThreadResponse,
  } from "../../interfaces/thread.interfaces";
import { threadSchemaResponse } from "../../schemas/threads.schemas";

export const createThreadService = async (
    data: TThreadRequest,
    userId: number,
    postId: number
  ): Promise<TThreadResponse> => {
    const thread: Threads = await prisma.threads.create({
      data: {
        ...data,
        user_id: userId,
        post_id: postId,
      },
      include: {
        user: true,
      },
    });
  
    return threadSchemaResponse.parse(thread);
  };





