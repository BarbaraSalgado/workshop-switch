class SearchPage {
    /**
     * Gets the label with the number of results for a search
     */
    get numberOfResultsLabel () { return $('your-locator-here') }

    /**
     * Gets the label that is displayed when there are no results for a search
     */
    get noResultsLabel () { return $('another-locator-here') }
}

module.exports = new SearchPage();
