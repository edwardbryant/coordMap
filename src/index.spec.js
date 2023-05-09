import coordMap from './index';

describe('coordMap', () => {
  describe('when 2d 7x7 grid is created via coordMap', () => {
    it('returns an array which allows access via x/y coordinates', () => {
      const myGrid = coordMap.create2d(7);
      const mockGridObj = { x: 2, y: 3 };
      expect(myGrid['2.3']).toEqual(mockGridObj);
    });
  });

  describe('when 2d 7x7 grid is created via coordMap', () => {
    it('returns an array which allows access via a negative y coordinate', () => {
      const myGrid = coordMap.create2d(7);
      const mockGridObj = { x: 2, y: -3 };
      expect(myGrid['2.-3']).toEqual(mockGridObj);
    });
  });

  describe('when 2d 7x7 grid is created via coordMap', () => {
    it('returns an array which allows access via a negative x coordinate', () => {
      const myGrid = coordMap.create2d(7);
      const mockGridObj = { x: -2, y: 3 };
      expect(myGrid['-2.3']).toEqual(mockGridObj);
    });
  });

  describe('when 2d 7x7 grid is created via coordMap', () => {
    it('returns an array which allows access via both negative x and y coordinates', () => {
      const myGrid = coordMap.create2d(7);
      const mockGridObj = { x: -2, y: -3 };
      expect(myGrid['-2.-3']).toEqual(mockGridObj);
    });
  });

  describe('when 2d 7x7 grid is created via coordMap', () => {
    it('returns undefined  when x or y coordinates are outside of grid', () => {
      const myGrid = coordMap.create2d(7);
      expect(myGrid['10.12']).toEqual(undefined);
    });
  });
});
