import { test,expect } from '@playwright/test';
import { AmazonLoginPage } from '../pages/amazonLogin.page';
import { AmazonHomePage } from '../pages/amazonHome.page';
import {loginData} from '../test-data/AmazonData';


test.describe('Amazon Login', () => {
test.beforeEach(async ({ page }) => {
    const loginPage = new AmazonLoginPage(page);

    await loginPage.navigate();
    await loginPage.openSignIn();
    await loginPage.login(loginData.user, loginData.pass);
});

	test('valid login', async ({ page }) => {
		// test.skip(!user || !pass, 'Set AMAZON_USER and AMAZON_PASS env vars to run this test');
		const loginPage = new AmazonLoginPage(page);
		// await loginPage.navigate();
		// await loginPage.openSignIn();
		// await loginPage.login(loginData.user, loginData.pass);
		await loginPage.verifyLoginSuccess();
	});

	test.skip('invalid login shows error', async ({ page }) => {
		const loginPage = new AmazonLoginPage(page);
		await loginPage.navigate();
		await loginPage.openSignIn();
		await loginPage.login(loginData.user, loginData.pass);
		await loginPage.verifyLoginError();
	});

	test.only('Add first product to cart', async ({ page }) => {
		const amazonHomePage = new AmazonHomePage(page);
		await amazonHomePage.clickAllMenu();
		await amazonHomePage.clickNewReleases();
		await amazonHomePage.clickFirstProduct();
		await amazonHomePage.addFirstProductToCart();
		
		await amazonHomePage.navigateToCart();
		
	});
});
