import { PrismaClient } from "@prisma/client";
import { likePostService, deleteLikePostService } from "../../../services/posts";

describe( 'Like Post function', () => {

    let prisma: PrismaClient;

    beforeAll(()=> {
        prisma = new PrismaClient()
    })

    afterAll(async () => {
        await prisma.$disconnect();
    })

    test('should delete a post', async() => {

        const likeId = 1
        const postId = 1
        const userId = 1

        const validData = {
          id: likeId,
          liked_at: new Date(),
          user:{
            id:userId,
            username:"john_doe",
            user_img:""
        
          }
        };
    
        const addedLike = likePostService(validData,postId,userId);
    
        
        expect(addedLike).toEqual(validData);

        await deleteLikePostService(likeId);

        const deleteLikePost = await prisma.likes.findUnique({
            where: {
                id:likeId
            }
        })

        expect(deleteLikePost).toBeNull();

    })

})




