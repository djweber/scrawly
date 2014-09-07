var tray = require('./modules/tray');
var socket = require('socket.io');

module.exports = function(el, url) {

    /* Get canvas element */
    var canvas = document.getElementById(el);
    
    /* Set up socket connection */

    /* Return our whiteboard instance */
    return {
        canvas: canvas
    };
};
