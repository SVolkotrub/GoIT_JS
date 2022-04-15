/* function getSuccessRate(statistic) {
  let number = Number(statistic.length);
  let count = 0;
  for (let ones of statistic){
    if (ones === '1'){
      count += 1;
    }
  } 
  let percent = 0;

if (number !== 0) {
  percent = Math.round((count / number) * 100)
} else { percent = 0;}
return percent;
}*/
describe(`Function 'getSuccessRate'`, () => {
  let getSuccessRate;

  before(() => {
    getSuccessRate = require('./getSuccessRate').getSuccessRate;
  });

  it(`should be declared`, () => {
    expect(getSuccessRate)
      .toBeInstanceOf(Function);
  });

  it(`should return a number`, () => {
    expect(typeof getSuccessRate('11100'))
      .toBe('number');
  });

  it(`should return 60 when input is 11100`, () => {
    expect(getSuccessRate('11100'))
      .toBe(60);
  });

  it(`should return 50 when input is 1100`, () => {
    expect(getSuccessRate('1100'))
      .toBe(50);
  });

  it(`should return 0 when input is 000000`, () => {
    expect(getSuccessRate('000000'))
      .toBe(0);
  });

  it(`should return 100 when input is 111111`, () => {
    expect(getSuccessRate('111111'))
      .toBe(100);
  });

  it(`should return 81 when input is 1011110111101110111011101111011111101111111`, () => {
    expect(getSuccessRate('1011110111101110111011101111011111101111111'))
      .toBe(81);
  });

  it(`should return 98 when input is 1111111111111110111111111111111111111111111`, () => {
    expect(getSuccessRate('1111111111111110111111111111111111111111111'))
      .toBe(98);
  });

  it(`should return 49 when input is 1010101010101010101001010010101111000010101`, () => {
    expect(getSuccessRate('1010101010101010101001010010101111000010101'))
      .toBe(49);
  });

  it(`should return 0 when input is empty`, () => {
    expect(getSuccessRate(''))
      .toBe(0);
  });

  it(`should return 0 when input is 0`, () => {
    expect(getSuccessRate('0'))
      .toBe(0);
  });

  it(`should return 100 when input is 1`, () => {
    expect(getSuccessRate('1'))
      .toBe(100);
  });
});
