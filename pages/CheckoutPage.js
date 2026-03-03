import { users } from '../test-data/users';
import { expect } from '@playwright/test';

export class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postalCode = page.locator('#postal-code');
        this.continueButton = page.locator('[data-test="continue"]');
        this.finishButton = page.locator('[data-test="finish"]');
    }

    /**
     * Fill input field with value
     * @param {Locator} locator - The input field locator
     * @param {string} value - The value to fill
     */
    async fillInput(locator, value) {
        await locator.fill(value);
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
     * Fill all checkout form fields
     */
    async fillInfo() {
        await this.fillInput(this.firstName, users.shippingInfo.firstName);
        await this.fillInput(this.lastName, users.shippingInfo.lastName);
        await this.fillInput(this.postalCode, users.shippingInfo.postalcode);
        await this.clickElement(this.continueButton);
    }

    /**
     * Verify finish button and complete checkout
     */
    async finishCheckout() {
        await this.verifyElementVisible(this.finishButton);
        await this.clickElement(this.finishButton);
    }

    /**
     * Fill specific field with custom value
     * @param {Locator} locator - The input field locator
     * @param {string} value - The value to fill
     */
    async fillCustomInfo(locator, value) {
        await this.fillInput(locator, value);
    }
}