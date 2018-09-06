var pacman = {};
pacman.state1 = function(){};
pacman.state1.prototype = {
    preload: function(){},
    create: function(){
 // this is to change the background in the state. The color has to be a hex color. Hex color picker is a good site for it.
    game.stage.backgroundColor = '#DDDDDD';
    console.log('state1');
},
    update: function(){}
};