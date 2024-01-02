import { PrismaClient } from "@prisma/client";
import { createUserService, updateUserService } from "../../../services/user";


describe( 'User function', () => {

    let prisma: PrismaClient;

    beforeAll(() => {
        prisma = new PrismaClient();
    })

    afterAll(async () => {
        await prisma.$disconnect();
    })

    it('should edit user', async() => {
        
        
        const userData = {
        fullname: "John Doe",
        username: "johnthedoughy89",  
        email: "email@email.com",
        password: "12345678",
        reset_password: "",
        user_img: "",
        bg_img: "",
        ssc_number: "",
        telephone: "",
        birthdate: "06/04/1989",
        description: "",
        is_banned: false,
        is_moderator: true,
        zip_code: "20068397",
        state: "Texas",
        city: "El Passo",
        street: "Benson Stt",
        number: "267",
        }
        
        const newUser = await createUserService(userData);

        expect(newUser).toBeDefined();


        const editedUsers = await updateUserService(userData, newUser.id);

        
        expect(editedUsers).toEqual(userData);


    })

}


)







