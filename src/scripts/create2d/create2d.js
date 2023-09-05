/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
import validateGridSize from '../validateGridSize/validateGridSize';
import getQuadrantSize from '../getQuadrantSize/getQuadrantSize';
import createGridObject from '../createGridObject/createGridObject';
import assignGridLocation from '../assignGridLocation/assignGridLocation';

const create2d = (size = 3) => {
  validateGridSize(size);

  const grid = [];

  grid.xPos = 0;
  grid.yPos = 0;

  const quadSize = getQuadrantSize(size);

  const x = -Math.abs(quadSize);
  const y = Math.abs(quadSize);

  for (const row of Array(size).keys()) {
    const gridRow = [];
    for (const col of Array(size).keys()) {
      const location = createGridObject(x, y, col, row);
      gridRow.push(location);
    }
    grid.push(gridRow);
  }

  const exportedGrid = new Proxy(grid, {
    get(target, prop, receiver) {
      if (prop.includes(',')) {
        const coords = prop.split(',');
        if (coords[0] > quadSize || coords[1] > quadSize) return undefined;
        const targetY = assignGridLocation('y', coords[1], quadSize);
        const targetX = assignGridLocation('x', coords[0], quadSize);
        return target[targetY][targetX];
      } else {
        return Reflect.get(target, prop, receiver);
      }
    },
    set(target, prop, value) {
      const coords = prop.split(',');
      const targetY = assignGridLocation('y', coords[1], quadSize);
      const targetX = assignGridLocation('x', coords[0], quadSize);
      target[targetY][targetX] = value;
    }
  });

  return exportedGrid;
};

export default create2d;
