const title = 'Meadowlark Travel';

describe('sample test', function () {
  let page;
  before(async function() {
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
  });

  after (async function () {
    await page.close();
  })

  it('should have the correct page title', async function () {
    const pTitle = await page.title()
    expect(pTitle).to.eql(title);
  });
});