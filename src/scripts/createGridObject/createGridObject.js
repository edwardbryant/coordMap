const createGridObject = (x, y, col, row) => (
  { x: x + col, y: y - row }
);

export default createGridObject;
