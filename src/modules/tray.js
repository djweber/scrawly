module.exports = function(el) {
    var element = document.getElementById(el);
    return {
        container: element,
        wells: [],
        selColor: '#ac4142',
        setColors: function(colors) {
            /* Populate tray with colors (switch to color picker later) */
            console.log(colors); 
            colors.forEach(function(v,i,a) {
                var well = document.createElement('div');
                well.className = 'well';
                well.style.backgroundColor = v;
                this.container.appendChild(well);
            }.bind(this));

            /* Bind single event listener to canvas (event delegation) */
            document.addEventListener('click', function(e) {
                if(e.target.className == 'well') {
                    console.log(e.target.style.backgroundColor);
                    this.selColor = e.target.style.backgroundColor;
                }
            }.bind(this));
        }, 
        clear: function() {
        
        }
    };
};
