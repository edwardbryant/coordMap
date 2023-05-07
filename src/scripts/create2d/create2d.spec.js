import create2d from './create2d';

const mockArray3 = [
  [{ x: -1, y: 1 }, { x: 0, y: 1 }, { x: 1, y: 1 }],
  [{ x: -1, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 0 }],
  [{ x: -1, y: -1 }, { x: 0, y: -1 }, { x: 1, y: -1 }]
];

describe('create2d', () => {
  describe('when create2d is called with no size param (size defaults to 3)', () => {
    it('does NOT throw a validation error', () => {
      expect(() => create2d()).not.toThrow('Invalid grid size value: size must be 3 or greater.');
    });
  });

  describe('when create2d is called with a size param of 3', () => {
    it('returns an expected grid array', () => {
      const result = create2d(3, false);
      expect(result['0.1']).toEqual(mockArray3[0][1]);
    });
  });
});
