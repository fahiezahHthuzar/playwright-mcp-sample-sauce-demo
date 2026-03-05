# Playwright Automation Framework - Sauce Demo

A comprehensive end-to-end testing framework built with **Playwright** and **JavaScript** using the **Page Object Model (POM)** design pattern. This project demonstrates professional automation testing practices with CI/CD integration.

## 🎯 Project Overview

This is a **Playwright MCP-enabled** automation testing project for the Sauce Demo e-commerce application. It includes:
- ✅ Complete E2E test scenarios
- ✅ Negative test scenarios
- ✅ Page Object Model architecture
- ✅ GitHub Actions CI/CD integration
- ✅ Data-driven testing
- ✅ Comprehensive test reporting

## 🌐 Application Under Test
**Sauce Demo:** https://www.saucedemo.com/

## 📋 Test Scenarios

### ✅ Positive Scenarios
1. **Complete Checkout Flow** (`saucedemo.e2e.spec.js`)
   - Login → View Products → Add Product → Checkout → Verify Order Success

2. **Add Multiple Products to Cart** (`addMultipleProducts.spec.js`)
   - Login → Add Multiple Products → Verify Cart Count

### ❌ Negative Scenarios (`addProductNegative.spec.js`)
1. Cannot add product without login
2. Add product with locked-out user
3. Add product then remove from cart
4. Cart persists after logout and login
5. Checkout with empty cart

### 🔓 Login Validation (`invalidLogin.spec.js`)
- Login fails with invalid credentials
- Verify error messages displayed

## 📁 Project Structure

```
playwright-mcp-sample-demo/
├── pages/                          # Page Object Model classes
│   ├── LoginPage.js               # Login page interactions
│   ├── ProductsPage.js            # Products page interactions
│   ├── CartPage.js                # Cart page interactions
│   ├── CheckoutPage.js            # Checkout form interactions
│   └── CheckoutCompletePage.js    # Order confirmation page
├── tests/                          # Test files
│   ├── saucedemo.e2e.spec.js      # Complete E2E flow
│   ├── addMultipleProducts.spec.js # Multiple products test
│   ├── addProductNegative.spec.js  # Negative scenarios
│   ├── invalidLogin.spec.js        # Login validation
│   └── example.spec.js            # Sample test
├── test-data/
│   └── users.js                   # Test user credentials
├── playwright-report/              # Test reports (generated)
├── .github/
│   └── workflows/
│       └── playwright.yml         # GitHub Actions CI/CD
├── playwright.config.js           # Playwright configuration
├── mcp.json                       # MCP server configuration
├── package.json                   # Dependencies & scripts
└── readme.md                      # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd playwright-mcp-sample-demo

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

## 📝 Running Tests

### Run All Tests
```bash
npm test
```

### Run Tests in Debug Mode
```bash
npm run test:debug
```

### Run Tests with Visible Browser
```bash
npm run test:headed
```

### Run Tests with Interactive UI
```bash
npm run test:ui
```

### View Test Report
```bash
npm run test:report
```

### Run Specific Test
```bash
npx playwright test tests/saucedemo.e2e.spec.js
```

### Run Tests in Parallel
```bash
npx playwright test --workers=4
```

## 🔧 Configuration

### Test Users (in `test-data/users.js`)
- **Standard User:** `standard_user` / `secret_sauce`
- **Invalid User:** `wrongUser` / `wrongPassword`
- **Locked Out User:** `locked_out_user` / `secret_sauce`

### Shipping Info
- First Name: `standard`
- Last Name: `user`
- Postal Code: `45343`

## 🏗️ Page Object Model Structure

Each page class includes:
- **Locators** - Reusable element selectors
- **Helper Methods** - Reusable interaction functions
  - `fillInput(locator, value)` - Fill input fields
  - `clickElement(locator)` - Click elements
  - `verifyElementVisible(locator)` - Assert visibility
  - `getTextContent(locator)` - Extract element text

### Example: LoginPage
```javascript
async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
}
```

## 🔄 CI/CD Integration

### GitHub Actions Workflow (`.github/workflows/playwright.yml`)
Automatically runs tests on:
- ✅ Push to `main` or `master` branches
- ✅ Pull requests to `main` or `master` branches

**Workflow Steps:**
1. Checkout code
2. Setup Node.js (LTS)
3. Install dependencies
4. Install Playwright browsers
5. Run Playwright tests
6. Upload test reports as artifacts

### View CI Results
1. Go to your GitHub repository
2. Click the **Actions** tab
3. Click on a workflow run to see detailed logs
4. Download test reports from artifacts

## 🛠️ Key Technologies

| Technology | Purpose |
|-----------|---------|
| **Playwright** | Browser automation & testing |
| **JavaScript** | Test scripting language |
| **Node.js** | Runtime environment |
| **GitHub Actions** | CI/CD automation |
| **Playwright MCP** | AI-assisted test generation |

## 📊 Best Practices Implemented

✅ **Page Object Model (POM)** - Maintainable and reusable test code  
✅ **Test Data Separation** - External test data management  
✅ **Async/Await** - Proper asynchronous test handling  
✅ **Soft Assertions** - Multiple assertions per test  
✅ **Error Handling** - Graceful error management  
✅ **Logging** - Console logs for test flow visibility  
✅ **CI/CD Integration** - Automated test execution  
✅ **Git Workflow** - Branch-based development  

## 🔗 Git Workflow

### Create a New Feature Branch
```bash
git checkout -b dev
```

### Make Changes and Commit
```bash
git add .
git commit -m "Add new test scenario"
```

### Push to Remote
```bash
git push -u origin dev
```

### Create Pull Request
1. Go to GitHub repository
2. Click "Create Pull Request"
3. CI/CD will automatically run tests
4. Merge after tests pass

## 📈 Playwright MCP Integration

This project uses **Playwright Model Context Protocol (MCP)** for AI-assisted development:

```bash
# Run MCP server manually
npx @playwright/mcp
```

The MCP server is configured in `mcp.json` and enables:
- AI-powered test generation
- Intelligent test refactoring
- Context-aware code suggestions

## 🤝 Contributing

1. Create a feature branch
2. Write tests following existing patterns
3. Ensure all tests pass locally
4. Create a pull request
5. Merge after CI/CD validation

## 📚 Learning Resources

- [Playwright Documentation](https://playwright.dev)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [JavaScript Async/Await](https://javascript.info/async-await)
- [Page Object Model Pattern](https://playwright.dev/docs/pom)



This project demonstrates:
- ✅ Strong JavaScript/Async-Await knowledge
- ✅ Page Object Model expertise
- ✅ E2E testing best practices
- ✅ CI/CD integration experience
- ✅ Git workflow proficiency
- ✅ Test automation architecture skills
- ✅ Negative/edge case testing
- ✅ Professional code organization

## 📞 Support

For questions or issues, refer to:
- [Playwright Docs](https://playwright.dev)
- [GitHub Issues](./issues)

---

**Created:** March 2026  
**Framework:** Playwright with JavaScript  
**Status:** Active Development ✅