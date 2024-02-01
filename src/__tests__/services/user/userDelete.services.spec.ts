import supertest from 'supertest';
import { PrismaClient } from "@prisma/client";
import { createUserService } from "../../../services/user/createUser.services";
import { deleteUserService } from "../../../services/user/deleteUser.services";
import jwt from 'jsonwebtoken';
import app from '../../../app';
import tokenMock from "../../integration/token.mock";
import * as shortid from 'shortid';

describe('DELETE /user', () => {
    let userId: number;
    const baseUrl: string = '/user';

    const prisma = new PrismaClient();


    const generateSscNumber = (): string => {
    const timestampPart = Date.now().toString().slice(-6);
  
    
    const randomPart = shortid.generate().slice(-5);
  
    
    const sscNumber = `${timestampPart}${randomPart}`;
  
    
    return sscNumber.slice(0, 11);
  };
    
    beforeAll(async () => {
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
        is_moderator:true,
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
      });
  
    
    beforeEach(async () => {
    await prisma.users.deleteMany();
    });
  
    afterAll(async () => {
      await prisma.$disconnect();
      })
  
    it('Deve deletar um usuário com sucesso', async () => {
      const response = await supertest(app).delete(`${baseUrl}/${userId}`)
      .set('Authorization', `Bearer ${tokenMock}`);
      console.log(tokenMock);
      expect(response.status).toBe(204);
  
     
      const deletedUser = await prisma.users.findUnique({
        where: { id: userId },
      });
  
      expect(deletedUser).toBeNull();
    });
  
    it('Deve retornar 404 se o usuário não existir', async () => {
      const nonExistentUserId = 'id_invalido';
      const response = await supertest(app).delete(`${baseUrl}/${nonExistentUserId}`)
      .set('Authorization', `Bearer ${tokenMock}`);
      expect(response.status).toBe(404);


      const deletedUser = await prisma.users.findUnique({
        where: { id: userId },
      });
    
      expect(deletedUser).toBeNull();

    });
  });