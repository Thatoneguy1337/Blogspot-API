import {z} from "zod";

export const threadSchema = z.object({
   id: z.number(),
   created_at: z.string(),
   edited:z.boolean().default(false),
   description:z.string().max(270),
   comment_img:z.string(),
   post_id:z.number(),
   user_id:z.number()
})

export const threadSchemaResponse = threadSchema
  .extend({
    user: z.object({
      id: z.number(),
      name: z.string(),
      user_img: z.string(),
    }),
  })
  .omit({
    ad_id: true,
    user_id: true,
  });




