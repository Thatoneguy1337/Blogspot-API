import { prisma } from "../../server";
import { Users } from "@prisma/client";
import { TUserResponse } from "../../interfaces/user.interfaces";
import { manyUsersSchemaResponse } from "../../schemas/user.schemas";

export const retrieveAllUsersService = async (
  
): Promise<TUserResponse[]> => {
  const users: Users[] = await prisma.users.findMany({
  
    
    orderBy: [
        {
          id: "asc",
        },
      ],
  })

  return manyUsersSchemaResponse.parse(users);
};