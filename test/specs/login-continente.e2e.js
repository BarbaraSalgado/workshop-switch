const ContinenteHomePage = require('../pageobjects/continente.home.page');

describe('when trying to login in with invalid credentials', () => {
    it('the login should fail', () => {
        // url to our website (continente)
        const continenteUrl = 'https://www.continente.pt/';

        // fake credentials to use on our website
        const username = 'blip';
        const password = '12345';

        // continente failed login expected error message
        const expectedErrorMessage = "Estimado(a) Cliente\n" +
            "De momento não é possivel efetuar a operação pretendida.\n" +
            "Por favor tente mais tarde."

        // accessing continente's site
        browser.url(continenteUrl);

        // logging in with fake credentials
        ContinenteHomePage.login(username, password);


        // waiting for the popup to show up before starting our assertions - really important step!
        browser.waitUntil(
            () => ContinenteHomePage.loginErrorMessage.isDisplayed() === true,
            {
                timeout: 10000,
                timeoutMsg: 'Timed out. Expected login error message to be displayed.'
            }
        );

        // finishing with our assertion
        expect(ContinenteHomePage.loginErrorMessage.getText()).toBe(expectedErrorMessage);

    });
});