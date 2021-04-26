class HomePage {
    get searchBox () { return $('#search_query_top') }
    get searchBtn () { return $('.button-search') }
    get loginBtn () { return $('.button-search') }
}

module.exports = new HomePage();
