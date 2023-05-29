// Given two crystall balls what will break if dropped from high enough
// distance. Determine the exact spot in which it will break in the most optimized way

export const twoCrystallBalls = (floors: boolean[]): number => {
  const jumpDistance = Math.floor(Math.sqrt(floors.length));

  let i = 0;

  for (; i < floors.length; i += jumpDistance) {
    if (floors[i]) {
      break;
    }
  }

  i -= jumpDistance;

  for (let j = 0; j <= jumpDistance && i < floors.length; j++, i++) {
    if (floors[i]) {
      return i;
    }
  }

  return -1;
};
