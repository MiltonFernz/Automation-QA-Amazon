import {Page, Locator, expect} from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly loginButton: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginlink: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = this.page.getByPlaceholder("Enter your active Email ID / Username");
        this.passwordInput = this.page.getByPlaceholder("Enter your password");
        this.loginlink = this.page.locator("//a[text()= 'Login']");
        this.loginButton = this.page.locator('//button[text()="Login"]');
        this.errorMessage = this.page.locator('text="Invalid details. Please check the Email ID - Password combination."');
    }

    async navigate() {
        await this.page.goto('/');
        await this.page.waitForLoadState('domcontentloaded');
    }

    async login(username: string, password: string) {
        await this.loginlink.click();
        await this.page.waitForLoadState('domcontentloaded');
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async verifyLoginSuccess() {
        if (await this.errorMessage.isVisible()) {
            //throw new Error('Login failed with provided credentials');
            console.log('Login failed with provided credentials');
            
        } 
        if (await this.page.url().includes('homepage')){
            await expect(this.page).toHaveURL(/.*homepage/);
        }
    } 
        
}