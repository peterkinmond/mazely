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
      [0, 0, 0, 0, 3, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [0, 2, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0]],
    TITLE: 'Maze 2: Hang a left',
    DESCRIPTION: ''
  },

  Maze = {
    ID: 3,
    MAP: [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 3, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 2, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0]],
    TITLE: 'Maze 3: Zig Zag',
    DESCRIPTION: 'To the window, to the wall..'
  },

  Maze = {
    ID: 4,
    MAP: [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 3, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 2, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0]],
    TITLE: 'Maze 4: The Road Less Traveled',
    DESCRIPTION: 'Two roads diverged in a wood, and I— <br/>\
      I took the one less traveled by,<br/> \
      And that has made all the difference.'
  },

  Maze = {
    ID: 5,
    MAP: [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 1, 0, 3, 0],
      [0, 1, 1, 0, 1, 1, 1, 0],
      [0, 1, 0, 0, 1, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 1, 0, 0, 0, 1, 0],
      [0, 2, 1, 1, 1, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0]],
    TITLE: 'Maze 5: The Unpossible Dream',
    DESCRIPTION: 'This is my quest, to follow that star<br/> \
      No matter how hopeless, no matter how far'
  },
];

var mazeNumber = parseInt(getCookie('BlocklyMazeNumber')) || 1;
Maze = Mazes[mazeNumber - 1];

Maze.next = function() {
  setCookie('BlocklyMazeNumber', mazeNumber + 1);
  location.href='maze.html';
};

function setCookie(key, value) {
  var today = new Date();
  var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days
  document.cookie = key + "=" + value + "; path=/; expires=" + expiry.toGMTString();
}

function getCookie(c_name)
{
  var i,x,y,ARRcookies=document.cookie.split(";");
  for (i=0;i<ARRcookies.length;i++)
  {
    x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
    y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
    x=x.replace(/^\s+|\s+$/g,"");
    if (x==c_name)
    {
    return unescape(y);
    }
  }
}
