import { PrismaClient } from '@prisma/client';
import { emailService } from '../../../utils/sendMail.utils';
import { retrieveForgottenPasswordService } from '../../../services/user';
import * as nodemailerMock from 'nodemailer-mock';


describe( 'Reset password /resetPassword',()=>{

let baseUrl = "/resetPassword"

beforeAll(() => {
  const mockTransport = nodemailerMock.createTransport();
  emailService.transporter = mockTransport;
});


it('should send email successfully', async () => {
  const resetEmail = {
    to: 'example@example.com',
    subject: 'Test Subject',
    text: 'Test Body',
  };

  await emailService.sendEmail(resetEmail);

  
  const sentMail = nodemailerMock.mock.getSentMail();
  expect(sentMail.length).toBe(1);
  expect(sentMail[0].to).toBe('example@example.com');
  expect(sentMail[0].subject).toBe('Test Subject');
  expect(sentMail[0].html).toBe('Test Body');
});


afterEach(() => {
  
});
});