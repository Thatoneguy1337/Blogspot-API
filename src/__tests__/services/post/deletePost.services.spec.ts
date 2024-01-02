import { Prisma, PrismaClient } from "@prisma/client";
import { createPostService, deletePostService } from "../../../services/posts";


describe("like post function", ()=>{
    
    let prisma: PrismaClient

    beforeAll(() => {
        prisma = new PrismaClient();
      });
      
    
   afterAll(async () => {
        await prisma.$disconnect();
      });

      test('should add a like with valid data', async () => {
        
       
        const userId = 1
       
        const validData = {
            id: 1,
            posted_at: new Date(),
            user_post: {
              id: 1,
              fullname: 'John Doe',
              username: 'john_doe',
              user_img: 'user_image.jpg',
              description: 'User description',
            },
            description: 'Post description',
            post_img: 'post_image.jpg',
          };


        const createdPost = createPostService(validData, userId)


        expect(createdPost).toBeDefined();

        await deletePostService(validData.id);

        const deletedPost = await prisma.users.findUnique({
            where: {
                id: validData.id,
            },
        });


        expect(deletedPost).toBeNull();
      });

})