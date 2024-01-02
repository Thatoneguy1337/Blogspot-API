import { PrismaClient } from "@prisma/client";
import { retrieveAllUsersService } from "../../../services/user";


describe('User functions', () => {
    let prisma: PrismaClient;
    
    beforeAll(() => {
        prisma = new PrismaClient();
    });
    
    afterAll(async () => {
        await prisma.$disconnect();
    })

    test('should list all users', async () => {

        const userList = await retrieveAllUsersService();

        expect(userList).toHaveProperty("map");

    })

})









