import { prisma } from "../../server";
import { Users } from "@prisma/client";
import {
  TUserResponse,
  TUserRequest
} from "../../interfaces/user.interfaces";
import { userSchemaResponse } from "../../schemas/user.schemas";


export const createUserService = async (
    data: TUserRequest
  ): Promise<TUserResponse> => {
    const users: Users = await prisma.users.create({data});
    console.log('Resposta bruta do prisma:', users);
    return userSchemaResponse.parse(users);
  };





