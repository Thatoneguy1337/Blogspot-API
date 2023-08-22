import {z} from "zod"
import {
    userSchema,
    userSchemaRequest,
    userSchemaResponse,
    resetEmailSchema,
  } from "../schemas/user.schemas";
  
  export type TUser = z.infer<typeof userSchema>;
  
  export type TUserRequest = z.infer<typeof userSchemaRequest>;
  
  export type TUserResponse = z.infer<typeof userSchemaResponse>;
  
  export type TUserUpdateRequest = Partial<TUserRequest>;
  
  export type TResetEmail = z.infer<typeof resetEmailSchema>


  