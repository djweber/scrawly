var io = require('socket.io-client');

document.addEventListener('DOMContentLoaded', function(e) {
    var Whiteboard = require('./modules/whiteboard');
    var board = Whiteboard('wboard', 'tray', 'localhost:3000');

    /* Base16 color scheme */
    board.tray.setColors([
        '#404040',
        '#ac4142',
        '#d28445',
        '#f4bf75',
        '#90a959',
        '#6a9fb5'
    ]);
});

