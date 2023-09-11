import { Request, Response } from "express";
import { retrieveForgottenPasswordService } from "../../services/user/forgottenUserPassword.services";

export const forgottenPasswordController = async (
  req: Request,
  res: Response
): Promise<Response> => {
    
    const { email } = req.body;

    await retrieveForgottenPasswordService(email);
    return res.status(200).json({ message: "token send" });
};