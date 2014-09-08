var Whiteboard = require('./modules/whiteboard');

var board = Whiteboard('wboard', 'tray', 'localhost:3000');
board.tray.setColors([
    '#ac4142',
    '#d28445',
    '#f4bf75',
    '#90a959',
    '#6a9fb5'
]);
