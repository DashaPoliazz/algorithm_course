export type Point = {
  x: number;
  y: number;
};

const steps = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

export function walk(
  maze: string[],
  curr: Point,
  end: Point,
  seen: boolean[][],
  wall: string,
  path: Point[]
): boolean {
  // Base cases:
  // 1. Off the map
  if (
    curr.x < 0 ||
    curr.x >= maze[0].length ||
    curr.y < 0 ||
    curr.y >= maze.length
  ) {
    return false;
  }

  // 2. Reached the end
  if (curr.x === end.x && curr.y === end.y) {
    path.push(curr);
    return true;
  }

  // 3. On the wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }

  // 3. Aready were here
  if (seen[curr.y][curr.x]) {
    return false;
  }

  // on add to the stack
  seen[curr.y][curr.x] = true;
  path.push(curr);

  // Recursion
  for (let i = 0; i < steps.length; i++) {
    const [x, y] = steps[i];

    if (
      walk(
        maze,
        {
          x: curr.x + x,
          y: curr.y + y,
        },
        end,
        seen,
        wall,
        path
      )
    ) {
      return true;
    }
  }

  // on remove from the stack
  path.pop();

  return false;
}

export default function solve(
  maze: string[],
  wall: string,
  start: Point,
  end: Point
): Point[] {
  const seen: boolean[][] = [];
  const path: Point[] = [];

  for (let i = 0; i < maze[0].length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }

  walk(maze, start, end, seen, wall, path);

  return path;
}
