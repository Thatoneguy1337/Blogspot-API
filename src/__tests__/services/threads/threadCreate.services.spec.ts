import  { PrismaClient } from "@prisma/client"
import  { createThreadService } from "../../../services/threads/createThread.services"

describe('Thread functions', ()=> {
  let prisma: PrismaClient;
  
  beforeAll(() => {
    prisma = new PrismaClient();
  })

  afterAll(async () => {
    await prisma.$disconnect();
  })

  test('should create a new thread', async () => {
      const threadId = 1
      const postId = 1
      const userId = 1

      const validData = {
        id:threadId,
        created_at: new Date(),
        edited: false,
        description: 'Thread description',
        comment_img: 'comment_image.jpg',
        post_id: postId,
        user_id: userId,
      };
      
      const createdThread = createThreadService(validData, userId, postId);

      expect(createdThread).toEqual(validData);
  })

})









