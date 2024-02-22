import { PrismaClient } from "@prisma/client";
import { generateSscNumber } from "../../mocks/users";
import tokenMock from "../../integration/token.mock";
import supertest from "supertest";
import app from "../../../app";

describe('Post functions', () => {
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

          const createPost = await prisma.posts.create({
            data: {
              description: "White Pony is my favorite Deftones album, the second one is Around the Fur",
              post_img: "suaimagemaqui.jpg",
              user_id: userId
            },
          });    

      });
      
    
    afterAll(async () => {
    await prisma.users.delete({
      where: { id: userId },
        });
      });

    test(' should list  created post', async () => {
      const token: string = tokenMock.genToken(userId);
      const response = await supertest(app)
      .get(`${baseUrl}`) 
      .set('Authorization', `Bearer ${token}`)

        expect(response.status).toBe(200);
    }); 
   

  });









