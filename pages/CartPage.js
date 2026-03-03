import { expect } from '@playwright/test';

export class CartPage{
    constructor(page){
        this.page = page;
        this.cartItemName = page.locator('.inventory_item_name');
        this.cartItems = page.locator('.cart_item');
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
    }

    /**
     * Get text content from a locator
     * @param {Locator} locator - The locator to get text from
     * @returns {Promise<string>} The text content
     */
    async getTextContent(locator) {
        return await locator.textContent();
    }

    /**
     * Verify an element is visible
     * @param {Locator} locator - The locator to verify
     */
    async verifyElementVisible(locator) {
        await expect(locator).toBeVisible();
    }

    /**
     * Click an element
     * @param {Locator} locator - The locator to click
     */
    async clickElement(locator) {
        await locator.click();
    }

    /**
     * Get the count of items in cart
     * @returns {Promise<number>} Number of items in cart
     */
    async getCartItemCount() {
        return await this.cartItems.count();
    }

    /**
     * Verify item was added to cart and log the item name
     */
    async verifyItemAdded(){
        await this.verifyElementVisible(this.cartItemName);
        const itemName = await this.getTextContent(this.cartItemName);
        console.log(`added item name - ${itemName}`);
    }

    /**
     * Proceed to checkout
     */
    async checkout(){
        await this.clickElement(this.checkoutButton);
    }

    /**
     * Continue shopping
     */
    async continueShopping() {
        await this.clickElement(this.continueShoppingButton);
    }
}