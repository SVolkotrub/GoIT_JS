describe(`Function 'makeAbbr'`, () => {
  let makeAbbr;
/*function makeAbbr(words) {
  let abbreviation = words.charAt(0);
  for (let i = 0; i < words.length; i +=1) {
    if (words.charAt(i) === ' '){
      abbreviation += words.charAt(i + 1);

    }
  }
  return abbreviation.toUpperCase();
}
*/
  before(() => {
    makeAbbr = require('./makeAbbr').makeAbbr;
  });

  it(`should be declared`, () => {
    expect(makeAbbr)
      .toBeInstanceOf(Function);
  });

  it(`should return a string`, () => {
    expect(typeof makeAbbr('central processing unit'))
      .toEqual('string');
  });

  it(`should return 'NASA' when input is 'national aeronautics space administration'`, () => {
    expect(makeAbbr('national aeronautics space administration'))
      .toBe('NASA');
  });

  it(`should return 'CPU' when input is 'central processing unit'`, () => {
    expect(makeAbbr('central processing unit'))
      .toBe('CPU');
  });

  it(`should return 'SMILES' when input is 'simplified molecular input line entry specification'`, () => {
    expect(makeAbbr('simplified molecular input line entry specification'))
      .toBe('SMILES');
  });

  it(`should return 'NATO' when input is 'north atlantic treaty organization'`, () => {
    expect(makeAbbr('north atlantic treaty organization'))
      .toBe('NATO');
  });

  it(`should return 'MA' when input is 'mate academy'`, () => {
    expect(makeAbbr('mate academy'))
      .toBe('MA');
  });

  it(`should return 'SVP' when input is 'SENIOR VICE PRESIDENT'`, () => {
    expect(makeAbbr('SENIOR VICE PRESIDENT'))
      .toBe('SVP');
  });

  it(`should return 'B' when input is 'bravo'`, () => {
    expect(makeAbbr('bravo'))
      .toBe('B');
  });
});
