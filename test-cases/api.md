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