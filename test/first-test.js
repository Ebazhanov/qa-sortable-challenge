import { ClientFunction } from 'testcafe';
import { Selector } from 'testcafe';

fixture('LandingPage').page('../src/index.html');

test('first test', async (browser) => {
    ///console.log("Browser  ", browser);
    const PageUrl = ClientFunction(() => window.location.href);
    console.log(PageUrl);
    await browser.click('#app');
    await browser.click(Selector("#appo"));
    //await browser.expect(PageUrl());
});

test('second test', async (t) => {
    const h1 = Selector('button');

    await t
        .takeScreenshot()
        .expect(h1.withText('bazhanov').exists).ok();
});
