import {test, expect} from '@playwright/test';

test('CT01 - Login com credenciais válidas', async ({ page }) =>{
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/inventory/);
});



test('CT02 - Login com senha inválida', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('SecretSauce');
    await page.getByRole('button', { name: 'Login'}).click();

    await expect(page).toHaveURL('https://www.saucedemo.com/');
    
    await expect(
        page.getByText(
            'Epic sadface: Username and password do not match any user in this service'
        )).toBeVisible();
    
});


test('CT03 - Login com usuário inválido', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('usuario_inexistente');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', {name: 'Login'}).click();
    
    await expect(page).toHaveURL('https://www.saucedemo.com/');

    await expect(
        page.getByText('Epic sadface: Username and password do not match any user in this service'
        )).toBeVisible();
});



test('CT04 - Login com usuário e senha inválidos', async({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('usuario_inexistente');
    await page.getByPlaceholder('Password').fill('senha_inexistente');
    await page.getByRole('button', {name: 'Login'}).click();

    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service'
               )).toBeVisible();

});



test('CT05 - Login sem informar usuário', async({ page }) => {
    
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', {name: 'Login'}).click();

    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.getByText('Epic sadface: Username is required')).toBeVisible();

});


test('CT06 - Login sem informar senha', async({ page }) => {

    await page.goto('https://www.saucedemo.com/'); 

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByRole('button', {name: 'Login'}).click();

    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.getByText('Epic sadface: Password is required')).toBeVisible();

});


test('CT07 - Login sem informar usuário e senha', async({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.getByRole('button', {name: 'Login'}).click();

    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.getByText('Epic sadface: Username is required')).toBeVisible();

});