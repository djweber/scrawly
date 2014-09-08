var io = require('socket.io-client');

document.addEventListener('DOMContentLoaded', function(e) {
    var Whiteboard = require('./modules/whiteboard');
    var board = Whiteboard('wboard', 'tray', 'localhost:3000');
    var socket;

    /* Base16 color scheme */
    board.tray.setColors([
        '#ac4142',
        '#d28445',
        '#f4bf75',
        '#90a959',
        '#6a9fb5'
    ]);

    socket = io('http://localhost:3000');
    socket.on('connect', function() {
        console.log('Connected to server');
    });
});

