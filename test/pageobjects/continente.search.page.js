class ContinenteSearchPage {
    /**
     * Gets the magnifier (search icon) element from the search results page
     */
    get magnifyerIcon () { return $('.emptySugestionImg') }

    /**
     * Gets the label that is displayed when there are no results for a search
     */
    get searchResults () { return $('.wrong-locator-here') }
}

module.exports = new ContinenteSearchPage();
