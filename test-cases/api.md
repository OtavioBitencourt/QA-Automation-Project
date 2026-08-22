# Testes de API

------------------------------------------------------------------------

## CT-API-01 - Criar usuário com dados válidos

### Objetivo

Validar se a API permite criar um usuário utilizando dados válidos.

### Método

POST

### Endpoint

`https://jsonplaceholder.typicode.com/users`

### Pré-condição

A API deve estar disponível.

### Dados de teste

```json
{
    "name": "Otávio QA",
    "username": "otavioqa",
    "email": "otavio@example.com"
}
```

### Passos

1. Criar uma requisição utilizando o método POST.
2. Informar o endpoint `/users`.
3. Configurar o Body no formato JSON.
4. Informar os dados do usuário.
5. Enviar a requisição.
6. Validar a resposta retornada pela API.

### Resultado esperado

A API deve aceitar a requisição e retornar o status code 201 Created.

A resposta deve conter:

• O nome do usuário enviado.
• Um identificador (id) para o usuário criado.

### Validações automatizadas
• Status code deve ser `201`.
• O campo name deve possuir o valor `Otávio QA`.
• A resposta deve possuir um campo `id`.

### Resultado obtido

**PASS**

• Status code: `201`.
• Nome retornado corretamente.
• ID gerado pela API.


------------------------------------------------------------------------

## CT-API-02 - Consultar usuários

### Objetivo

Validar se a API retorna corretamente a lista de usuários.

### Método

GET

### Endpoint

`https://jsonplaceholder.typicode.com/users`

### Pré-condição

A API deve estar disponível.

### Passos

1. Criar uma requisição utilizando o método GET.
2. Informar o endpoint `/users`.
3. Enviar a requisição.
4. Validar o status code retornado.
5. Validar a quantidade de usuários retornados.
6. Validar a presença dos campos obrigatórios nos usuários.

### Resultado esperado

A API deve retornar o status code `200 OK`.

A resposta deve conter 10 usuários.

Cada usuário deve possuir os campos:

- `id`
- `name`
- `username`
- `email`

### Validações automatizadas

- Status code deve ser `200`.
- A quantidade de usuários deve ser igual a `10`.
- Todos os usuários devem possuir os campos obrigatórios.

### Resultado obtido

**PASS**

- Status code: `200`.
- 10 usuários retornados.
- Todos os usuários possuem os campos obrigatórios.