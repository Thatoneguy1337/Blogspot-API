import { PrismaClient } from "@prisma/client";
import { listAllPostService, createPostService, likePostService} from "../../../services/posts";


describe('PostFunctions', ()=> {

    let prisma: PrismaClient;

    beforeAll(() => {
        prisma = new PrismaClient();
    })

    afterAll(async () => {
        await prisma.$disconnect();
    })

    test('should list all posts', async () => {

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

        const postList = await listAllPostService();

        expect(postList).toHaveProperty("map");

    });

});









