import { z, ZodObject, ZodRawShape } from "zod";
import { threadSchema, threadSchemaResponse } from "./threads.schemas";
import { likePostSchema, likePostSchemaResponse } from "./likePost.schemas";



const postSchema = z.object({
  id: z.number(),
  posted_at: z.date(),
  user_id: z.number(),
  user_post:  z
  .object({
    id: z.number(),
    fullname: z.string(),
    username: z.string(),
    user_img: z.string(),
    description: z.string(),
  }).nullish(),
  description: z.string().max(270).optional(),
  post_img: z.string().optional(),
});


const postSchemaRequest = postSchema.omit({
  id: true,  
  user_id: true,
  user_post:true,
});


const postSchemaResponse = postSchema;


const manyPostSchemaResponse = z.array(postSchemaResponse);


const postSchemaUpdate = postSchema
  .omit({
  id: true,
  posted_at:true,
  user_id: true,
  user_post: true,
})
.deepPartial();



const postThreadsResponse = z.object({
  threads: z.array(threadSchema),
});


const postLikeResponse = z.object({
  likes: z.array(likePostSchema),
});

export {
  postSchema,
  postSchemaRequest,
  postSchemaResponse,
  manyPostSchemaResponse,
  postThreadsResponse,
  postLikeResponse,
  postSchemaUpdate
};