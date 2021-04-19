class LoginPage {

    /**
     * Gets the e-mail field on the login page
     */
    get inputEmail () { return $('#email') }

    /**
     * Gets the password field on the login page
     */
    get inputPassword () { return $('#passwd') }

    /**
     * Gets the submit button on the login page
     */
    get btnSubmit () { return $('#SubmitLogin') }

    /**
     * Logs a user in with the given credentials
     * 
     * @param username The username to insert
     * @param password The password to insert
     */
    login (username, password) {
        this.inputEmail.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click();
    }
}

module.exports = new LoginPage();
