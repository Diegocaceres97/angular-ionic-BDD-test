# 🧪 Angular + Ionic + BDD E2E Testing Template

This project is a **template** for building end-to-end (E2E) tests using **BDD (Behavior-Driven Development)** with **Cucumber**, **Playwright**, and **TypeScript**. It's designed for applications built with Angular and Ionic.

---

## 🚀 Technologies Used

- **Cucumber** as the BDD engine for writing scenarios in natural language.
- **Playwright** for browser automation, allowing testing on multiple devices and modern browsers.
- **TypeScript + ts-node** to align with the Angular project's structure.
- **Custom World and Hooks configuration** to manage the test lifecycle.
- **Organized folder structure** (`features`, `steps`, `support`) for scalability and maintainability.
- **Functional scenarios** like successful or failed login, defined in `.feature` files.

---

## 📁 Project Structure
```text
e2e/
├── features/
│   ├── login.feature           # Gherkin-based scenarios
│   ├── steps/                  # Step definitions
│   │   └── login.steps.ts
│   └── support/
│       ├── hooks.ts           # Global test hooks (before, after)
│       └── custom-world.ts    # CustomWorld context for step sharing
```
---

## 🛠️ Installation

Install dependencies with:
npm install

---

## 🧪 Test Commands
```text
npm run test:e2e          # Run the E2E tests with Cucumber
```

---
## 📝 How to Write and Run Tests
1. Write a feature file in Gherkin syntax:
```text
Feature: Login

  Scenario: Successful login
    Given I am on the login screen
    When I enter the username "diego" and password "1234"
    Then I should be redirected to the home screen
```

2.	Create step definitions in .ts files that match the steps:
```text
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/custom-world';

Given('estoy en la pantalla de login', async function (this: CustomWorld) {
  await this.page.goto('http://localhost:4200/login'); // ajusta la URL según tu app
});

When('ingreso el usuario {string} y contraseña {string}', async function (username: string, password: string) {
  const userInput = this['page'].locator('ion-input[formControlName="username"] input');
  const passInput = this['page'].locator('ion-input[formControlName="password"] input');
  const loginButton = this['page'].locator('ion-button[type="submit"]');
  await this['page'].waitForURL('**/home');
});

Then('debo ser redirigido a la pantalla de inicio', async function (this: CustomWorld) {
  await this.page.waitForURL('**/home');
  expect(this.page.url()).toContain('/home');
});
```

3.	Ensure your Angular/Ionic app is running on the port expected in the test (default 8100).
   
---
## ✅ Tips and Recommendations
	- Use await page.waitForURL(...) to ensure navigation completes before the next step.
	- Use stable selectors like formControlName, data-testid, or custom IDs.
	- Structure your .feature, .steps.ts, and support files clearly by domain (e.g., login, dashboard).
	- Run tests in headless mode for CI/CD pipelines (npm run test:e2e:headless).
