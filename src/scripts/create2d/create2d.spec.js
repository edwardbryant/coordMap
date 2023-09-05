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
    it('does NOT throw any errors', () => {
      expect(() => create2d()).not.toThrow('Invalid grid size value: size must be 3 or greater.');
    });
  });

  describe('when create2d is called with no size param (size defaults to 3)', () => {
    it('returns an expected 3x3 grid array', () => {
      const result = create2d();
      expect(result.length).toEqual(3);
      expect(result[0].length).toEqual(3);
      expect(result[1].length).toEqual(3);
      expect(result[2].length).toEqual(3);
      expect(result['1,-1']).toEqual(mockArray3[2][2]);
      expect(result['1,1']).toEqual(mockArray3[0][2]);
      expect(result['-1,-1']).toEqual(mockArray3[2][0]);
      expect(result['-1,1']).toEqual(mockArray3[0][0]);
    });
  });

  describe('when create2d is called with size set to 3', () => {
    it('returns an expected 3x3 grid array', () => {
      const result = create2d(3);
      expect(result.length).toEqual(3);
      expect(result[0].length).toEqual(3);
      expect(result[1].length).toEqual(3);
      expect(result[2].length).toEqual(3);
      expect(result['1,-1']).toEqual(mockArray3[2][2]);
      expect(result['1,1']).toEqual(mockArray3[0][2]);
      expect(result['-1,-1']).toEqual(mockArray3[2][0]);
      expect(result['-1,1']).toEqual(mockArray3[0][0]);
    });
  });

  describe('when create2d is called with size set to 5', () => {
    it('returns an expected 5x5 grid array', () => {
      const result = create2d(5);
      expect(result.length).toEqual(5);
      expect(result[0].length).toEqual(5);
      expect(result[1].length).toEqual(5);
      expect(result[2].length).toEqual(5);
      expect(result[3].length).toEqual(5);
      expect(result[4].length).toEqual(5);
      expect(result['1,-1']).toEqual(mockArray3[2][2]);
      expect(result['1,1']).toEqual(mockArray3[0][2]);
      expect(result['-1,-1']).toEqual(mockArray3[2][0]);
      expect(result['-1,1']).toEqual(mockArray3[0][0]);
    });
  });

  describe('when create2d is called to create a grid array', () => {
    it('returns the expected location object when called using coords', () => {
      const result = create2d(3);
      expect(result['-1,1']).toEqual(mockArray3[0][0]);
    });
  });

  describe('when create2d is called to create a grid array', () => {
    it('allows additional keys to be set and read using coords', () => {
      const result = create2d(3);
      result['0,0'].test = 'my test';
      expect(result['0,0']).toEqual({ coords: { x: 0, y: 0 }, test: 'my test' });
    });
  });
});
