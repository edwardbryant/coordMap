import validateGridSize from './validateGridSize';

describe('validateGridSize', () => {
  describe('when provided no grid size (defaults to 0)', () => {
    it('throws mininum size error', () => {
      expect(() => validateGridSize()).toThrow('Invalid grid size value: size must be 3 or greater.');
    });
  });

  describe('when provided a grid size of 0', () => {
    it('throws mininum size error', () => {
      expect(() => validateGridSize(0)).toThrow('Invalid grid size value: size must be 3 or greater.');
    });
  });

  describe('when provided a grid size of 1', () => {
    it('throws mininum size error', () => {
      expect(() => validateGridSize(1)).toThrow('Invalid grid size value: size must be 3 or greater.');
    });
  });

  describe('when provided a grid size of 2', () => {
    it('throws mininum size error', () => {
      expect(() => validateGridSize(2)).toThrow('Invalid grid size value: size must be 3 or greater.');
    });
  });

  describe('when provided a grid size of 3', () => {
    it('throws no error', () => {
      expect(() => validateGridSize(3)).not.toThrow('Invalid grid size value: size must be 3 or greater.');
    });
  });
});
