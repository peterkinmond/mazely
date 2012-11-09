var Maze = Maze || {};

/**
 * The maze's map is a 2D array of numbers.
 * 0: Wall.
 * 1: Open road.
 * 2: Starting square.
 * 3. Finish square.
 *
 * Example of straight-line map with start on left and finish on right:
 *  Maze.MAP = [[0, 2, 1, 1, 1, 1, 3, 0]];
 */

Mazes = [
  Maze = {
    ID: 1,
    MAP: [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 1, 1, 1, 1, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]],
    TITLE: 'Maze 1: Go, Go, Go!',
    DESCRIPTION: 'The fastest way from point A to point B is a straight line.'
  },
  Maze = {
    ID: 2,
    MAP: [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 1, 1, 1, 1, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]],
    TITLE: 'MAZE 2!!!!',
    DESCRIPTION: 'This is the SECOND MAZE'
  }
];


Maze = Mazes[0];

Maze.next = function() {
  Maze = Mazes[1];
};
