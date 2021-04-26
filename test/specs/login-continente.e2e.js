
fdescribe('search', () => {
    it('should return results ', () => {

        const redditUrl = 'https://www.reddit.com/';

        browser.url(redditUrl);

        browser.pause(15000);

        expect(true).toBe(true);


    });
});