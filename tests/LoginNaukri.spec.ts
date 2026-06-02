import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/login.page';
import {loginData} from '../test-data/loginData';   

test.describe('Naukri Login Tests', () => {
    let loginPage: LoginPage;   
    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate();
        await expect(page).toHaveTitle(/Naukri.com/);
    });

   // for (const data of loginData) {
        // test(`Login Test for ${loginData.username}`, async () => {

        //     await loginPage.login(loginData.username, loginData.password);
        //     await loginPage.verifyLoginSuccess();
        // });
  // }

  test('Login Test for valid credentials', async () => {
    const validData = loginData[0];
    await loginPage.login(validData.username, validData.password);
    await loginPage.verifyLoginSuccess();
  });

});
