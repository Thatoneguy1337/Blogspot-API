import { z } from "zod";
import { userSchema } from "./user.schemas";

 
  const followerSchema = z.object({
    id: z.number(),
    followed_since: z.date(),
    user_id: z.number()
  });
    
  const followerSchemaResponse = followerSchema
    .extend({
      user:z.object({
        id:z.number(),
        username:z.string(),
        user_img:z.string(),
      })
     })
     .omit({
      user_id: true
     });

    const followerSchemaRequest = followerSchema.omit({
        id:true,
        user_id:true
    });

   const manyFollowersSchemaResponse = z.array(followerSchema);
   

   export {
   followerSchema,
   followerSchemaResponse,
   followerSchemaRequest,
   manyFollowersSchemaResponse }











