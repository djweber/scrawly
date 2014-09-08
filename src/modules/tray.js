module.exports = function(el) {

    var element = document.getElementById(el);

    return {
        container: element,
        wells: [],
        selColor: '#ac4142',
        setColors: function(colors) {
            /* Populate tray with colors (switch to color picker later) */
            
            /* TODO: generate div.well for each color and set bg color to color */

            /* Bind single event listener to canvas (event delegation) */
        }, 
        clear: function() {
        
        }
    };
};
