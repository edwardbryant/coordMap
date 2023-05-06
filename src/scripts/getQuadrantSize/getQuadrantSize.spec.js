import getQuadrantSize from './getQuadrantSize';

describe('getQuadrantSize', () => {
  describe('when provided no size param', () => {
    it('returns the minimum', () => {
      expect(getQuadrantSize()).toEqual(0);
    });
  });

  describe('when provided a size param of 7', () => {
    it('returns a size of 3', () => {
      expect(getQuadrantSize(7)).toEqual(3);
    });
  });
});
