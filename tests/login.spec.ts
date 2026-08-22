import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { loginData } from '../test-data/loginData';



test.describe('Testes de Login',() => {
    
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.acessarPagina();
    });


    test('CT01 - Login com credenciais válidas', async ({ page }) => {

        await loginPage.login(
            loginData.valid.username, 
            loginData.valid.password
        );

        await expect(page).toHaveURL(/inventory/);
    });


    test('CT02 - Login com senha inválida', async ({ page }) => {

        await loginPage.login(
            loginData.invalidPassword.username, 
            loginData.invalidPassword.password
        );

        await expect(page).toHaveURL('https://www.saucedemo.com/');

        await expect(
            page.getByText(
                'Epic sadface: Username and password do not match any user in this service'
            )
        ).toBeVisible();
    });


    test('CT03 - Login com usuário inválido', async ({ page }) => {

        await loginPage.login(
            loginData.invalidUsername.username, 
            loginData.invalidUsername.password
        );

        await expect(page).toHaveURL('https://www.saucedemo.com/');

        await expect(
            page.getByText(
                'Epic sadface: Username and password do not match any user in this service'
            )
        ).toBeVisible();
    });


    test('CT04 - Login com usuário e senha inválidos', async ({ page }) => {

        await loginPage.login(
            loginData.invalidCredentials.username,
            loginData.invalidCredentials.password
        );

        await expect(page).toHaveURL('https://www.saucedemo.com/');

        await expect(
            page.getByText(
                'Epic sadface: Username and password do not match any user in this service'
            )
        ).toBeVisible();
    });


    test('CT05 - Login sem informar usuário', async({ page }) => {
            
        await loginPage.preencherSenha('secret_sauce');
        await loginPage.clicarLogin();
    
        await expect(page).toHaveURL('https://www.saucedemo.com/');
    
        await expect(
            page.getByText('Epic sadface: Username is required')
        ).toBeVisible();
    
    });


    test('CT06 - Login sem informar senha', async({ page }) => {

        await loginPage.preencherUsuario('standard_user');
        await loginPage.clicarLogin();
        
        await expect(page).toHaveURL('https://www.saucedemo.com/');
        
        await expect(
            page.getByText('Epic sadface: Password is required')
        ).toBeVisible();
    });
    
    
    
    
    test('CT07 - Login sem informar usuário e senha', async({ page }) => {
        
        await loginPage.clicarLogin();
        
        await expect(page).toHaveURL('https://www.saucedemo.com/');

        await expect(
            page.getByText('Epic sadface: Username is required')
        ).toBeVisible();
    });


})