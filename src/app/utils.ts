export const generateId = (x: number, y: number) => {
  return `${x},${y}`;
};

export const inRange = (
  x: number,
  y: number,
  limitX: number,
  limitY: number
) => {
  if (x < limitX && x >= 0 && y < limitY && y >= 0) {
    return true;
  }
  return false;
};
