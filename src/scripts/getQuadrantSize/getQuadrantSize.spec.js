import getQuadrantSize from './getQuadrantSize';

describe('getQuadrantSize', () => {
  describe('when provided no size param', () => {
    it('returns the minimum', () => {
      expect(getQuadrantSize()).toEqual(0);
    });
  });

  describe('when provided a size param of 3', () => {
    it('returns a size of 1', () => {
      expect(getQuadrantSize(3)).toEqual(1);
    });
  });

  describe('when provided a size param of 5', () => {
    it('returns a size of 2', () => {
      expect(getQuadrantSize(5)).toEqual(2);
    });
  });

  describe('when provided a size param of 7', () => {
    it('returns a size of 3', () => {
      expect(getQuadrantSize(7)).toEqual(3);
    });
  });

  describe('when provided a size param of 55', () => {
    it('returns a size of ?', () => {
      expect(getQuadrantSize(55)).toEqual(27);
    });
  });
});
