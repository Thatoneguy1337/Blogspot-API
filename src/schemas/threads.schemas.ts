import {z} from "zod";

const threadSchema = z.object({
   id: z.number(),
   created_at: z.date(),
   edited:z.boolean().default(false),
   description:z.string(),
   comment_img:z.string().default(""),
   post_id:z.number(),
   user_id:z.number(),
})

const threadSchemaResponse = threadSchema
  .extend({
    user: z.object({
      id: z.number(),
      username: z.string(),
      user_img: z.string(),
    }),
  })
  .omit({
    post_id: true,
    user_id: true,
  });

  const threadSchemaRequest = threadSchema.omit({
    id: true,
    created_at: true,
    username: true,
    edited: true,
    user_id: true,
    post_id: true,
  });
  
  const manyThreadsSchemaResponse = z.array(threadSchema);
  
  const threadSchemaUpdate = threadSchemaRequest; 

  export {
    threadSchema, 
    threadSchemaResponse, 
    threadSchemaRequest, 
    manyThreadsSchemaResponse, 
    threadSchemaUpdate }


