import { PrismaClient } from "@prisma/client";
import { retrieveUserService, createUserService } from "../../../services/user"; 

describe('User Functions', () => {

    let prisma: PrismaClient;

    beforeAll(() => {
    prisma = new PrismaClient();
    });

    afterAll(async () => {
    await prisma.$disconnect();
    })

    test('should list all users', async () => {
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

        expect(newUser).toBeDefined();
        
        const userList = await retrieveUserService(newUser.id);

        expect(userList).toHaveProperty("map");

})

 it('should return null for non-existing user', async () => {
  
    const nonExistingUser = await retrieveUserService(-1);


    expect(nonExistingUser).toBeNull();
  });


})






