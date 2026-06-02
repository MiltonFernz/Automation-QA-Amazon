import { Page, Locator, expect } from '@playwright/test';

export class AmazonLoginPage {
  readonly page: Page;
  readonly accountNav: Locator;
  readonly navLine1: Locator;
  readonly emailInput: Locator;
  readonly continueButton: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly authError: Locator;

  constructor(page: Page) {
    this.page = page;
    this.accountNav = page.locator('#nav-link-accountList');
    this.navLine1 = page.locator('#nav-link-accountList-nav-line-1');
    this.emailInput = page.locator('#ap_email_login');
    this.continueButton = page.locator('#continue');
    this.passwordInput = page.locator('#ap_password');
    this.submitButton = page.locator('#signInSubmit');
    this.authError = page.locator('#auth-error-message-box, .a-alert-content');
  }

  async navigate() {
    await this.page.goto('https://www.amazon.in');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async openSignIn() {
    await this.accountNav.click();
    await this.page.waitForSelector('#ap_email, input[name="email"]', { timeout: 10000 });
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.continueButton.click();
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async verifyLoginSuccess() {
    await this.page.waitForLoadState('domcontentloaded');
    await expect(this.navLine1).not.toHaveText(/Sign in/i);
  }

  async verifyLoginError() {
    await expect(this.authError).toBeVisible({ timeout: 10000 });
  }
}
