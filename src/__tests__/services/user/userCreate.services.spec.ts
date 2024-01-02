import { PrismaClient } from '@prisma/client';
import { createUserService } from "../../../services/user/createUser.services";


describe('User functions', () => {
  let prisma: PrismaClient;
  
  beforeAll(() => {
    prisma = new PrismaClient();
  });
  
  afterAll(async () => {
    await prisma.$disconnect();
  });
  
  it('should create a new user', async () => {
    const fullname = "John Doe"
    const username = "johnthedoughy89"  
    const email = "email@email.com"
    const password = "12345678"
    const reset_password  = ""
    const user_img = ""
    const bg_img = ""
    const ssc_number = ""
    const telephone = ""
    const birthdate = "06/04/1989"
    const description = ""
    const is_banned = false
    const is_moderator = true
    const zip_code = "20068397"
    const state = "Texas"
    const city = "El Passo"
    const street = "Benson Stt"
    const number = "267"

      
    const userdata = {
        fullname, 
        username, 
        email, 
        password, 
        reset_password, 
        user_img, 
        bg_img, 
        ssc_number, 
        telephone,
        birthdate,
        description,
        is_banned,
        is_moderator,
        zip_code,
        state,
        city,
        street,
        number
    }
    
    const newUser = await createUserService(userdata);


     expect(newUser).toEqual(
      expect.objectContaining({
        id:1,
        fullname, 
        username, 
        email, 
        password, 
        reset_password, 
        user_img, 
        bg_img, 
        ssc_number, 
        telephone,
        birthdate,
        description,
        is_banned,
        is_moderator,
        zip_code,
        state,
        city,
        street,
        number
      })
    );

    
  });
});




