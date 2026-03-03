import { expect } from '@playwright/test';
export class CheckoutCompletePage {
    constructor(page) {
        this.page = page;
        this.successMessage = page.locator('.complete-header');

    }

    async verifyOrderSuccess() {
        await expect(this.successMessage).toHaveText('Thank you for your order!');
    }
}