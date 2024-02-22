import { PrismaClient } from "@prisma/client";
import { generateSscNumber } from "../../mocks/users";
import tokenMock from "../../integration/token.mock";
import supertest from "supertest";
import app from "../../../app";

describe('POST /post', () => {
  let userId: number;
  let userEmail: string;
  
  const baseUrl: string = '/post';

  const prisma = new PrismaClient();

    beforeAll( async () => {
      const createdUser = await prisma.users.create({
        data: {
        fullname:"John Doe" , 
        username:"johnthedoughy89" , 
        email:`test-${Date.now()}@example.com`, 
        password:"12345678", 
        reset_password:"", 
        user_img:"", 
        bg_img:"",
        ssc_number:generateSscNumber(), 
        telephone:"1122604433",
        birthdate:"06/04/1989",
        description:"",
        zip_code:"20068397",
        state:"Texas",
        city:"El Passo",
        street:"Benson Stt",
        number:"267"
        },
          });
          userId = createdUser.id;
          userEmail = createdUser.email;

      });
      
    
    afterAll(async () => {
    await prisma.users.delete({
      where: { id: userId },
        });
      });

    test(' should create a post', async () => {
      const createPost = {
        description: "White Pony is my favorite deftones album, the second one is Around the Fur"
      } 
      const token: string = tokenMock.genToken(userId);
      const response = await supertest(app)
      .post(`${baseUrl}`) 
      .set('Authorization', `Bearer ${token}`)
      .send(createPost);

    expect(response.status).toBe(201);
    }); 
    test(' should return  a 401 Authorization error', async () => {
      const createPost = {
        description: "White Pony is my favorite deftones album, the second one is Around the Fur"
      } 
      const response = await supertest(app)
      .post(`${baseUrl}`) 
      .send(createPost);

    expect(response.status).toBe(401);
    }, 5000);     

  });





