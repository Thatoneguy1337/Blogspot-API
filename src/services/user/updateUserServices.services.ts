import { AppError } from "../../errors/errors";
import {
  TUserResponse,
  TUserUpdateRequest,
} from "../../interfaces/user.interfaces";
import { userSchemaResponse } from "../../schemas/user.schemas";
import { prisma } from "../../server";

export const updateUserService = async (
  data: TUserUpdateRequest,
  userId: number
): Promise<TUserResponse> => {
  if (data.email) {
    const previousUser = await prisma.users.findUnique({
      where: {
        email: data.email!,
      },
    });

    if (previousUser?.email == data.email) {
      delete data.email;
    } else {
      const user = await prisma.users.findFirst({
        where: {
          email: data.email!,
        },
      });

      if (user) {
        throw new AppError("Email already exists", 409);
      }
    }
  }

  const userUpdated = await prisma.users.update({
    where: { id: userId },
    data: { ...data },
  });

  return userSchemaResponse.parse(userUpdated);
};