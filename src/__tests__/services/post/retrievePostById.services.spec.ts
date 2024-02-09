import { PrismaClient } from "@prisma/client";
import { generateSscNumber } from "../../mocks/users";
import tokenMock from "../../integration/token.mock";
import supertest from "supertest";
import app from "../../../app";

describe('Post functions', () => {
  let userId: number;
  let isAdmin: boolean;
  let userEmail: string;
  let postId: number;
  
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
        is_banned:false,
        is_moderator:false,
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
          
          isAdmin = createdUser.is_moderator;
          userId = createdUser.id;
          userEmail = createdUser.email;

      const createPost = await prisma.posts.create({
            data: {
                description: "White Pony is my favorite deftones album, the second one is Around the Fur",
                user_id: userId 
            },
              });
            
            postId = createPost.id         

      
      const listPostById = await prisma.posts.findUnique({
              where: {
                id: postId,
              }
            });

          console.log(listPostById)


      
      });

    afterAll(async () => {
    await prisma.posts.delete({
      where: { id: postId },
        });
      });

    test(' should create a post', async () => {
      const response = await supertest(app)
      .get(`/post/${postId}`) 
      console.log("Id do Post:", postId);

      expect(response.status).toBe(200);
    }); 
   

  });