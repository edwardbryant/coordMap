import createGridObject from './createGridObject';

describe('createGridObject', () => {
  describe('when provided with no params', () => {
    it('returns an object with invalid x and y properties', () => {
      expect(createGridObject()).toEqual({ coords: { x: NaN, y: NaN } });
    });
  });

  describe('when provided with sample params', () => {
    it('returns an object with expected x and y properties', () => {
      expect(createGridObject(5, 5, 1, 1)).toEqual({ coords: { x: 6, y: 4 } });
      expect(createGridObject(-3, 5, 1, 5)).toEqual({ coords: { x: -2, y: 0 } });
      expect(createGridObject(2, -5, 1, 3)).toEqual({ coords: { x: 3, y: -8 } });
      expect(createGridObject(-6, -5, 1, 5)).toEqual({ coords: { x: -5, y: -10 } });
      expect(createGridObject(13, 15, 25, 25)).toEqual({ coords: { x: 38, y: -10 } });
    });
  });
});
