import {z} from "zod";
import { hashSync } from "bcryptjs";



const userSchema = z.object({
    id: z.number(),
    fullname: z.string().max(45, {message:"Must have 45 characters maximum"}),
    username: z.string().max(127).min(6, {message:"Must have 6 characters"}),
    email: z.string().email().max(127),
    password: z
      .string()
      .max(60)
      .transform((password) => hashSync(password, 10)),
    reset_password: z.string().max(127).default(""),
    user_img:z.string().max(270).default("https://thenounproject.com/api/private/icons/1095867/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"),
    bg_img:z.string().max(270).default("https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/622f40caee4e82c1d9f7f0cb_4.jpg"),
    ssc_number: z.string().min(11),
    telephone: z.string().max(11),
    birthdate: z.string().max(11),
    description: z.string().max(270).default("Hello, i'm using this social media app"),
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
    reset_password: true
  });
 
  const manyUsersSchemaResponse = z.array(userSchemaResponse);
  
  const userSchemaUpdate = userSchema
    .omit({
      id: true,
      reset_password: true,
    })
    .partial();

    const userSchemaResetPasswordResponse = userSchema.omit({
      reset_password: true,
    });
 
  
  export {
    userSchema,
    userSchemaRequest,
    userSchemaResponse,
    manyUsersSchemaResponse,
    userSchemaUpdate,
    resetEmailSchema,
  };













