import { PrismaClient } from "@prisma/client";
import { generateSscNumber } from "../../mocks/users";
import tokenMock from "../../integration/token.mock";
import supertest from "supertest";
import app from "../../../app";

describe('PATCH /threads/:id', () => {
  let userId: number;
  let postId: number;
  let threadId: number;
  
  const baseUrl: string = '/threads';

  const prisma = new PrismaClient();

  beforeAll(async () => {
    const createdUser = await prisma.users.create({
      data: {
        fullname: "John Doe",
        username: "johnthedoughy89",
        email: `test-${Date.now()}@example.com`,
        password: "12345678",
        reset_password: "",
        user_img: "",
        bg_img: "",
        ssc_number: generateSscNumber(),
        telephone: "1122604433",
        birthdate: "06/04/1989",
        description: "",
        zip_code: "20068397",
        state: "Texas",
        city: "El Passo",
        street: "Benson Stt",
        number: "267"
      },
    });

    userId = createdUser.id;
    

    const createPost = await prisma.posts.create({
      data: {
        description: "White Pony is my favorite Deftones album, the second one is Around the Fur",
        post_img: "suaimagemaqui.jpg",
        user_id: userId
      },
    });

    postId = createPost.id;
    
    const createThread = await prisma.threads.create({
        data:{
          description: "Saturday Night Wrist is the best deftones album",
          post_id: createPost.id,
          user_id: createdUser.id,
          username: createdUser.username
        }
    }) 

    threadId = createThread.id

  });

  afterAll(async () => {
    await prisma.users.delete({
      where: { id: userId },
    });
  });

  test('should create a thread in a post through its id', async () => {
    const threadData = {
        description: "Diamond eyes is my favorite deftones album"
    }
    const token: string = tokenMock.genToken(userId);
    const response = await supertest(app)
    .patch(`${baseUrl}/${threadId}`)
    .set('Authorization', `Bearer ${token}`)
    .send(threadData);
    expect(response.status).toBe(200);
  });
});