import { prisma } from "../../server";
import { Threads } from ".prisma/client";
import {
    TThreadRequest,
    TThreadResponse,
  } from "../../interfaces/thread.interfaces";
import { threadSchemaResponse } from "../../schemas/threads.schemas";
import { AppError } from "../../errors/errors";

export const createThreadService = async (
    data: TThreadRequest,
    userId: number,
    postId: number
  ): Promise<TThreadResponse> => {


    const user = await prisma.users.findUnique({
      where:{
        id: userId
      }
    })
  
    const post = await prisma.posts.findUnique({
    where:{
      id: postId
    }
  })

    if (!user) {
        throw new AppError("User not found!", 404);
    }

    if (!post) {
        throw new AppError("Post not found!", 404);
    }



    const thread: Threads = await prisma.threads.create({
      data: {
        ...data,
        user_id: userId,
        post_id: postId,
        username: user.username
      },
      include: {
        user: true,
      },
    });
  
    return threadSchemaResponse.parse(thread);
  };





