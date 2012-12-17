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
 * Full list of blocks used for maze:
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
    AVAILABLE_BLOCKS: ['maze_move'],
    STARTING_BLOCKS:
      '<xml>' +
      '  <block type="maze_move" x="285" y="100"></block>' +
      '</xml>',
    INTRO_VIDEO:'OLwECShvRD0',
    NOTES: 'Intros the parts of the screen (toolbox, program creation area, \
      maze, buttons). Intros move forward block and simple maze.'
  },

  Maze = {
    ID: 2,
    TITLE: 'Maze 2: Zig Zag',
    DESCRIPTION: 'To the window, to the wall..',
    MAP: [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 3, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 2, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0]],
    AVAILABLE_BLOCKS: ['maze_move', 'maze_turnLeft', 'maze_turnRight'],
    STARTING_BLOCKS:
      '<xml>' +
      '  <block type="maze_move" x="285" y="100"></block>' +
      '</xml>',
    NOTES: 'Intros the left and right turn blocks. Also shows that blocks \
      with white bubbles can be transformed (e.g. Left to right turn). \
      Requires user to manually create solution with no looping.'
  },

  Maze = {
    ID: 3,
    TITLE: "Maze 3: There's Got to be an Easier Way",
    DESCRIPTION: '"The three chief virtues of a programmer are: <br/>\
      Laziness, Impatience and Hubris."<br/>\
      Larry Wall',
    MAP: [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 2, 1, 1, 1, 1, 3, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0]],
    AVAILABLE_BLOCKS: ['maze_move', 'controls_forever'],
    STARTING_BLOCKS:
      '<xml>' +
      '  <block type="controls_forever" x="285" y="100"></block>' +
      '</xml>',
    INTRO_VIDEO:'8i-nbCS37_g',
    NOTES: 'Intros looping and repeat forever block. Allows user to \
      solve earlier maze much more efficiently. Explain that loop forever \
      should only be used as an outer block.'
  },

  Maze = {
    ID: 4,
    TITLE: 'Maze 4: If I Only Had a Block For That',
    DESCRIPTION: "Don't bang your head against the wall.",
    MAP: [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 3, 0],
      [0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 1, 0],
      [0, 2, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0]],
    AVAILABLE_BLOCKS: ['maze_move', 'maze_turnLeft', 'maze_turnRight', 'maze_isWall',
      'controls_if', 'controls_forever'],
    STARTING_BLOCKS:
      '<xml> \
        <block type="controls_forever" x="254" y="83"> \
          <statement name="DO"> \
            <block type="controls_if" inline="false"> \
              <next> \
                <block type="maze_move"> \
                  <title name="DIR">moveForward</title> \
                </block> \
              </next> \
            </block> \
          </statement> \
        </block> \
      </xml>',
    NOTES: 'Intros "if" and "wall-ahead" blocks, allowing user to \
      dynamically handle turning decisions. Pattern is kept simple \
      so focus is on using new pattern.'
  },

  Maze = {
    ID: 5,
    TITLE: 'Maze 5: The Road Less Traveled',
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
    AVAILABLE_BLOCKS: ['maze_move', 'maze_turnLeft', 'maze_turnRight',
      'maze_isWall', 'controls_if', 'controls_forever', 'logic_operation'],
    STARTING_BLOCKS:
      '<xml> \
        <block type="controls_forever" x="238" y="73"> \
          <statement name="DO"> \
            <block type="maze_move"> \
              <title name="DIR">moveForward</title> \
              <next> \
                <block type="controls_if" inline="false"> \
                  <value name="IF0"> \
                    <block type="logic_operation" inline="true"> \
                      <title name="OP">AND</title> \
                    </block> \
                  </value> \
                </block> \
              </next> \
            </block> \
          </statement> \
        </block> \
      </xml>',
    NOTES: 'Intro "and" block. User learns that a single if-condition \
      wont work in all cases. First example of needing to handle more than \
      one condition.'
  },

  Maze = {
    ID: 6,
    TITLE: 'Maze 6: The Unpossible Dream',
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
  },
];

/**
 * Get number of current maze
 */
function getMazeNumber() {
  var mazeNumber = parseInt(loadValue('mazelyMazeNumber'));
  var manualOverride = getParameterByName('mazeNumber');
  if (manualOverride) {
    return manualOverride;
  }
  else if (mazeNumber) {
    return mazeNumber;
  } else {
    saveValue('mazelyMazeNumber', 1);
    return 1;
  }
}

var mazeIndex = getMazeNumber() - 1;
Maze = Mazes[mazeIndex];

// Set default values
Maze.AVAILABLE_BLOCKS = Maze.AVAILABLE_BLOCKS ||
   ['maze_move', 'maze_turnLeft', 'maze_turnRight',
   'maze_isWall', 'controls_if', 'controls_forever', 'controls_whileUntil',
   'logic_operation', 'logic_negate'];

Maze.STARTING_BLOCKS = Maze.STARTING_BLOCKS ||
  '<xml>' +
  '  <block type="maze_move" x="285" y="100"></block>' +
  '</xml>';

/**
 * Load the next maze
 */
Maze.next = function() {
  saveValue('mazelyMazeNumber', getMazeNumber() + 1);
  location.href='index.html';
};

