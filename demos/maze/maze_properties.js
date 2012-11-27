var Maze = Maze || {};

/**
 * Notes for Maze.MAP
 *
 * The maze's map is a 2D array of numbers.
 * 0: Wall.
 * 1: Open road.
 * 2: Starting square.
 * 3. Finish square.
 *
 * Example of straight-line map with start on left and finish on right:
 *  Maze.MAP = [[0, 2, 1, 1, 1, 1, 3, 0]];
 */

/**
 * Notes for Maze.AVAILABLE_BLOCKS
 *
 * Full list of maze blocks:
 * ['maze_move', 'maze_turnLeft', 'maze_turnRight',
 * 'maze_isWall', 'controls_if', 'controls_forever', 'controls_whileUntil',
 * 'logic_operation', 'logic_negate']
 *
 */

Mazes = [
  Maze = {
    ID: 1,
    TITLE: 'Maze 1: Go, Go, Go!',
    DESCRIPTION: 'The fastest way from point A to point B is a straight line.',
    MAP: [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 2, 1, 1, 1, 1, 3, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0]],
    AVAILABLE_BLOCKS: ['maze_move']
  },

  Maze = {
    ID: 2,
    TITLE: 'Maze 2: Hang a left',
    DESCRIPTION: '',
    MAP: [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 3, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [0, 2, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0]],
    AVAILABLE_BLOCKS: ['maze_move', 'maze_turnLeft', 'maze_turnRight']
  },

  Maze = {
    ID: 3,
    TITLE: 'Maze 3: Zig Zag',
    DESCRIPTION: 'To the window, to the wall..',
    MAP: [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 3, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 2, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0]],
    AVAILABLE_BLOCKS: ['maze_move', 'maze_turnLeft', 'maze_turnRight']
  },

  Maze = {
    ID: 4,
    TITLE: 'Maze 4: The Road Less Traveled',
    DESCRIPTION: 'Two roads diverged in a wood, and I— <br/>\
      I took the one less traveled by,<br/> \
      And that has made all the difference.',
    MAP: [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 3, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 2, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0]],
    AVAILABLE_BLOCKS: ['maze_move', 'maze_turnLeft', 'maze_turnRight']
  },

  Maze = {
    ID: 5,
    TITLE: 'Maze 5: The Unpossible Dream',
    DESCRIPTION: 'This is my quest, to follow that star<br/> \
      No matter how hopeless, no matter how far',
    MAP: [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 1, 1, 3, 0],
      [0, 1, 1, 0, 1, 1, 0, 0],
      [0, 1, 0, 0, 1, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 1, 0, 0, 0, 1, 0],
      [0, 2, 1, 1, 1, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0]],
    AVAILABLE_BLOCKS: ['maze_move', 'maze_turnLeft', 'maze_turnRight']
  },
];

/**
 * Get number of current maze
 */
function getMazeNumber() {
  var mazeNumber = parseInt(loadValue('mazelyMazeNumber'));
  if (mazeNumber) {
    return mazeNumber;
  } else {
    saveValue('mazelyMazeNumber', 1);
    return 1;
  }
}

var mazeIndex = getMazeNumber() - 1;
Maze = Mazes[mazeIndex];

/**
 * Load the next maze
 */
Maze.next = function() {
  saveValue('mazelyMazeNumber', getMazeNumber() + 1);
  location.href='index.html';
};

