import { PrismaClient } from "@prisma/client";
import { generateSscNumber } from "../../mocks/users";
import tokenMock from "../../integration/token.mock";
import supertest from "supertest";
import app from "../../../app";

describe('Post functions', () => {
  let userId: number;
  let isAdmin: boolean;
  let postId: number;
  let likePostId: number;
  const baseUrl: string = '/post';

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
        is_banned: false,
        is_moderator: false,
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
    isAdmin = createdUser.is_moderator;

    const createPost = await prisma.posts.create({
      data: {
        description: "White Pony is my favorite Deftones album, the second one is Around the Fur",
        post_img: "suaimagemaqui.jpg",
        user_id: userId
      },
    });

    postId = createPost.id;
    
  });
  afterAll(async () => {
    
    await prisma.users.delete({
      where: { id: userId },
    });

    await prisma.posts.delete({
      where: { id: postId },
    });
  });

  test('should like a post by id', async () => {
    const token: string = tokenMock.genToken(isAdmin, userId);
    const response = await supertest(app)
    .post(`${baseUrl}/${postId}/like`)
    .set('Authorization', `Bearer ${token}`);
    expect(response.status).toBe(201);
    expect(response.body.id).toBe(postId); 
  }, 10000);
});