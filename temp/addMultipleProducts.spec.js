import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { users } from '../test-data/users';

test('Add multiple products to cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    // Login
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);

    // Verify products page loaded
    await productsPage.verifyLoaded();

    // Add first product to cart
    await productsPage.addProductToCart();
    console.log('First product added to cart');

    // Go back to products page to add another product
    await productsPage.goToCart();
    await cartPage.continueShopping();

    // Add second product to cart
    // Click on another product (e.g., Bike Light)
    const bikeLightLink = page.locator('[data-test="item-0-img-link"]');
    await bikeLightLink.click();
    
    const addToCartButton = page.locator('#add-to-cart');
    await addToCartButton.click();
    console.log('Second product added to cart');

    // Navigate to cart and verify both items
    await productsPage.goToCart();

    // Verify items in cart
    const cartItemCount = await cartPage.getCartItemCount();
    expect(cartItemCount).toBe(2);
    console.log(`Total items in cart: ${cartItemCount}`);

    // Close browser
    await page.context().close();
});
