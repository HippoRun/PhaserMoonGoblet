pacman.state3 = function(){};
pacman.state3.prototype = {
    preload: function(){},
    create: function(){
// this is to change the background in the state. The color has to be a hex color. Hex color picker is a good site for it.
    game.stage.backgroundColor = '#80ff80';
    console.log('state3');
},

    update: function(){}
};