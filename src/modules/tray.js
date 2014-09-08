function setColors(colors) {
    /* Populate tray with colors (switch to color picker later) */
    var width = parseInt(window.getComputedStyle(this.container, null).getPropertyValue('width'));
    var padding = parseInt(window.getComputedStyle(this.container, null).getPropertyValue('padding'));
    var margin = ((width - padding) / colors.length) / 4;
    
    colors.forEach(function(v,i,a) {
        var well = document.createElement('div');
        well.classList.add('well');
        well.style.backgroundColor = v;
        well.style.marginLeft = margin + 'px';
        well.style.marginRight = margin +'px';
        this.container.appendChild(well);
    }.bind(this));

    /* Bind single event listener to canvas (event delegation) */
    document.onclick = (function(e) {
        if(e.target.className == 'well') {
            console.log(e.target.style.backgroundColor);
            /* Unselect currently clicked color if available */
            var clicked = document.querySelector('.clicked');
            if(clicked) {
                clicked.classList.remove('clicked');
            }
            e.target.classList.add('clicked');
            this.selColor = e.target.style.backgroundColor;
        }
    }.bind(this));
}

function clear() {

} 

module.exports = function(el) {
    var element = document.getElementById(el);
    return {
        container: element,
        wells: [],
        selColor: '#ac4142',
        setColors: setColors, 
        clear: function() {
         
        }
    };
};
