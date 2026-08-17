CT01 - Login com credenciais válidas

Objetivo:
Validar se o sistema permite o acesso de um usuário utilizando
credenciais válidas.

Pré-condição:
A aplicação deve estar disponível e o usuário standard_user
deve estar disponível para autenticação.

Dados de teste:
Usuário: standard_user
Senha: secret_sauce

Passos:
1. Acessar a página de login.
2. Informar o usuário "standard_user".
3. Informar a senha "secret_sauce".
4. Clicar no botão "Login".

Resultado esperado:
O sistema deve autenticar o usuário e redirecioná-lo
para a página de produtos.


-----------------------------------------------------------------------------


CT02 - Login com senha inválida

Objetivo:
Validar se o sistema impede o acesso de um usuário quando
uma senha inválida é informada.

Pré-condição:
A aplicação deve estar disponível e o usuário standard_user
deve estar disponível para autenticação.

Dados de teste:
Usuário: standard_user
Senha: SecretSauce

Passos:
1. Acessar a página de login.
2. Informar o usuário "standard_user".
3. Informar a senha "SecretSauce".
4. Clicar no botão "Login".

Resultado esperado:
O sistema deve impedir a autenticação, permanecer na página
de login e apresentar uma mensagem informando que as
credenciais são inválidas.

-----------------------------------------------------------------------------

CT03 - Login com usuário inválido

Objetivo:
Validar se o sistema impede o acesso quando um usuário inválido
é informado.

Pré-condição:
A aplicação deve estar disponível e a senha utilizada deve ser válida.

Dados de teste:
Usuário: usuario_inexistente
Senha: secret_sauce

Passos:
1. Acessar a página de login.
2. Informar o usuário "usuario_inexistente".
3. Informar a senha "secret_sauce".
4. Clicar no botão "Login".

Resultado esperado:
O sistema deve impedir a autenticação, permanecer na página de login
e apresentar uma mensagem informando que as credenciais são inválidas.

-----------------------------------------------------------------------------

CT04 - Login com usuáiro e senha inválidos

Objetivo: 
Validar se o sistema impede o acesso quando um usuário e senha inválidos são informados

Pré-condição:
A aplicação deve estar disponivel.

Dados de teste: 
Usuário: usuario_inexistente
Senha: senha_inexistente

Passos:
1. Acessar a página de login
2. Informar o usuário "usuario_inexistente". 
3. Informar a senha "senha_inexistente". 
4. Clicar no botão "Login". 

Resultado esperado: 
O sistema deve impedir a autenticação, permanecer na página de login e apresentar uma mensagem informando que as credenciais são inválidas. 


-----------------------------------------------------------------------------

CT05 - Login sem informar usuário

Objetivo: 
Validar se o sistema impede o acesso quando o usuário não é informado. 

Pré-condição:
A aplicação deve estar disponivel.

Dados de teste: 
Usuário: [vazio]
Senha: secret_sauce

Passos:
1. Acessar a página de login 
2. Informar a senha "secret_sauce". 
3. Clicar no botão "Login". 

Resultado esperado: 
O sistema deve impedir a autenticação, permanecer na página de login e apresentar uma mensagem informando que é necessário informar o usuário. 



-----------------------------------------------------------------------------


CT06 - Login sem informar senha

Objetivo: 
Validar se o sistema impede o acesso quando a senha não é informada. 

Pré-condição:
A aplicação deve estar disponivel.

Dados de teste: 
Usuário: standard_user
Senha: [vazio]

Passos:
1. Acessar a página de login 
2. Informar o usuário "standard_user". 
3. Clicar no botão "Login". 

Resultado esperado: 
O sistema deve impedir a autenticação, permanecer na página de login e apresentar uma mensagem informando que é necessário informar a senha. 

-----------------------------------------------------------------------------


CT07 - Login sem informar usuário e senha

Objetivo: 
Validar se o sistema impede o acesso quando o usuário e a senha não são informados. 

Pré-condição:
A aplicação deve estar disponivel.

Dados de teste: 
Usuário: [vazio]
Senha: [vazio]

Passos:
1. Acessar a página de login 
2. Clicar no botão "Login". 

Resultado esperado: 
O sistema deve impedir a autenticação, permanecer na página de login e apresentar uma mensagem informando que é necessário informar usuário e senha. 