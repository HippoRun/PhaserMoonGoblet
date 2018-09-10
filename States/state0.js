// variable that represents center width and center height of sprite. if you want it on top of left of page make it 0, 0
var pacman = {}, centerX = 1500 / 2, centerY = 1000 / 2, vampire, speed = 4;

pacman.state0 = function(){};
pacman.state0.prototype = {
    preload: function(){
// onces we have the images we will add it here
        //game.load.image('vampire', 'assets/sprites/vampire.png');
    },
    create: function(){
 // this is to change the background in the state. The color has to be a hex color. Hex color picker is a good site for it.
    game.stage.backgroundColor = '#DDDDDD';
    console.log('state0');

    addChangeStateEventListeners();
// this is to fit all screen sizes
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    //vampire = game.add.sprite(centerX, centerY, 'vampire'); ******** NEED VAMP
    vampire.anchor.setTo(0.5, 0.5);
},
    update: function(){
        if(game.input.keyboard.isDown(Phaser.keyboard.RIGHT)){
            vampire.x += speed;
        }
        else if(game.input.keyboard.isDown(Phaser.keyboard.LEFT)){
            vampire.x -+ speed;
        }
        if(game.input.keyboard.isDown(Phaser.keyboard.UP)){
            vampire.y -= speed;
        }
        else if(game.input.keyboard.isDown(Phaser.keyboard.DOWN)){
            vampire.y += speed;
        }
    }
};
// starts a new state
function changeState(i, stateNum){
    console.log(i);
    game.state.start('state' + stateNum);

}

function addKeyCallback(key, fn, args){
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);

}

function addChangeStateEventListeners(){
    addKeyCallback(Phaser.keyboard.ZERO, changeState, 0);
    addKeyCallback(Phaser.keyboard.ONE, changeState, 1);
    addKeyCallback(Phaser.keyboard.TWO, changeState, 2);
    addKeyCallback(Phaser.keyboard.THREE, changeState, 3);
    addKeyCallback(Phaser.keyboard.FOUR, changeState, 4);
    addKeyCallback(Phaser.keyboard.FIVE, changeState, 5);
    addKeyCallback(Phaser.keyboard.SIX, changeState, 6);
    addKeyCallback(Phaser.keyboard.SEVEN, changeState, 7);
    addKeyCallback(Phaser.keyboard.EIGHT, changeState, 8);
    addKeyCallback(Phaser.keyboard.NINE, changeState, 9);

}