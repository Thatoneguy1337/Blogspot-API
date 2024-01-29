import { PrismaClient, Users as PrismaUser } from '@prisma/client';
import { TUser } from '../../../interfaces/user.interfaces';

const prisma = new PrismaClient();
import * as shortid from 'shortid';

const generateSscNumber = (): string => {
    const timestampPart = Date.now().toString().slice(-6);
  
    
    const randomPart = shortid.generate().slice(-5);
  
    
    const sscNumber = `${timestampPart}${randomPart}`;
  
    
    return sscNumber.slice(0, 11);
  };

const readUsers = async (): Promise<Array<PrismaUser>> => {
  const usersTotal: number = 5;

  const createdUsers: any = await Promise.all(
    Array.from({ length: usersTotal }).map(async (_, index) => {
      
      const fullname: string = "John Doe"
      const username: string = `user${index}`;
      const email: string = `${username}@mail.com`;
      const password: string = "12345678";
      const reset_password: string = "";
      const user_img: string = "";
      const bg_img: string = "";
      const is_banned: boolean = false;
      const is_moderator: boolean = true;
      const ssc_number: string = generateSscNumber();
      const telephone: string = "1122604433";
      const birthdate: string ="06/04/1989";
      const description: string = "";
      const zip_code: string = "20068397";
      const state: string = "Texas";
      const city: string = "El Passo";
      const street: string = "Benson Stt";
      const number: string = "267";




      const user: TUser = {
        id: expect.any(number),
        fullname,
        username,
        email,
        password,
        reset_password,
        user_img,
        bg_img,
        is_banned,
        is_moderator,
        ssc_number,
        telephone,
        birthdate,
        description,
        zip_code,
        state,
        city,
        street,
        number
        
      };

      
      return prisma.users.create({
        data: user,
      });
    })
  );

  return createdUsers;
};

export default { readUsers };