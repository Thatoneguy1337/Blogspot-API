import { Prisma, PrismaClient } from "@prisma/client";
import { createPostService } from "../../../services/posts";

describe('Post functions', () => {

    let prisma: PrismaClient

    beforeAll(() => {
        prisma = new PrismaClient();
      });
      
    
   afterAll(async () => {
        await prisma.$disconnect();
      });

    test(' should create a post', async () => {
       
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


        const createdPost = createPostService(validData, userId);


        expect(createdPost).toEqual(validData);


    });   

  });





