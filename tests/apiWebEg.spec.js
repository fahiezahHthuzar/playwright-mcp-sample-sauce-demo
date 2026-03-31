import { test, expect, request } from '@playwright/test';
import { ApiUtils } from '../utils/apiUtils';

const loginPayload = { userEmail: "fahiezah21@gmail.com", userPassword: "tester@123" };// js object
const orderPayload = {orders:
    [{country:"Cuba", productOrderedId:"6960eac0c941646b7a8b3e68"}]};
let response;

test.beforeAll(async () => {

    const apiContext = await request.newContext();
    const apiUtils = new ApiUtils(apiContext, loginPayload);
    response = await apiUtils.createOrder(orderPayload);
  
})
// verify if order created is showing in history page
// precondition - create order -
test('API place the order', async ({ page }) => {

    page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, response.token); // recieve token for response obje

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();

    const rows = await page.locator("tbody tr");

    for(let i = 0; i<await rows.count(); i++){
        const rowOrderId = await rows.nth(i).locator("th").textContent();
        if(response.orderId.includes(rowOrderId) ){

            await rows.nth(i).locator("button").first().click();
            break;

        }
    }
    const orderIdDetails = await page.locator(".col-text").textContent();
    expect(response.orderId.includes(orderIdDetails)).toBeTruthy();


});