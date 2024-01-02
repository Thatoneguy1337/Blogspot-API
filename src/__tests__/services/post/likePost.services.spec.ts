import { Prisma, PrismaClient } from "@prisma/client";
import { likePostService} from "../../../services/posts";


describe("like post function", ()=>{
    
    let prisma: PrismaClient

    beforeAll(() => {
        prisma = new PrismaClient();
      });
      
    
   afterAll(async () => {
        await prisma.$disconnect();
      });

      test('should add a like with valid data', () => {
        
        const likeId = 1
        const postId = 1
        const userId = 1

        const validData = {
          id: likeId,
          liked_at: new Date(),
          user:{
            id:userId,
            username:"john_doe",
            user_img:""
        
          }
        };
    
        const addedLike = likePostService(validData,postId,userId);
    
        
        expect(addedLike).toEqual(validData);

       

      });

})