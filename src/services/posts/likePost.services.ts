import { PrismaClient, Likes } from "@prisma/client";
import {
  TlikePostResponse,
  TLikeSchemaRequest
} from "../../interfaces/likePost.interfaces";
import { likePostSchemaResponse } from "../../schemas/likePost.schemas";
import { AppError } from "../../errors/errors";

const prisma = new PrismaClient();

export const likePostService = async (data: TLikeSchemaRequest, postId: number, userId: number): Promise<TlikePostResponse> => {
  
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


 const likedPost: Likes = await prisma.likes.create({
      data: {
        ...data,
        post_id: postId,
        user_id: userId,
        username: user.username
      },
      include: {
        user: true,
      },
    });

    console.log(postId);
    console.log(userId);

    return likePostSchemaResponse.parse(likedPost);


};










