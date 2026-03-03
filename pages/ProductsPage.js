import { expect } from '@playwright/test';

export class ProductsPage{
    constructor(page){
        this.page = page;
        this.pageTitle = page.locator('.title');
        this.addBackpack = page.locator('[data-test="item-4-img-link"]');
        this.addToCart = page.locator('#add-to-cart')
        this.cartIcon = page.locator('.shopping_cart_link');

    }

    async verifyLoaded(){
        await expect.soft(this.pageTitle).toHaveText('Products');
        const actualTitle = await this.pageTitle.textContent();
        console.log(`actual - ${actualTitle}`)

    }

    async addProductToCart(){
        await this.addBackpack.click();
        await this.addToCart.click();
    }

    async goToCart(){
        await this.cartIcon.click();
    }
}