import { Browser, BrowserContext, Page, chromium } from '@playwright/test';
import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';

export class CustomWorld {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  constructor(options: IWorldOptions) {
    // Puedes guardar info del escenario si la necesitas con:
    // this.parameters = options.parameters;
  }

  async init() {
    this.browser = await chromium.launch({ headless: false }); // pon true si no quieres ver el navegador
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async close() {
    await this.page?.close();
    await this.context?.close();
    await this.browser?.close();
  }
}

setWorldConstructor(CustomWorld);