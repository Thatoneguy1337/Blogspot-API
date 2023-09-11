import { Request, Response } from "express";
import { newPasswordService } from "../../services/user/newUserPassword.services";

export const newPasswordController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { password } = req.body;
  const { token } = req.params;
  await newPasswordService(password, token);

  return res.status(200).json({ message: "password alterated with sucess" });
};