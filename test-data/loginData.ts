export const loginData = {

    valid : {
        username: 'standard_user', 
        password: 'secret_sauce'
    }, 

    invalidPassword: {
        username: 'standard_user',
        password: 'SecretSauce'
    },

    invalidUsername: {
        username: 'usuario_inexistente', 
        password: 'secret_sauce'
    },

    invalidCredentials: {
        username: 'usuario_inexistente', 
        password: 'senha_inexistente'
    }
};