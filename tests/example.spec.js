// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('dialog validation', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  await page.locator('#confirmbtn').click();
  await page.on('dialog',dialog => dialog.accept());
  page.pause()
  await page.locator("#mousehover").hover();

  const framePage = page.frameLocator("#courses-iframe");
  await framePage.locator("li a[href*='lifetime-access']:visible").click();


});
