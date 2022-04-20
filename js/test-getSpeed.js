describe(`Function 'getSpeedStatistic'`, () => {
  let getSpeedStatistic;

  before(() => {
    getSpeedStatistic = require('./getSpeedStatistic').getSpeedStatistic;
  });

  it(`should be declared`, () => {
    expect(getSpeedStatistic)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getSpeedStatistic([10]))
      .toBeInstanceOf(Array);
  });

  it(`should return [8, 12, 10] when input is [10, 10, 11, 9, 12, 8]`, () => {
    expect(getSpeedStatistic([10, 10, 11, 9, 12, 8]))
      .toEqual([8, 12, 10]);
  });

  it(`should return [10, 10, 10] when input is [10]`, () => {
    expect(getSpeedStatistic([10]))
      .toEqual([10, 10, 10]);
  });

  it(`should return [0, 0, 0] when input is empty array`, () => {
    expect(getSpeedStatistic([]))
      .toEqual([0, 0, 0]);
  });

  it(`should return [8, 9, 8] when input is [8, 9, 9, 9]`, () => {
    expect(getSpeedStatistic([8, 9, 9, 9]))
      .toEqual([8, 9, 8]);
  });

  it(`should return [0, 8, 3] when input is [5, 0, 8, 1]`, () => {
    expect(getSpeedStatistic([5, 0, 8, 1]))
      .toEqual([0, 8, 3]);
  });

  it(`should return [1, 18, 4] when input is [1, 2, 2, 3, 3, 3, 3, 18]`, () => {
    expect(getSpeedStatistic([1, 2, 2, 3, 3, 3, 3, 18]))
      .toEqual([1, 18, 4]);
  });

  it(`should return [1, 9.2, 5] when input is [4.5, 6.7, 9.2, 1]`, () => {
    expect(getSpeedStatistic([4.5, 6.7, 9.2, 1]))
      .toEqual([1, 9.2, 5]);
  });
});
