import { PrismaClient } from "@prisma/client";
import app from "../../../app";
import supertest from "supertest";
import { editUserRouteMock } from "../../mocks/users";
import { createUserService, updateUserService } from "../../../services/user";


describe('PUT /users/:id (Editar usuário)', () => {
    let token: string; 
    let editedUserId: number; 
    let prisma: PrismaClient;
    beforeAll(async () => {
      const loginResponse = await supertest(app)
        .post('/login') 
        .send(editUserRouteMock.userComplete);
  
      token = loginResponse.body.token;
  
      const createUserResponse = await supertest(app)
        .post('/users') // Substitua pelo caminho real do seu endpoint de criação de usuário
        .send(editUserRouteMock.userComplete);
  
      editedUserId = createUserResponse.body.id;
    });
  
    afterAll(async () => {
      await prisma.users.delete({
        where: { id: editedUserId },
      });
    });
  
    it('Deve editar um usuário com sucesso', async () => {
      const editedUserData = {
        fullname: 'Cleyton Neto',
        username: 'Cleitin',
        email: 'novousuario@email.com',
      };
  
      const response = await supertest(app)
        .put(`/user/${editedUserId}`) 
        .set('Authorization', `Bearer ${token}`)
        .send(editedUserData);
  
      expect(response.status).toBe(200);
      expect(response.body).toEqual(expect.objectContaining(editedUserData));
    });
  
    it('Deve retornar erro ao tentar editar com token inválido', async () => {
      const editedUserData = {
        fullname: 'Novo Nome',
        username: 'novousuario',
        email: 'novousuario@example.com',
      };
  
      const response = await supertest(app)
        .put(`/user/${editedUserId}`) 
        .set('Authorization', 'Bearer token_invalido')
        .send(editedUserData);
  
      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty('error', 'Token inválido');
    });
  
  });






