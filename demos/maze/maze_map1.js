var Maze = Maze || {};


// ********************* MAZE 1 *********************

/**
 * The maze's map is a 2D array of numbers.
 * 0: Wall.
 * 1: Open road.
 * 2: Starting square.
 * 3. Finish square.
 */
Maze.MAP = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 1, 1, 1, 1, 3, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]];

Maze.TITLE = 'Maze 1: Go, Go, Go!';

Maze.DESCRIPTION = 'The fastest way from point A to point B is a straight line.';

Maze.previous = null;

Maze.next = 2;



