const getQuadrantSize = (size) => {
  if (size) {
    return (size - 1) / 2;
  }
  return 0;
};

export default getQuadrantSize;
