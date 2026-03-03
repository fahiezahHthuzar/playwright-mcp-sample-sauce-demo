import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { users } from '../test-data/users';

test('Sauce demo - login fails with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.goto();
    // Use invalid credentials
    await loginPage.login(users.invalidUser.username,users.invalidUser.password );
   
    // assert login error
    await loginPage.verifyLoginError(users.loginError);
  

    // Assert products page is NOT loaded
    await expect(productsPage.pageTitle).not.toBeVisible();
});