class SearchPage {
    get numberOfResults () { return $('.heading-counter') }
    get noResultsLabel () { return $('.alert-warning') }
}

module.exports = new SearchPage();
