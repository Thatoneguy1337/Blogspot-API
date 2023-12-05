import {z} from "zod";
import { 
    postSchema, 
    postSchemaRequest, 
    postSchemaResponse,
    manyPostSchemaResponse,
    postThreadsResponse,
    postSchemaUpdate,
    postLikeResponse
 } from "../schemas/post.schemas";

    export type TPost = z.infer<typeof postSchema>;
    
    export type TPostRequest = z.infer<typeof postSchemaRequest>;
    
    export type TPostRequestUpdate = z.infer<typeof postSchemaRequest>

    export type TPostResponse = z.infer<typeof postSchemaResponse>;

    export type TManyPosts = z.infer<typeof manyPostSchemaResponse>;

    export type TPostUpdateRequest = Partial<TPostRequestUpdate>;

    export type TPostThreads = z.infer<typeof postThreadsResponse>;
    
    export type TPostLike = z.infer<typeof postLikeResponse>;
