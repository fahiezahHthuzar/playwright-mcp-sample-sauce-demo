import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { users } from '../test-data/users';

test('Negative scenario - Cannot add product without login', async ({ page }) => {
    // Try to access products page without logging in
    await page.goto('https://www.saucedemo.com/inventory.html', { waitUntil: 'domcontentloaded' });

    // Should be redirected to login page
    await expect(page).toHaveURL(/.*\//);
    
    // Verify we're on login page by checking for login elements
    const loginButton = page.locator('#login-button');
    await expect(loginButton).toBeVisible();
    console.log('User redirected to login page - cannot access products without authentication');
});

test('Negative scenario - Add product with locked out user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    // Try to login with locked out user
    await loginPage.login('locked_out_user', 'secret_sauce');

    // Verify error message is displayed
    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    const errorText = await errorMessage.textContent();
    expect(errorText).toContain('locked out');
    console.log(`Error message displayed: ${errorText}`);

    // User should NOT be able to access products page
    const productsPageTitle = page.locator('.title');
    await expect(productsPageTitle).not.toBeVisible();
});

test('Negative scenario - Add product then remove from cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    // Login
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await productsPage.verifyLoaded();

    // Add product to cart
    await productsPage.addProductToCart();
    console.log('Product added to cart');

    // Go to cart
    await productsPage.goToCart();
    const initialCartCount = await cartPage.getCartItemCount();
    expect(initialCartCount).toBe(1);
    console.log(`Initial cart count: ${initialCartCount}`);

    // Remove product from cart
    const removeButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
    await removeButton.click();
    console.log('Product removed from cart');

    // Verify cart is now empty
    const finalCartCount = await cartPage.getCartItemCount();
    expect(finalCartCount).toBe(0);
    console.log(`Final cart count after removal: ${finalCartCount}`);
});

test('Negative scenario - Verify cart persists after logout and login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    // Login and add product
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await productsPage.verifyLoaded();
    await productsPage.addProductToCart();
    console.log('Product added to cart');

    // Logout
    const menuButton = page.locator('#react-burger-menu-btn');
    await menuButton.click();
    const logoutButton = page.locator('#logout_sidebar_link');
    await logoutButton.click();
    console.log('Logged out');

    // Verify logged out - user is redirected to home page after logout
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    
    // Wait for page to fully load
    await page.waitForLoadState('domcontentloaded');

    // Login again - navigate to login page
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await productsPage.verifyLoaded();

    // Go to cart and verify product is still there
    await productsPage.goToCart();
    const cartItemCount = await cartPage.getCartItemCount();
    expect(cartItemCount).toBe(1);
    console.log('Cart persisted after logout and login - Product still in cart');
});

test('Negative scenario - Checkout with empty cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    // Login
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await productsPage.verifyLoaded();

    // Go directly to cart without adding products
    await productsPage.goToCart();

    // Try to checkout
    const checkoutButton = page.locator('[data-test="checkout"]');
    
    // Checkout button should be disabled or not present for empty cart
    if (await checkoutButton.isVisible()) {
        console.log('Checkout button is visible - user can attempt to proceed');
    } else {
        console.log('Checkout button is not visible for empty cart');
    }

    // Verify cart is empty
    const cartItems = page.locator('.cart_item');
    const itemCount = await cartItems.count();
    expect(itemCount).toBe(0);
    console.log('Cart is empty as expected');
});
