const HomePage = require('../pageobjects/home.page');
const SearchPage = require('../pageobjects/search.page');

describe('Search', () => {
    it('should not return any results when searching for bananas', () => {
        browser.url('http://automationpractice.com/index.php');

        browser.waitUntil(
            () => HomePage.searchBox.isDisplayed(),
            {
                timeout: 10000,
                timeoutMsg: 'Timed out. Expected search box to be displayed.'
            }
        );

        HomePage.searchBox.setValue("bananas");

        HomePage.searchBtn.click();

        browser.pause(5000);

        // Please note that the validations below will fail at first, this is part of our workshop :)

        expect(SearchPage.numberOfResultsLabel.getText()).toBe("0 results have been found.");
        expect(SearchPage.noResultsLabel.getText()).toBe("No results were found for your search \"bananas\"");
    });
});