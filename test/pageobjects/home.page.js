class HomePage {
    /**
     * Gets the search box on the homepage
     */
    get searchBox () { return $('#search_query_top') }

    /**
     * Gets the search button on the homepage
     */
    get searchBtn () { return $('.button-search') }
}

module.exports = new HomePage();
