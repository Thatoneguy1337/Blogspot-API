import { PrismaClient } from "@prisma/client"
import { updatePostService } from "../../../services/posts";


describe( 'Post function', () => {

    let prisma: PrismaClient;

    beforeAll(()=> {
        prisma = new PrismaClient();
    })

    afterAll(async () => {
        await prisma.$disconnect();
    })

    test('should edit a post', async() => {
        const postId = 1
       
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


        const editedPost = await updatePostService(validData, postId);


        expect(editedPost).toEqual(validData);
    });
  

});







