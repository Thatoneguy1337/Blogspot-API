import { Request, Response } from "express";
import { retrieveAllUsersService } from "../../services/user/retrieveUserAll.services";
import { TUserResponse } from "../../interfaces/user.interfaces";

export const listAllUsersController = async(req:Request, res:Response): Promise<Response> => {
    const userId: number = Number(req.params.id)

    const allUsers: TUserResponse[] = await retrieveAllUsersService();

    return res.json(allUsers)
}



