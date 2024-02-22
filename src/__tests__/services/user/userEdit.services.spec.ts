import { PrismaClient } from "@prisma/client";
import app from "../../../app";
import supertest from "supertest";
import { editUserRouteMock, generateSscNumber } from "../../mocks/users";
import tokenMock from "../../integration/token.mock";
import * as shortid from 'shortid';
import { createUserService, updateUserService } from "../../../services/user";


describe('PATCH /users/:id (Editar usuário)', () => {
    let userId: number;
    let userEmail: string;
    
    const baseUrl: string = '/user';

    const prisma = new PrismaClient();
    
    beforeAll(async () => {


      const createdUser = await prisma.users.create({
        data: {
        fullname:"John Doe" , 
        username:"johnthedoughy89" , 
        email:`vgb1337@gmail.com`, 
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
          userEmail = createdUser.email
    });
  
    afterAll(async () => {
      await prisma.users.delete({
        where: { id: userId },
      });
    });
  
    it('Deve editar um usuário com sucesso', async () => {
      const editedUserData = {
        fullname: 'Cleyton Neto',
        username: 'Cleitin',
        email: 'novousuario@email.com',
      };
      const token: string = tokenMock.genToken(userId);
      const response = await supertest(app)
        .patch(`${baseUrl}/${userId}`) 
        .set('Authorization', `Bearer ${token}`)
        .send(editedUserData);
  
      expect(response.status).toBe(200);
      expect(response.body).toEqual(expect.objectContaining(editedUserData));
    });
  
    
  
  });






