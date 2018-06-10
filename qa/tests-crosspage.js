describe('Межстраничные тесты', async () => {
  let page;

  before(async () => {
    page = await browser.newPage();
  });

  after(async function() {
    await page.close();
  });

  it('Good River: Должно заполняться поле реферера', async function() {
    const referrer = 'http://localhost:3000/tours/good-river';
    await page.goto(referrer);
    await page.click('.requestGroupRate');
    const ref = await page.$eval('input[name=referrer]', (i) => i.value);
    expect(ref).to.eql(referrer);
  });

  it('Oregon Coast: Должно заполняться поле реферера', async function() {
    const referrer = 'http://localhost:3000/tours/oregon-coast';
    await page.goto(referrer);
    await page.click('.requestGroupRate');
    const ref = await page.$eval('input[name=referrer]', (i) => i.value);
    expect(ref).to.eql(referrer);
  });

  it('Поле реферера должно быть пустым', async function() {
    await page.goto('http://localhost:3000/tours/request-group-rate');
    const ref = await page.$eval('input[name=referrer]', (i) => i.value);
    expect(ref).to.eql('');
  });
});
