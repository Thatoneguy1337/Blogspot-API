import {z}from "zod";
import {   
    likePostSchema,
    likePostSchemaResponse,
    likeSchemaRequest,
    manyLikesSchemaResponse
    } 
    from "../schemas/likePost.schemas";

    export type TlikePost = z.infer<typeof likePostSchema>;
    
    export type TlikePostResponse = z.infer<typeof likePostSchemaResponse>;
    
    export type TLikeSchemaRequest = z.infer<typeof likeSchemaRequest>;

    export type TManyLikeSchema = z.infer<typeof manyLikesSchemaResponse>;



    









