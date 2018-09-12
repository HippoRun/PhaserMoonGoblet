pacman.state1 = function(){};
pacman.state1.prototype = {
    preload: function(){
// when map is made save it as field.json
        game.load.tilemap('field', 'assets/tilemaps/field.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('');
    },
    create: function(){
 // this is to change the background in the state. The color has to be a hex color. Hex color picker is a good site for it.
    game.stage.backgroundColor = '#DDDDDD';
    game.input.keyboard.addKey(Phaser.Keyboard.ONE).onDown.add(changeState, null, null, 1);

    game.input.keyboard.addKey(Phaser.Keyboard.ZERO).onDown.add(changeState, null, null, 0);
},
    update: function(){}
};