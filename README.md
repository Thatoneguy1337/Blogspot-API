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
| GET         | Get user profile       | `/users/profile`              | No Authentication       |
| GET         | Get user               | `/users/:id`                  | No Authetication        |
| DELETE      | Delete user            | `/users/:id`                  | Authenticated           |
| POST        | Create post            | `/post`                       | Authenticated           |
| GET         | List all posts         | `/post`                       | No Authentication       |
| GET         | Retrieve posts         | `/post/:id`                   | Authenticated           |
| PATCH       | Update posts           | `/post/:id`                   | Authenticated           |
| DELETE      | Delete posts           | `/post/:id`                   | Authenticated           |
| GET         | Retrieve likes         | `/post/:id/like`              | Authenticated           |
| POST        | Post likes             | `/post/:id/like`              | Authenticated           |
| DELETE      | Delete likes           | `/post/:id/like`              | Authenticated           |
| POST        | Post thread            | `/threads/:post_id`           | Authenticated           |
| GET         | List threads           | `/threads/:post_id`           | No Authentication       |
| PATCH       | Patch thread           | `/threads/:id`                | Authenticated           |
| DELETE      | Delete thread          | `/threads/:id`                | Authenticated           |


# Rotas que não precisam de autentificação


<h2 align ='center'> Criando usuário </h2>
 
 Nessa aplicação o usuário pode se cadastrar utilizando seu nome, social security number(cpf), zip code(cep), também é possível inserir 
 o papel de fundo do seu perfil inserindo a url da imagem no campo bg_img, o mesmo pode ser feito através do campo user_img e o usuário
 também é capaz de dar uma breve descrição sobre si mesmo no campo description, caso ele não queira terá uma mensagem padrão para usuários.

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


<h2 align ='center'> Listagem de posts </h2>

Nessa rota é possível listar os posts cirados pelos usuários da plataforma sem a necessidade 
de ter um token de acesso.


NO BODY


`GET /post - FORMATO DE RESPOSTA - STATUS 200`

 ```json
[
	{
		"id": 1,
		"posted_at": "2023-11-30T13:45:29.969Z",
		"description": "My favorite  deftones album is WhitePony",
		"post_img": ""
	},
	{
		"id": 2,
		"posted_at": "2023-11-30T18:00:02.213Z",
		"description": "My favorite  deftones album is WhitePony",
		"post_img": ""
	},
	{
		"id": 3,
		"posted_at": "2023-11-30T18:00:02.248Z",
		"description": "My favorite  deftones album is WhitePony",
		"post_img": ""
	},
	{
		"id": 4,
		"posted_at": "2023-11-30T18:00:14.520Z",
		"description": "My favorite  deftones album is WhitePony",
		"post_img": ""
	}
]
```

<h2 align ='center'> Listagem de threads </h2>

Nessa rota é possível listar as threads de um post, e não é necessário um token de acesso 
para isso.

NO BODY

`GET /thread/:post_id - FORMATO DE RESPOSTA - STATUS 200`


```json

{
	"threads": [
		{
			"id": 1,
			"created_at": "2024-02-16T00:47:09.762Z",
			"edited": false,
			"description": "Cool",
			"comment_img": "",
			"post_id": 1,
			"user_id": 2,
			"username": "Al_Peres"
		},
		{
			"id": 2,
			"created_at": "2024-02-16T00:47:09.762Z",
			"edited": false,
			"description": "Me too",
			"comment_img": "",
			"post_id": 1,
			"user_id": 3,
			"username": "Jordi"
		},
		{
			"id": 3,
			"created_at": "2024-02-16T00:47:09.762Z",
			"edited": false,
			"description": "Me too",
			"comment_img": "",
			"post_id": 1,
			"user_id": 1,
			"username": "Erick"
		},
		
	]
}
```

<h2 align ='center'> Pegar o usuário por id </h2>

Nessa rota é possível listar pegar um usuário pelo id, não é necessário um token de acesso 
para requisitar a rota.

NO BODY


`GET /users - FORMATO DE RESPOSTA - STATUS 200`


```json
{
	"id": 2,
	"fullname": "Alan Pereira",
	"username": "Al_Peres",
	"email": "A14nP3r31r4@gmail.com",
	"user_img": "insirasuaurlaqui.jpg",
	"bg_img": "insirasuaurlaqui.jpg",
	"ssc_number": "17783543602",
	"telephone": "1138666884",
	"birthdate": "11/04/1999",
	"description": "Hello, i'm using this social media app",
	"is_banned": false,
	"is_moderator": true,
	"zip_code": "11060130",
	"state": "Rio de Janeiro",
	"city": "Rio de Janeiro",
	"street": "Rua Ibiraba",
	"number": "216"
},
{
	"id": 3,
	"fullname": "Alan Pereira",
	"username": "Al_Peres",
	"email": "A14nP3r31r4@gmail.com",
	"user_img": "insirasuaurlaqui.jpg",
	"bg_img": "insirasuaurlaqui.jpg",
	"ssc_number": "17783543602",
	"telephone": "1138666884",
	"birthdate": "11/04/1999",
	"description": "Hello, i'm using this social media app",
	"is_banned": false,
	"is_moderator": true,
	"zip_code": "11060130",
	"state": "Rio de Janeiro",
	"city": "Rio de Janeiro",
	"street": "Rua Ibiraba",
	"number": "216"
},
{
	"id": 4,
	"fullname": "Alan Pereira",
	"username": "Al_Peres",
	"email": "A14nP3r31r4@gmail.com",
	"user_img": "insirasuaurlaqui.jpg",
	"bg_img": "insirasuaurlaqui.jpg",
	"ssc_number": "17783543602",
	"telephone": "1138666884",
	"birthdate": "11/04/1999",
	"description": "Hello, i'm using this social media app",
	"is_banned": false,
	"is_moderator": true,
	"zip_code": "11060130",
	"state": "Rio de Janeiro",
	"city": "Rio de Janeiro",
	"street": "Rua Ibiraba",
	"number": "216"
}
```

# Rotas que precisam de autentificação


<h2 align ='center'> Ver o perfil do usuário </h2>

Nessa rota é possível que o usuário consiga ver o seu próprio perfil, é necessário um token de acesso 
para requisitar a rota .

NO BODY

`GET /user/profile - FORMATO DE RESPOSTA - STATUS 200`



```json
{
	"id": 2,
	"fullname": "Alan Pereira",
	"username": "Al_Peres",
	"email": "A14nP3r31r4@gmail.com",
	"user_img": "insirasuaurlaqui.jpg",
	"bg_img": "insirasuaurlaqui.jpg",
	"ssc_number": "17783543602",
	"telephone": "1138666884",
	"birthdate": "11/04/1999",
	"description": "Hello, i'm using this social media app",
	"is_banned": false,
	"is_moderator": true,
	"zip_code": "11060130",
	"state": "Rio de Janeiro",
	"city": "Rio de Janeiro",
	"street": "Rua Ibiraba",
	"number": "216"
}
```


<h2 align ='center'> Editar perfil do usuário </h2>

Nessa rota é possível que o usuário edite o seu próprio perfil, é necessário um token de acesso 
para requisitar a rota .

```json
{
 "description": "Usuário desta rede"
}
```

`PATCH /user/:id - FORMATO DE RESPOSTA - STATUS 200`

```json
{
	"id": 2,
	"fullname": "Alan Pereira",
	"username": "Al_Peres",
	"email": "A14nP3r31r4@gmail.com",
	"user_img": "insirasuaurlaqui.jpg",
	"bg_img": "insirasuaurlaqui.jpg",
	"ssc_number": "17783543602",
	"telephone": "1138666884",
	"birthdate": "11/04/1999",
	"description": "Usuário desta rede",
	"is_banned": false,
	"is_moderator": true,
	"zip_code": "11060130",
	"state": "Rio de Janeiro",
	"city": "Rio de Janeiro",
	"street": "Rua Ibiraba",
	"number": "216"
}
```

<h2 align ='center'> Deletar perfil do usuário </h2>

NO BODY

Nessa rota é possível que o usuário delete o seu próprio perfil, é necessário um token de acesso 
para requisitar a rota .

`DELETE /user/:id - FORMATO DE RESPOSTA - STATUS 204 NO RETURN`


<h2 align ='center'> Criação de posts  </h2>

```json
    {
    "description": "White Pony is my favorite deftones album, the second one is Around the Fur",
    "post_img": "suaurlaqui.jpg"
      } 
```

Nessa rota é possível que o usuário crie uma publicação que o usuário consiga tanto escrever o que lhe vêm a mente ou postar uma imagem, 
é necessário um token de acesso para requisitar a rota.


`POST /post - FORMATO DE RESPOSTA - STATUS 201`


```json
{
	"id": 1,
	"posted_at": "2024-02-16T00:45:32.413Z",
	"description": "White Pony is my favorite Deftones album, the second one is Around the Fur",
	"post_img": "suaurlaqui.jpg"
}
```

<h2 align ='center'> Edição de posts  </h2>
 body 

```json
    {
    "description": "Saturday Night Wrist is my favorite Deftones album, the second one is Diamond Eyes"
   } 
```
Nessa rota é possível que o usuário edite uma publicação que ele tenha feito, 
é necessário um token de acesso para requisitar a rota. 

`PATCH /post - FORMATO DE RESPOSTA - STATUS 200`


```json

  {
	"id": 1,
	"posted_at": "2023-09-05T14:15:29.434Z",
        "description": "Saturday Night Wrist is my favorite Deftones album, the second one is Diamond Eyes"
	"post_img": "suaurlaqui.jpg",

}

```

<h2 align ='center'> Deleção de posts  </h2>

NO BODY

Nessa rota é possível que o usuário delete uma publicação que ele tenha feito, 
é necessário um token de acesso para requisitar a rota. 

`DELETE /post - FORMATO DE RESPOSTA - STATUS 204 NO RETURN`

<h2 align ='center'> Deleção de posts  </h2>

NO BODY

Nessa rota é possível que o usuário delete uma publicação que ele tenha feito, 
é necessário um token de acesso para requisitar a rota. 

`DELETE /post/:id - FORMATO DE RESPOSTA - STATUS 204 NO RETURN`


<h2 align ='center'> Criação de likes no post</h2>

NO BODY

Nessa rota é possível que o usuário consiga dar like em uma publicação feito por outro usuário, 
é necessário um token de acesso para requisitar a rota.


`POST /post/:post_id/like 201`

```json
{
	"id": 3,
	"liked_at": "2024-02-16T16:50:21.623Z",
	"username": "Whitepony",
	"user": {
		"id": 1,
		"username": "Al_peres",
		"user_img": "suaurlaqui.jpg"
	}
}
```
<h2 align ='center'> listagem de likes no post</h2>

NO BODY

Nessa rota é possível que o usuário consiga retornar os likes de uma publicação feito por outro usuário, 
é necessário um token de acesso para requisitar a rota.


`GET /post/:post_id/like 200 OK`

```json
{

	"likes": [
		{
			"id": 5,
			"liked_at": "2023-11-30T18:03:03.933Z",
			"post_id": 2,
			"user_id": 2,
                        "username": "Erick"
		},
		{
			"id": 6,
			"liked_at": "2023-11-30T18:03:27.767Z",
			"post_id": 2,
			"user_id": 1,
			"username":"Al_Peres"
		}
	]
}
}
```

<h2 align ='center'> deleção de likes no post</h2>

NO BODY

Nessa rota é possível que o usuário consiga deletar o like que ele deu uma publicação feito por um usuário, 
é necessário um token de acesso para requisitar a rota.


`DELETE /post/:post_id/like 204 NO RETURN`


<h2 align ='center'> Criação de threads em um post </h2>

```json
{
"description": "White Pony is my favorite deftones album, the second one is Around the Fur",
"comment_img": "suaurlaqui.jpg"      
}
```

Nessa rota é possível que o usuário consiga deixar um comentário em uma publicação feito por outro usuário, 
é necessário um token de acesso para requisitar a rota.


`POST /post/:post_id/like 201 CREATED`

```json
{
	"id": 11,
	"created_at": "2024-02-16T00:47:09.762Z",
	"edited": false,
	"description": "Diamond Eyes is my favorite deftones album, the second one is Gore",
	"comment_img": "",
	"username": "Al_Peres",
	"user": {
		"id": 12,
		"username": "Al_Peres",
		"user_img": "suaurlaqui.jpg"
	}
}

```

<h2 align ='center'> listagem de threads em um post </h2>

NO BODY

Nessa rota é possível que o usuário consiga listar as threads em uma publicação feito pelos usuários, 
é necessário um token de acesso para requisitar a rota.


`GET /post/:post_id/like 200 OK`

```json
{
	"threads": [
		{
			"id": 11,
			"created_at": "2024-02-16T00:47:09.762Z",
			"edited": false,
			"description": "Diamond Eyes is my favorite deftones album, the second one is Gore",
			"comment_img": "",
			"post_id": 11,
			"user_id": 12,
			"username": "Al_Peres"
		},
                {
			"id": 11,
			"created_at": "2024-02-16T00:52:09.762Z",
			"edited": false,
			"description": "My favorite is Adrenaline",
			"comment_img": "",
			"post_id": 11,
			"user_id": 27,
			"username": "Erick"
		}
	]
}
```

<h2 align ='center'> edição de threads em um post </h2>

```json
{
"description": "Diamond Eyes is my favorite deftones album, the second one is Koi no Yokan"
}
```
Nessa rota é possível que o usuário consiga editar threads em uma publicação feita pelos usuário, 
é necessário um token de acesso para requisitar a rota.


`PATCH /post/:post_id/like 200 OK`

```json
{
	"threads": [
		{
			"id": 11,
			"created_at": "2024-02-16T00:47:09.762Z",
			"edited": false,
			"description": "Diamond Eyes is my favorite deftones album, the second one is Koi no Yokan",
			"comment_img": "",
			"post_id": 11,
			"user_id": 12,
			"username": "Al_Peres"
		}
	]
}
```

<h2 align ='center'> deleção de threads em um post </h2>

NO BODY

Nessa rota é possível que o usuário consiga deletar threads uma publicação feita pelo usuári0, 
é necessário um token de acesso para requisitar a rota.


`DELETE /post/:post_id/like 204 NO RETURN`




