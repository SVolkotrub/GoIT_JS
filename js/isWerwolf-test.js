/* function isWerewolf(target) {
  let direct = '';
let reversed = '';
  
  for (let letter of target.toLowerCase()) {
    if (letter.toLowerCase() !== letter.toUpperCase()) {
        direct += letter;
        
      }
     
}

  for(let i = direct.length - 1; i >= 0; i -= 1) {
      reversed += direct.charAt(i);
 }
 return direct === reversed;
} */
describe(`Function 'isWerewolf'`, () => {
  let isWerewolf;

  before(() => {
    isWerewolf = require('./isWerewolf').isWerewolf;
  });

  it(`should be declared`, () => {
    expect(isWerewolf)
      .toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isWerewolf('rotator'))
      .toBe('boolean');
  });

  it(`should return 'true' when input is 'rotator'`, () => {
    expect(isWerewolf('rotator'))
      .toBe(true);
  });

  it(`should return 'true' when input is 'red rum sir is murder'`, () => {
    expect(isWerewolf('red rum sir is murder'))
      .toBe(true);
  });

  it(`should return 'false' when input is 'home'`, () => {
    expect(isWerewolf('home'))
      .toBe(false);
  });

  it(`should return 'false' when input is 'Mate academy'`, () => {
    expect(isWerewolf('Mate academy'))
      .toBe(false);
  });

  it(`should return 'true' when input is 'eva can i see bees in a cave'`, () => {
    expect(isWerewolf('eva can i see bees in a cave'))
      .toBe(true);
  });

  it(`should return 'true' when input is 'no lemon, no melon'`, () => {
    expect(isWerewolf('no lemon, no melon'))
      .toBe(true);
  });

  it(`should return 'true' when input is 'I did, did I'`, () => {
    expect(isWerewolf('I did, did I'))
      .toBe(true);
  });

  it(`should return 'true' when input is 'f'`, () => {
    expect(isWerewolf('f'))
      .toBe(true);
  });

  it(`should return 'true' when input is 'ff'`, () => {
    expect(isWerewolf('ff'))
      .toBe(true);
  });

  it(`should return 'false' when input is 'FO'`, () => {
    expect(isWerewolf('FO'))
      .toBe(false);
  });

  it(`should return 'true' when input is 'Pop'`, () => {
    expect(isWerewolf('Pop'))
      .toBe(true);
  });

  it(`should return 'true' when input is 'Was it a rat I saw?'`, () => {
    expect(isWerewolf('Was it a rat I saw?'))
      .toBe(true);
  });
});

