const validateGridSize = (size = 0) => {
  if (size < 3) {
    throw new Error('Invalid grid size value: size must be 3 or greater.');
  }
};

export default validateGridSize;
