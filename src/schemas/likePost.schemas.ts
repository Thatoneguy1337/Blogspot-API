import {z} from "zod";

const likePostSchema = z.object({
    id:z.number(),
    liked_at:z.date(),
    post_id: z.number(),
    user_id: z.number(),
    username: z.string()
})

const likePostSchemaResponse = likePostSchema.extend({
    user: z.object({
        id:z.number(),
        username: z.string(),
        user_img: z.string(),
    }),
})
 .omit({
    post_id: true,
    user_id: true,
 });    

const likeSchemaRequest = likePostSchema.omit({
 id:true,
 liked_at: true,
 username: true,
 post_id: true,
 user_id: true,
 user: true
})

const manyLikesSchemaResponse = z.array(likePostSchemaResponse);

const likeSchemaUpdate = likeSchemaRequest;

export {
   likePostSchema,
   likePostSchemaResponse,
   likeSchemaRequest,
   manyLikesSchemaResponse,
   likeSchemaUpdate 
}











