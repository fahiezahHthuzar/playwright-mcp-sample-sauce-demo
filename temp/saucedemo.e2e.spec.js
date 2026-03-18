import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage';
import { users } from '../test-data/users';

test('Sauce demo - Complete checkout flow', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const checkoutCompletePage = new CheckoutCompletePage(page);


    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);

    await productsPage.verifyLoaded();
    await productsPage.addProductToCart();
    await productsPage.goToCart()

    await cartPage.verifyItemAdded();
    await cartPage.checkout();

    await checkoutPage.fillInfo();
    await checkoutPage.finishCheckout();

    await checkoutCompletePage.verifyOrderSuccess();
    await page.context().close();

})