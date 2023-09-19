import { z } from "zod";

    const followerSchema = z.object({
      id:z.number(), 
      follower_id:z.number(),
      followers: z.object({
        id: z.number(),
        username: z.string(),
        user_img: z.string()
      }),
      following_id:z.boolean().default(false),
      following: z.object({
        id:z.number(),
        username:z.string(),
        user_img:z.string()
      })

    });
    
    const followerSchemaResponse = followerSchema;

    const followerSchemaRequest = followerSchema.omit({
        id:true,
        follower_id:true,
        following_id:true,
    })

   const manyFollowersSchemaResponse = z.array(followerSchema);
   

   export {
   followerSchema,
   followerSchemaResponse,
   followerSchemaRequest,
   manyFollowersSchemaResponse }











