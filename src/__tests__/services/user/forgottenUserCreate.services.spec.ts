import { PrismaClient } from '@prisma/client';
import { emailService } from '../../../utils/sendMail.utils';
import { retrieveForgottenPasswordService } from '../../../services/user';
jest.mock('../../../server');
jest.mock('../../../utils/sendMail.utils');

jest.mock('@prisma/client');

describe('Password functions', () => {
  let prismaMock: any;

  beforeEach(() => {
    jest.clearAllMocks();
    prismaMock = new PrismaClient();
  });

  test('should send a password reset email', async () => {
    prismaMock.users.findFirst.mockResolvedValue({
      id: 1,
      username: 'testuser',
      email: 'test@example.com',
    });

    prismaMock.users.update.mockResolvedValue({});

    jest.spyOn(emailService, 'resetPasswordTemplate').mockReturnValue({
    to: 'testuser',
    subject: 'Reset Password',
    text: 'reset_password_email_content',
    });
    jest.spyOn(emailService, 'sendEmail').mockResolvedValue();

    await retrieveForgottenPasswordService('test@example.com');

    expect(prismaMock.users.findFirst).toHaveBeenCalledWith({
      where: { email: 'test@example.com' },
    });

    expect(prismaMock.users.update).toHaveBeenCalledWith({
      where: { email: 'test@example.com' },
      data: { reset_password: expect.any(String) },
    });

    expect(emailService.resetPasswordTemplate).toHaveBeenCalledWith(
      'testuser',
      'test@example.com',
      expect.any(String)
    );

    expect(emailService.sendEmail).toHaveBeenCalledWith('reset_password_email_content');
  });

  test('should throw an error for non-existing user', async () => {
    prismaMock.users.findFirst.mockResolvedValue(null);

    await expect(retrieveForgottenPasswordService('nonexistent@example.com')).rejects.toThrow(
      'User not found'
    );

    expect(prismaMock.users.findFirst).toHaveBeenCalledWith({
      where: { email: 'nonexistent@example.com' },
    });
  });
});