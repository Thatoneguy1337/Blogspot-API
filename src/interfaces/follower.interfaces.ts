import {z} from "zod";
import { 
    followerSchema, 
    followerSchemaResponse, 
    followerSchemaRequest, 
    manyFollowersSchemaResponse } 
    from "../schemas/follower.schemas";

   export type TFollower = z.infer<typeof followerSchema>;
   
   export type TFollowerRequest = z.infer<typeof followerSchemaRequest>;

   export type TFollowResponse = z.infer<typeof followerSchemaResponse>;

   export type TManyFollowersResponse = z.infer<typeof manyFollowersSchemaResponse>;