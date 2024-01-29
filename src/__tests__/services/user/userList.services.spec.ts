import supertest from 'supertest';
import { PrismaClient} from "@prisma/client";
import  app  from '../../../app';
import { retrieveAllUsersService } from "../../../services/user";
import {listUserRouteMock, generateSscNumber} from "../../mocks/users";
import tokenMock from "../../integration/token.mock";
import {TUser} from "../../../interfaces/user.interfaces";
import * as shortid from 'shortid';

let prisma: PrismaClient;


describe('GET /users', () => {


  type MockedUser = Omit<TUser, 'id'>; // Remova a propriedade 'id' para corresponder à entrada do createMany

  const mockedUserList: MockedUser[] = [
    {
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
  ];
  
  beforeAll(async () => {
    // Carregue os usuários de teste no banco de dados antes de executar os testes
    await prisma.users.createMany({
      data: mockedUserList,
    });
  });


  afterAll(async () => {
    await prisma.$disconnect();
    })
  

    it('Success: Must be able list all users', async () => {
      const response = await supertest(app)
        .get("/user")
        .set('Authorization', `Bearer ${tokenMock.genToken(true, 1)}`)
        .send();
  
      const expectResults = {
        status: 200,
        expectBody: mockedUserList,
      };
  
      expect(response.status).toBe(expectResults.status);
      expect(response.body).toEqual(expectResults.expectBody);
      expect(response.body).toEqual(
        expect.arrayContaining([
          expect.not.objectContaining({ password: expect.any(String) }),
        ])
      );
  
      expect(response.body).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            reset_password: expect.any(String),
          }),
        ])
      );
    });

  





})



