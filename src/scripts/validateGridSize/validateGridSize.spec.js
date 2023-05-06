import validateGridSize from './validateGridSize';

describe('validateGridSize', () => {
  describe('when provided no grid size, assume 0 and result in error', () => {
    xit('returns mininum size error', () => {
      // how do you test a 'throw new Error'?
      expect(validateGridSize()).toEqual();
    });
  });
});
