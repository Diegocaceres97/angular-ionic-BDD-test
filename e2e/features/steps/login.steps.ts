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