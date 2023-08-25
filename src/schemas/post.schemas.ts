import {z} from "zod";

import { threadSchema, threadSchemaResponse } from "./threads.schemas";

const postSchema = z.object({
    id: z.number(),
    user_post:  z
    .object({
      id: z.number(),
      fullname: z.string(),
      username: z.string(),
      post_img: z.string(),
      description: z.string(),
    }),
    description: z.string().max(270).nullable(),
    post_img: z.string().nullable(),
    likes: z.number().default(0),
    dislikes: z.number().default(0)
})

const postSchemaRequest = postSchema.omit({
    id: true,  
    user_id: true,
    user_post:true,
    threads: true,
})

const postSchemaResponse = postSchema;

const manyPostSchemaResponse = z.array(postSchemaResponse);

const postSchemaUpdate = postSchemaRequest;

const postThreadsResponse = z.object({
  comments: z.array(threadSchemaResponse),
});

export {
  postSchema,
  postSchemaRequest,
  postSchemaResponse,
  manyPostSchemaResponse,
  postSchemaUpdate,
  postThreadsResponse
}
