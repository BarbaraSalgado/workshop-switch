const AccountPage = require('../pageobjects/account.page');
const LoginPage = require('../pageobjects/login.page');

describe('Login', () => {
    it('should login with valid credentials', () => {
        browser.url('http://automationpractice.com/index.php?controller=authentication&back=my-account');

        LoginPage.login('bliptest78@gmail.com', 'Blip123!!');

        browser.waitUntil(
            () => AccountPage.title.getText() === 'MY ACCOUNT',
            {
                timeout: 10000,
                timeoutMsg: 'Timed out. Expected my account text to be displayed.'
            }
        );
    });
});