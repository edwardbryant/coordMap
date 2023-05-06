import thisIsaTest from './index';

describe('thisIsaTest', () => {
  describe('when provided no params', () => {
    xit('returns a pre-set string', () => {
      expect(thisIsaTest()).toEqual('eds test');
    });
  });
});
