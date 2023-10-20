import { z } from "zod";
import { userSchema } from "./user.schemas";

 
  const followerSchema = z.object({
    id: z.number(),
    followerId: z.number(),
    followingId: z.number()
  });
    
  const followerSchemaResponse = followerSchema
    .extend({
      follower:z.object({
        id:z.number(),
        username:z.string(),
        user_img:z.string(),
      }),
      
      following:z.object({
        id:z.number(),
        username:z.string(),
        user_img:z.string(),
      }),
     })
     .omit({
      followerId: true,
      followingId: true
     });

    const followerSchemaRequest = followerSchema.omit({
        id:true,
        followerId:true,
        followingId:true,
    });

   const manyFollowersSchemaResponse = z.array(followerSchema);
   

   export {
   followerSchema,
   followerSchemaResponse,
   followerSchemaRequest,
   manyFollowersSchemaResponse }











