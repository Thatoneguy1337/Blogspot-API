import {z} from "zod"
import {
    userSchema,
    userSchemaRequest,
    userSchemaResponse,
    resetEmailSchema,
    manyUsersSchemaResponse
  } from "../schemas/user.schemas";
import { type } from "os";
  
  export type TUser = z.infer<typeof userSchema>;
  
  export type TUserRequest = z.infer<typeof userSchemaRequest>;
  
  export type TUserResponse = z.infer<typeof userSchemaResponse>;
  
  export type TUserUpdateRequest = Partial<TUserRequest>;

  export type TUserManyRequest = z.infer<typeof manyUsersSchemaResponse>
  
  export type TResetEmail = z.infer<typeof resetEmailSchema>


  