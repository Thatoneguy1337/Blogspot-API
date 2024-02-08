import supertest from 'supertest';
import { PrismaClient} from "@prisma/client";
import  app  from '../../../app';
import { retrieveAllUsersService } from "../../../services/user";
import {listUserRouteMock, generateSscNumber} from "../../mocks/users";
import tokenMock from "../../integration/token.mock";
import {TUser} from "../../../interfaces/user.interfaces";
import * as shortid from 'shortid';

describe('PUT /users/:id (Editar usuário)', () => {
  let userId: number;
  let isAdmin: boolean;
  
  const baseUrl: string = '/user';

  const prisma = new PrismaClient();
  
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
        
        isAdmin = createdUser.is_moderator
        userId = createdUser.id;
  });

  afterAll(async () => {
    await prisma.users.delete({
      where: { id: userId },
    });
  });

  it('Deve pegar um usuário por id com sucesso', async () => {
    const token = tokenMock.genToken(isAdmin, userId);
    const response = await supertest(app)
      .get(`${baseUrl}/${userId}`)
      .set('Authorization', `Bearer ${token}` ) 
      .send();

    expect(response.status).toBe(200);
  });
});