
describe('CHECK SETUP', () => {
    it('should open google', () => {

        const googleUrl = 'https://www.google.com/';

        browser.url(googleUrl);

        const currentUrl = browser.getUrl();

        if (currentUrl == googleUrl) {
            console.log('/////////////////////////////////////// SET UP OK /////////////////////////////////////////////// ');
            console.log('/////////////////////////////////////// SET UP OK /////////////////////////////////////////////// ');
            console.log('/////////////////////////////////////// SET UP OK /////////////////////////////////////////////// ');
            console.log('/////////////////////////////////////// SET UP OK /////////////////////////////////////////////// ');
            console.log('/////////////////////////////////////// SET UP OK /////////////////////////////////////////////// ');
            console.log('/////////////////////////////////////// SET UP OK /////////////////////////////////////////////// ');
        }
        else {
            console.log('/////////////////////////////////////// CHECK YOUR INSTALLATION. GO TO READ.ME /////////////////////////////////////');
            console.log('/////////////////////////////////////// CHECK YOUR INSTALLATION. GO TO READ.ME /////////////////////////////////////');
            console.log('/////////////////////////////////////// CHECK YOUR INSTALLATION. GO TO READ.ME /////////////////////////////////////');
            console.log('/////////////////////////////////////// CHECK YOUR INSTALLATION. GO TO READ.ME /////////////////////////////////////');
            console.log('/////////////////////////////////////// CHECK YOUR INSTALLATION. GO TO READ.ME /////////////////////////////////////');
            console.log('/////////////////////////////////////// CHECK YOUR INSTALLATION. GO TO READ.ME /////////////////////////////////////');
        }
    });
});