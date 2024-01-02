import  { PrismaClient } from "@prisma/client"
import  { createThreadService, deleteThreadService } from "../../../services/threads"

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

      expect(createdThread).toBeDefined();

      await deleteThreadService(validData.id);

      const deletedThread = await prisma.threads.findUnique({
            where: {
                id: validData.id
            },
      });


      expect(deletedThread).toBeNull();
    });
});