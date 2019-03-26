import { ClientFunction } from 'testcafe';

fixture('LandingPage').page('http://localhost:3000/');

test('should allow clicking of the landing page button', async (browser) => {
    await browser.click('.btn');
    const PageUrl = ClientFunction(() => window.location.href);
    await browser.expect(PageUrl()).contains('/register');
});
