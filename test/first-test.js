import { Selector } from 'testcafe';

fixture('Load a static page')
    .page('qa-sortable-challenge-my/src/index.html');

test('static page test', async (t) => {
    const title = Selector('title');

    await t
        .takeScreenshot()
        .expect(title.withText('Example').exists).ok();
});
