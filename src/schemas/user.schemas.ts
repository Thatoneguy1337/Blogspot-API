import {z} from "zod";
import { hashSync } from "bcryptjs";


const userSchema = z.object({
    id: z.number(),
    fullname: z.string().max(127),
    username: z.string().max(127),
    email: z.string().email().max(127),
    password: z
      .string()
      .max(60)
      .transform((password) => hashSync(password, 10)),
    user_img:z.string().max(270),
    bg_img:z.string().max(270),
    sc_number: z.string().max(11),
    telephone: z.string().max(11),
    birthdate: z.string().max(11),
    description: z.string(),
    is_moderator: z.boolean().default(false),
    zip_code: z.string().max(8),
    state: z.string().max(127),
    city: z.string().max(127),
    street: z.string().max(127),
    number: z.string().max(127),
});
  
  const resetEmailSchema = z.object({
    to: z.string().max(127),
    subject: z.string().max(127),
    text: z.string().max(127),
  });
  
  const userSchemaRequest = userSchema.omit({
    id: true
  });
  

  
  const userSchemaResponse = userSchema.omit({
    password: true,
  });
  
  // const userSchemaResetPasswordResponse = userSchema.omit({
  //   reset_password: true,
  //  });
  
  const userSchemaUpdate = userSchema
    .omit({
      id: true,
      // reset_password: true,
    })
    .partial();
  
  export {
    userSchema,
    userSchemaRequest,
    userSchemaResponse,
    userSchemaUpdate,
    resetEmailSchema,
  };













