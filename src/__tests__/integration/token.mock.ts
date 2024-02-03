import { sign } from 'jsonwebtoken';

const secretKey: string = "$3CR3T$";
process.env.SECRET_KEY = secretKey;

export default {
  genToken: (is_moderator: boolean, id: number) => {
    return sign({ is_moderator }, secretKey, { subject: id.toString() });
  },
  invalidSignature: sign({ is_moderator: true }, 'invalid_signature'),
  jwtMalformed: '12345',

};