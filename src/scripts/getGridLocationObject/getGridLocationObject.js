const getGridLocationObject = (x, y, col, row) => ({
  x: x + col,
  y: y - row
});

export default getGridLocationObject;
