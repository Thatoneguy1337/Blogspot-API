import { PrismaClient } from "@prisma/client";
import { listAllLikePostService, likePostService } from "../../../services/posts";

describe('Post Functions', () => {

    let prisma: PrismaClient;

    beforeAll(() => {
        prisma = new PrismaClient();
    })

    afterAll(async () => {
        await prisma.$disconnect();
    })
})

test('should list all likes in a post', async () => {

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

    
    expect(addedLike).toBeDefined();

    const likeList = await listAllLikePostService((await addedLike).id)

    expect(likeList).toHaveProperty("map");

    
})





