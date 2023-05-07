const assignGridLocation = (position, value, quadSize) => {
  const valueInt = parseInt(value, 10);
  if (position === 'x') return quadSize + valueInt;
  if (position === 'y') return quadSize - valueInt;
  return undefined;
};

export default assignGridLocation;
