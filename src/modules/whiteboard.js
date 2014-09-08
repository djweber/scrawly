var Tray = require('./tray');
var Socket = require('socket.io-client');

module.exports = function(boardEle, trayEle, url) {

    /* Get canvas element */
    var canvas = document.getElementById(boardEle);
    
    /* Set up tray */
    var tray = Tray(trayEle);
    /* Set up socket connection */
    var conn = '';
    /* Set up canvas click event handlers */

    /* Return our whiteboard object */
    return {
        tray: tray,
        canvas: canvas,
        connection: conn
    };
};
