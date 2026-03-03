E2E Scenario (Sauce Demo)

Flow
1️⃣ Login
2️⃣ View products
3️⃣ Add product to cart
4️⃣ Checkout
5️⃣ Verify order success

App
https://www.saucedemo.com/

📁 Final Project Structure (Clean & Professional)
playwright-saucedemo/
├── pages/
│   ├── LoginPage.js
│   ├── ProductsPage.js
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   └── CheckoutCompletePage.js
├── tests/
│   └── saucedemo.e2e.spec.js
├── test-data/
│   └── users.js
├── playwright.config.js
├── mcp.json
└── package.json