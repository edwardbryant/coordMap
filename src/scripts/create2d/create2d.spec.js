import create2d from './create2d';

const mockArray3 = [
  [
    { coords: { x: -1, y: 1 } },
    { coords: { x: 0, y: 1 } },
    { coords: { x: 1, y: 1 } }
  ],
  [
    { coords: { x: -1, y: 0 } },
    { coords: { x: 0, y: 0 } },
    { coords: { x: 1, y: 0 } }
  ],
  [
    { coords: { x: -1, y: -1 } },
    { coords: { x: 0, y: -1 } },
    { coords: { x: 1, y: -1 } }
  ]
];

describe('create2d', () => {
  describe('when create2d is called with no size param (size defaults to 3)', () => {
    it('does NOT throw a validation error', () => {
      expect(() => create2d()).not.toThrow('Invalid grid size value: size must be 3 or greater.');
    });
  });

  // describe('when create2d to create a 3x3 grid', () => {
  //   it('returns an expected grid array', () => {
  //     const result = create2d(3, false);
  //     expect(result[0].length).toEqual(3);
  //     expect(result[0][0].length).toEqual(3);
  //     expect(result[0][1].length).toEqual(3);
  //     expect(result[0][2].length).toEqual(3);
  //   });
  // });

  describe('when create2d is called with a size param of 3', () => {
    it('returns an expected grid array', () => {
      const result = create2d(3, false);
      expect(result['0.1']).toEqual(mockArray3[0][1]);
    });
  });

  describe('when create2d creates a 3x3 grid, and a location value is set', () => {
    it('returns the value when the same location is read', () => {
      const result = create2d(3, false);
      result['0.1'].text = 'hey hey hey';
      expect(result['0.1'].text).toEqual('hey hey hey');
    });
  });
});
