const cantorPairing = (n: number, m: number) => {
  //Cantor pairing
  return ((n + m) * (n + m + 1)) / 2 + m;
  // ((-m)*2)/((n+m)*n+m+1)
};

export const generateId = (x: number, y: number) => {
  return cantorPairing(x, y);
};

export const generateInputId = (x: number, y: number) => {
  return `input-${x},${y}`;
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
