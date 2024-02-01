import { sign } from 'jsonwebtoken';

const secretKey: string = "$3CR3T$";
process.env.SECRET_KEY = secretKey;

export default {
  genToken: (admin: boolean, id: number) => {
    return sign({ admin }, secretKey, { subject: id.toString() });
  },
  invalidSignature: sign({ admin: true }, 'invalid_signature'),
  jwtMalformed: '12345',

};