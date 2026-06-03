import { test, expect } from '@playwright/test';
import { AmazonSearchPage } from '../pages/amazonSearch.page';
import { amazonSearchData } from '../test-data/amazonSearchData';

test.describe('Amazon Search Functionality', () => {
    test('Search for a product and verify results', async ({ page }) => {
        const searchPage = new AmazonSearchPage(page);
        await searchPage.navigate();
        await searchPage.searchForProduct(amazonSearchData.productName);
        await searchPage.verifySearchResults();
        const firstProductName = await searchPage.getFirstProductName();
        console.log(`First product name: ${firstProductName}`);
        expect(firstProductName.toLowerCase()).toContain(amazonSearchData.productName);

    });
});