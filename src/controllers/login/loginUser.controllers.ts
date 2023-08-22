import { Request, Response } from "express";
import { TLoginRequest } from "../../interfaces/login.interfaces";
import { createTokenService } from "../../services/login/userloginservice.services";

export const loginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { email, password }: TLoginRequest = req.body;

  const tokenId: {} = await createTokenService({ email, password });

  return res.json(tokenId);
};