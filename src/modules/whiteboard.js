var Tray = require('./tray');
var socket = require('socket.io');

module.exports = function(boardEle, trayEle, url) {

    /* Get canvas element */
    var canvas = document.getElementById(el);
    
    /* Set up tray */
    var tray = Tray(trayEle);
    /* Set up socket connection */

    /* Set up canvas click event handlers */

    /* Return our whiteboard object */
    return {
        tray: tray,
        canvas: canvas,
        connection: conn
    };
};
