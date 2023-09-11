import { z } from "zod";

    const followerSchema = z.object({
      id:z.number(), 
      user_id:z.number(),
      user: z.object({
        id: z.number(),
        username: z.string(),
        user_img: z.string()
      }),
      is_following:z.boolean().default(false)

    });
    
    const followerSchemaResponse = followerSchema;

    const followerSchemaRequest = followerSchema.omit({
        id:true,
        user_id:true,
        is_following:true
    })

   const manyFollowersSchemaResponse = z.array(followerSchema);
   
   const followerSchemaUpdate = followerSchemaRequest;

   export {
   followerSchema,
   followerSchemaResponse,
   followerSchemaRequest,
   manyFollowersSchemaResponse,
   followerSchemaUpdate }











