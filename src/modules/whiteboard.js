var Tray = require('./tray');
var io = require('socket.io-client');

function draw(x2, y2, x1, y1, ctx, color) {
    ctx.strokeStyle = color;
    ctx.lineJoin = 'round';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.closePath();
    ctx.stroke();
}

function drawEmit(x2, y2, x1, y1, color) {
    /* Send draw event to server */
    var data = {
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2,
        clr: color
    };
    console.log('Emitting');
    this.conn.emit('draw', data);
}

function drawRecv(data) {
    console.log('Data received', data);
    var ctx = this.canvas.getContext('2d');
    this.draw(data.x2, data.y2, data.x1, data.y1, ctx, data.clr);
}

function initCanvas() {

    var dragging = false;
    var tray = this.tray;
    var canvas = this.canvas;
    var ctx = canvas.getContext('2d');
    var prevX = 0;
    var prevY = 0;

    /* It's closure time! */
    canvas.onmousedown = (function(e) {
        dragging = true;
        var clickX = e.pageX - canvas.offsetLeft;
        var clickY = e.pageY - canvas.offsetTop;
        
        /* Draw to canvas */
        this.draw(clickX, clickY, clickX, clickY, ctx, tray.selColor);
        
        /* Send draw data to socket */
        this.drawEmit(clickX, clickY, clickX, clickY, tray.selColor);
        
        /* Record our last position */
        prevX = clickX;
        prevY = clickY;
    }.bind(this));

    canvas.onmousemove = (function(e) {
        if(dragging) {
            var clickX = e.pageX - canvas.offsetLeft;
            var clickY = e.pageY - canvas.offsetTop;
            this.draw(clickX, clickY, prevX, prevY, ctx, tray.selColor);
            this.drawEmit(clickX, clickY, prevX, prevY, tray.selColor);
            prevX = clickX;
            prevY = clickY;
        }
    }.bind(this));

    canvas.onmouseup = function(e) {
        dragging = false;
    };
}

function initSocket(conn) {
    conn.on('connect', function() {
        console.log('Connected to server');
        conn.on('drawData', function(data) {
            /* Add data to canvas */
            this.drawRecv(data); 
        }.bind(this));
    }.bind(this));
}

module.exports = function(boardEle, trayEle, url) {
    var whiteboard = {};
    
    /* Get canvas element */
    var canvas = document.getElementById(boardEle);
    
    /* Set up tray */
    var tray = Tray(trayEle);
    
    /* Set up socket connection */
    var socket = io('http://localhost:3000');
   
    whiteboard = {
        tray: tray,
        canvas: canvas,
        conn: socket,
        draw: draw,
        drawEmit: drawEmit,
        drawRecv: drawRecv,
    };

    /* Initialize our whiteboard and socket connecton */ 
    initCanvas.bind(whiteboard)();
    initSocket.bind(whiteboard)(socket);
 
    return whiteboard;
};
