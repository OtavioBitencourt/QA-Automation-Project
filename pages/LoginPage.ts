import { Page } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {}

    async acessarPagina() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async preencherUsuario(usuario: string) {
        await this.page.getByPlaceholder('Username').fill(usuario);
    }

    async preencherSenha(senha: string) {
        await this.page.getByPlaceholder('Password').fill(senha);
    }

    async clicarLogin() {
        await this.page.getByRole('button', { name: 'Login' }).click();
    }

    async login(usuario: string, senha: string) {
        await this.preencherUsuario(usuario);
        await this.preencherSenha(senha);
        await this.clicarLogin();
    }
}

