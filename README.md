# Projeto-Rede-Social-Api

 Este é um projeto de rede-social desenvolvido por mim mesmo, no intuito de demonstrar meus conhecimentos em desenvolvimento  
 backend, esta Api foi baseada em um assignment que eu fiz previamente no curso da Kenzie Academy Brasil, onde eu teria de 
 pegar dados mockados e construir uma aplicação front-end utilizando esses dados. Tendo esse conceito em mente construi esta
 aplicação para que eu pudesse complementar esta ideia.

 Utilizando-se da linguagem Javascript uma linguagem utilizada fundalmentamente no desenvolvimento de aplicações web,
 esta API foi feita com os frameworks NodeJs, Typescript e ExpressJs o que possibilita o funcionamento e manutenção
 de nossa aplicação.

 O banco de dados utilizado no desenvolvimento desta aplicação foi o PostgresSql, um banco de dados relacional,
 o que significa que algumas tabelas se relacionam e são codependentes umas com as outras, como demonstrado no exemplo env
 todos os dados devem ser preenchidos de forma apropriada para que o banco de dados seja conectado a aplicação o que é necessário
 para o funcionamento da aplicação. 
 
## Instalando Dependências:

```bash
# caso use npm
npm run i

# caso use yarn
yarn

# para rodar as migrações localmente
npx prisma migrate dev

# caso você queira rodar a aplicação localmente
npm run dev

```
## **Endpoints**

| HTTP Method | Description            | Endpoint                      | Authentication Required |
| ----------- | ---------------------- | ----------------------------- | ----------------------- |
| POST        | Register user          | `/users`                      | No Authentication       |
| POST        | Login user             | `/login`                      | No Authentication       |
| POST        | Reset Password request | `/users/resetPassword`        | No Authentication       |
| PATCH       | Reset Password         | `/users/resetPassword/:token` | No Authentication       |
| PATCH       | Update user            | `/users/:id`                  | Authenticated           |
| GET         | Get user profile       | `/users/profile`              | Authenticated           |
| GET         | Get user               | `/users/:id`                  | Authenticated           |
| DELETE      | Delete user            | `/users/:id`                  | Authenticated           |
| POST        | Create post            | `/post`                       | Authenticated           |
| GET         | List all posts         | `/post`                       | No Authentication       |
| GET         | Retrieve posts         | `/post/:id`                   | Authenticated           |
| PATCH       | Update posts           | `/post/:id`                   | Authenticated           |
| DELETE      | Delete posts           | `/post/:id`                   | Authenticated           |
| POST        | Post thread            | `/threads/:post_id`           | Authenticated           |
| GET         | Get thread             | `/threads/:post_id`           | No Authentication       |
| PATCH       | Patch thread           | `/threads/:post_id`           | Authenticated           |
| DELETE      | Delete thread          | `/threads/:post_id`           | Authenticated           |
| POST        | Add follower           | `/followers/:user_id`         | Authenticated           |
| DELETE      | Remove follower        | `/followers/:user_id`         | Authenticated           |


 



