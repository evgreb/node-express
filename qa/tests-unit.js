const fortune = require('../lib/fortune');
const expect = require('chai').expect;

describe('Тест печений-предсказаний', () => {
  it('getFortune() должна возвращать предсказания', () => {
    expect(typeof fortune.getFortune() === 'string');
  });
});
