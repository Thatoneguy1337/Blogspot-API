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
| GET         | Get followers          | `/followers/:user_id`         | Authenticated           |
| DELETE      | Remove follower        | `/followers/:user_id`         | Authenticated           |


<h2 align ='center'> Criando usuário </h2>
 
 Nessa aplicação o usuário pode se cadastrar utilizando seu nome, social security number(cpf), zip code(cep) como padrão da role(função) dele
 vem como moderador ou usuário .

```json
{
{
	"fullname":"Manuel Samuel",
	"username":"SamIam",
	"email": "mano_el@gmail.com",
	"password":"12345678",
	"sc_number":"15783543602",
	"telephone":"1138666884",
	"birthdate":"11/04/1999",
	"is_moderator":true,
	"zip_code":"11060130",
	"state":"São Paulo",
	"city":"São Caetano",
	"street":"Rua Ibiraba",
	"number":"216"
}
}
```

`POST /users - FORMATO DA RESPOSTA - STATUS 201`


```json
{
	"id": 1,
	"fullname": "Manuel Samuel",
	"username": "SamIam",
	"email": "mano_el@gmail.com",
	"user_img": "https://thenounproject.com/api/private/icons/1095867/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0",
	"bg_img": "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/622f40caee4e82c1d9f7f0cb_4.jpg",
	"sc_number": "15783543602",
	"telephone": "1138666884",
	"birthdate": "11/04/1999",
	"description": "Hello, i'm using this social media app",
	"is_banned": false,
	"is_active": false,
	"is_moderator": true,
	"zip_code": "11060130",
	"state": "São Paulo",
	"city": "São Caetano",
	"street": "Rua Ibiraba",
	"number": "216"
}
```

em caso de erro:

```json
{
 "fullname": ["This field is required."],
 "username": ["This field is required."],
 "user_img": ["This field is required."],
 "bg_img": ["This field is required."],
"birthdate": ["This field is required."],
"telephone": ["This field is required."],
"sc_number": ["This field is required."],
"zip_code": ["This field is required "],
"is_moderator": ["This field is required"],
"city": ["This field is required."],
"state": ["This field is required."],
"street": ["This field is required."]
"number": ["This field is required."],
"email": ["This field is required."],
"password": ["This field is required."]
}
```
<h2 align ='center'> Login de usuário </h2>

body:

```json
{
  "email": "gil@gmail.com",
  "password": "Teste123!"
}
```

`POST /login - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc1NlbGxlciI6dHJ1ZSwiaWF0IjoxNjg4MDYyMjE5LCJleHAiOjE2ODgwNjU4MTksInN1YiI6IjEifQ.zfhQ5ZGv6PkRhiB9AgJZAX0n3bfzUohJ_59CW8COpXc",
  "user_id": 1
}
```




 



