import {Page, Locator, expect} from '@playwright/test';
import { AmazonHomePage } from './amazonHome.page';
import { AmazonLoginPage } from './amazonLogin.page';

export class AmazonSearchPage extends AmazonLoginPage {
    
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly searchResults: Locator;
    readonly firstProductName: Locator;

    constructor(page: Page) {
        super(page);
        this.searchInput = page.getByPlaceholder('Search Amazon.in');
        this.searchButton = page.locator('#nav-search-submit-button');
        this.searchResults = page.locator('.s-search-results');//
        this.firstProductName = page.locator('.a-size-medium.a-color-base').first();
    }

    async searchForProduct(productName: string) {
        await this.searchInput.fill(productName);
        await this.searchButton.click();
    }   

    async verifySearchResults() {
        await expect(this.searchResults).toBeVisible();
        await expect(this.firstProductName).toBeVisible();
    }   

    async getFirstProductName(): Promise<string> {
        return await this.firstProductName.textContent() || '';
    }   
}

    