import supertest from 'supertest';
import { PrismaClient } from '@prisma/client';
import { createUserService } from "../../../services/user/createUser.services";
import  app  from '../../../app';
import { createUserRouteMock } from '../../mocks/users';
import { string } from 'zod';
  

  describe( 'POST /user', ()=>{
  
  const baseUrl: string = '/user';

  let prisma: PrismaClient;
  
  beforeAll(() => {
    prisma = new PrismaClient();
    });

  
  beforeEach(async () => {
  await prisma.users.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
    })

  it('Success: Must be able to create a user - Full body', async () => {
    const response = await supertest(app)
      .post(baseUrl)
      .send(createUserRouteMock.userComplete);

    expect(response.status).toBe(201);
        
    expect(response.body).toEqual(
      expect.objectContaining({
        fullname: createUserRouteMock.userComplete.fullname,
        username: createUserRouteMock.userComplete.username,
        email: createUserRouteMock.userComplete.email,
        user_img: createUserRouteMock.userComplete.user_img,
        bg_img: createUserRouteMock.userComplete.bg_img,
        ssc_number: createUserRouteMock.userComplete.ssc_number,
        telephone: createUserRouteMock.userComplete.telephone,
        birthdate: createUserRouteMock.userComplete.birthdate,
        description: createUserRouteMock.userComplete.description,
        zip_code: createUserRouteMock.userComplete.zip_code,
        state: createUserRouteMock.userComplete.state,
        city: createUserRouteMock.userComplete.city,
        street: createUserRouteMock.userComplete.street,
        number: createUserRouteMock.userComplete.number
      })
    );
    
    expect(response.body).not.toEqual(
      expect.objectContaining({ password: expect.any(String), reset_password: expect.any(String)})
    );  
}, 10000);
  

})


