import {z} from "zod"
import {
    userSchema,
    userSchemaRequest,
    userSchemaResponse,
    resetEmailSchema,
    manyUsersSchemaResponse,
    userFollowersResponse
  } from "../schemas/user.schemas";
  
  export type TUser = z.infer<typeof userSchema>;
  
  export type TUserRequest = z.infer<typeof userSchemaRequest>;
  
  export type TUserResponse = z.infer<typeof userSchemaResponse>;
  
  export type TUserUpdateRequest = Partial<TUserRequest>;

  export type TUserManyRequest = z.infer<typeof manyUsersSchemaResponse>;
  
  export type TUserFollowers = z.infer<typeof userFollowersResponse>;

  export type TResetEmail = z.infer<typeof resetEmailSchema>;


  