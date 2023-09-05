const getLocation = ({ params }) => {
  const CARDINAL = ['n', 's', 'e', 'w'];
  const ORDINAL = ['ne', 'nw', 'se', 'sw'];

  const startX = params.startX ?? '0';
  const startY = params.startY ?? '0';

  const direction = params.direction ?? 'N';
  const distance = params.distance ?? 1;

  const isCardinal = (cardinal.includes(direction.toLowerCase()));
  const isOrdinal = (ordinal.includes(direction.toLowerCase()));

  let resultX = 0;
  let resultY = 0;

  if (isCardinal) {
    if (direction.toLowerCase() === 'n') resultX = startX + distance;
    if (direction.toLowerCase() === 's') resultX = startX - distance;
    if (direction.toLowerCase() === 'e') resultX = startX;
    if (direction.toLowerCase() === 'w') resultX = startX;
  }

  return `${resultX},0`;
};

export default getLocation;
