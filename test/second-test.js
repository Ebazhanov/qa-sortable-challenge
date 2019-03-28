import { ClientFunction } from 'testcafe';
import { Selector } from 'testcafe';

fixture('LandingPage').page('localhost:3000');

test('first test', async (browser) => {
    ///console.log("Browser  ", browser);
    const PageUrl = ClientFunction(() => window.location.href);
    //console.log(PageUrl);
    await browser.click('#app');
    await browser.click(Selector("#app"));
    await browser.expect(PageUrl());
});
