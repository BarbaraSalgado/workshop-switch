class ContinenteHomePage {

    // Search

    /**
     * Gets the search box element of the home page
     */
    get searchBox () { return $('#globalSearch') }

    /**
     * Gets the search button element of the home page
     */
    get searchBtn () { return $('#searchButton') }


    // Log In

    /**
     * Gets the username field on the login area
     */
    get loginUsername () { return $('.loginFormArea .userNameArea #username') }

    /**
     * Gets the password field on the login area
     */
    get loginPassword () { return $('.loginFormArea .passwordArea  #password') }

    /**
     * Gets the login button on the login area
     */
    get loginBtn () { return $('#btnLogin') }

    /**
     * Gets the login error message popup element
     */
    get loginErrorMessage () { return $('#ErrorMessage') }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    login (username, password) {
        this.loginUsername.setValue(username);
        this.loginPassword.setValue(password);
        this.loginBtn.click();
    }
}

module.exports = new ContinenteHomePage();
