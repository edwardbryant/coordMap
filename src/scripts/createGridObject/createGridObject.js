const createGridObject = (rawX, rawY, col, row) => {
  const x = rawX + col;

  const y = rawY - row;

  const coords = { x, y };

  return ({ coords });
};

export default createGridObject;
