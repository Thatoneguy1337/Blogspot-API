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

Neste projeto, foi adotada uma abordagem de desenvolvimento orientada por testes, onde testes automatizados desempenham 
um papel fundamental na garantia da qualidade do código. Para facilitar a execução de 
testes de integração nos endpoints HTTP, optei por utilizar 
a biblioteca Supertest. O Supertest nos permite simular requisições HTTP em nosso servidor Express sem a necessidade de um servidor real em execução, 
o que torna nossos testes mais rápidos, confiáveis e fáceis de implementar. 
Com o Supertest, podemos validar de forma eficiente o comportamento dos endpoints, 
garantindo que o aplicativo funcione conforme o esperado em diferentes cenários e condições. 
Isso nos proporciona maior confiança na estabilidade e no desempenho de nossa aplicação, além de facilitar a identificação e correção de 
possíveis problemas antes de eles impactarem os usuários finais.




 

 
 
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

# para rodar todos os testes
npm run test

# para rodar os testes individualmente
npm run test nomedapasta/ 

# para rodar os testes de  funcionalidades específicas:
npm run test nomedapasta/nomedoarquivo



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
| PATCH       | Patch thread           | `/threads/:id`                | Authenticated           |
| DELETE      | Delete thread          | `/threads/:id`                | Authenticated           |


# Rotas que não precisam de autentificação


<h2 align ='center'> Criando usuário </h2>
 
 Nessa aplicação o usuário pode se cadastrar utilizando seu nome, social security number(cpf), zip code(cep), também é possível inserir 
 o papel de fundo do seu perfil inserindo a url da imagem no campo bg_img, o mesmo pode ser feito através do campo user_img e o usuário
 também é capaz de dar uma breve descrição sobre si mesmo no campo description, caso ele não queira terá uma mensgem padrão para usuários.

```json
{
	"fullname":"Thales Silveira",
	"username":"Whitepony",
	"user_img": "suaurlaqui.jpg",
	"bg_img": "suaurlaqui.jpg",
	"email": "Thal1z3ra@gmail.com",
	"password":"12345678",
	"ssc_number":"15874543702",
	"telephone":"1138666884",
	"birthdate":"11/04/1999",
	"zip_code":"11060130",
	"state":"São Paulo",
	"city":"São Caetano",
	"street":"Rua Ibiraba",
	"number":"216"
}

```

`POST /users - FORMATO DA RESPOSTA - STATUS 201`


```json
{
	"id": 1,
	"fullname": "Thales Silveira",
	"username": "Whitepony",
	"email": "Thal1z3ra@gmail.com",
	"user_img": "suaurlaqui.jpg",
	"bg_img": "suaurlaqui.jpg",
	"sc_number": "15783543602",
	"telephone": "1138666884",
	"birthdate": "11/04/1999",
	"description": "Hello, i'm using this social media app",
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
"birthdate": ["This field is required."],
"telephone": ["This field is required."],
"ssc_number": ["This field is required."],
"zip_code": ["This field is required "],
"city": ["This field is required."],
"state": ["This field is required."],
"street": ["This field is required."]
"number": ["This field is required."],
"email": ["This field is required."],
"password": ["This field is required."]
}
```
<h2 align ='center'> Login de usuário </h2>

É possível também fazer o login do usuário, e com isso será gerado um token, o que será fundamental para a ter acesso às outras funcionalidades da aplicação

body:

```json
{
  "email": "Thal1z3ra@gmail.com",
  "password": "12345678"
}
```

`POST /login - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc1NlbGxlciI6dHJ1ZSwiaWF0IjoxNjg4MDYy
MjE5LCJleHAiOjE2ODgwNjU4MTksInN1YiI6IjEifQ.zfhQ5ZGv6PkRhiB9AgJZAX0n3bfzUohJ_59CW8COpXc",
  "user_id": 1
}
```

<h2 align ='center'> Recuperação de senha do usuário </h2>

Caso o usuário esqueça da usuário esqueça sua senha, ele pode tentar recuperar a senha enviando seu endereço de email,
caso o email exista dentro do database da aplicação, seu email receberá um token de recuperação de senha 
que será utilizado no próximo passo.

body


```json
{
  "email": "Thal1z3ra@gmail.com"
}
```

`POST /resetPassword - FORMATO DA RESPOSTA - STATUS 200`

```json
{
"message": "token sent"
}
```

A partir deste ponto caso o usuário tenha recebido o token através de seu email, e com isso é necessário colocar
o token como parâmetro da requisição para poder redefinir a sua senha (Caso tenha um frontend, 
deve ser através de um input), o suário precisará passar uma nova senha

body

```json
{
"password": "87654321"
}

```

`PATCH /resetPassword/:token - FORMATO DA RESPOSTA - STATUS 200`


```json 
{
"message":"password alterated with sucess"
}

```











 



