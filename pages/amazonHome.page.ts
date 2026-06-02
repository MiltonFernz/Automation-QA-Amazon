import { Page, Locator, expect } from '@playwright/test';

export class AmazonHomePage {
    readonly page: Page;
    readonly allCategoriesMenuButton: Locator;
    readonly newReleasesLink: Locator;
    readonly productLink: Locator;
    readonly priceLink: Locator;
    readonly addToCartButton: Locator;
    readonly cartLink: Locator;
    readonly productTitle: Locator;
    readonly cartProductTitle: Locator;
    selectedProductTitle: string = '';


    constructor(page: Page) {
        this.page = page;
        this.allCategoriesMenuButton = page.getByRole('button', { name: 'Open All Categories Menu' });
        this.newReleasesLink = page.getByRole('link', { name: 'New Releases' });
        this.productLink = page.locator('a.a-link-normal.aok-block').first();
        this.priceLink = page.getByText('299', { exact: true });
        this.productTitle = page.locator("//span[@id='productTitle']");
        this.addToCartButton = page.getByRole('button', { name: 'Add to cart', exact: true });
        this.cartLink = page.locator('#nav-cart');
        this.cartProductTitle = page.locator("(//div[@class='sc-list-item-content']//span[@class='a-truncate-full a-offscreen'])").first();
    }
    async clickAllMenu() {

        await this.allCategoriesMenuButton.click();
    }
    async clickNewReleases() {
        await this.newReleasesLink.click();
    }

    async clickFirstProduct() {
        await this.productLink.click();
    }

    async addFirstProductToCart() {
        this.selectedProductTitle = (await this.productTitle.textContent())?.trim() || '';
        await this.addToCartButton.click();
        
    }
    async navigateToCart() {
        await this.page.waitForLoadState('domcontentloaded');
        await this.cartLink.click();
        await expect(this.cartProductTitle).toContainText(this.selectedProductTitle);
        

    }
}
