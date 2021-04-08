class AccountPage {
    /**
     * Gets the title of the account page
     */
    get title () { return $('.page-heading') }
}

module.exports = new AccountPage();
