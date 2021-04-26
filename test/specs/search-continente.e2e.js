const ContinenteHomePage = require('../pageobjects/continente.home.page');
const ContinenteSearchPage = require('../pageobjects/continente.search.page');

// warning - this test is incomplete, it should fail.

describe('when searching for an unavailable item', () => {
    it('should not return any results', () => {

        // continente url
        const continenteUrl = 'https://www.continente.pt/';

        // access continente url


        // wait for an element of the page to be displayed before starting any other actions
        browser.waitUntil(
            () => ContinenteHomePage.searchBox.isDisplayed(),
            {
                timeout: 10000,
                timeoutMsg: 'Timed out. Expected search box to be displayed.'
            }
        );


        // using the searchBox locator from the ContinenteHomePage page object, type "very unavailable item" on it

        // using the searchBtn locator from the ContinenteHomePage page object, click on it

        // pause the execution for 5 seconds to wait for the page to reload


        // finish the test - assert that there are no search results for this query.
       expect(ContinenteSearchPage.searchResults.getText()).toBe("A pesquisa pelo termo very unavailable item não retornou resultados.")
    });
});