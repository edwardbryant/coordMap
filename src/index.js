import getGridLocationObject from './scripts/getGridLocationObject/getGridLocationObject';
import getQuadrantSize from './scripts/getQuadrantSize/getQuadrantSize';
import validateGridSize from './scripts/validateGridSize/validateGridSize';

const thisIsaTest = () => {
  console.log('this is a test.');
  const coordMap = {
    getGridLocationObject,
    getQuadrantSize,
    validateGridSize
  };
  return coordMap;
};

export default thisIsaTest;
