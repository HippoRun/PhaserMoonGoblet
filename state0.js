// variable that represents center width and center height of sprite. if you want it on top of left of page make it 0, 0
var pacman = {}, centerX = 1500 / 2, centerY = 1000 / 2, adam, speed = 6;

pacman.state0 = function(){};
pacman.state0.prototype = {
preload: function(){
// onces we have the images we will add it here
    game.load.spritesheet('adam', 'assets/spritesheets/adamSheet.png', 240, 370);
    game.load.image('tree', 'assets/backgrounds/TreeBG.png');
},
create: function(){
game.physics.startSystem(Phaser.Physics.ARCADE);
 // this is to change the background in the state. The color has to be a hex color. Hex color picker is a good site for it.
game.stage.backgroundColor = '#800080';
addChangeStateEventListeners();


// this will set bounds for the camera to follow. We might not need so code will be commented out.
game.world.setBounds(0, 0, 2813, 1000);

// this is to fit all screen sizes
game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

// this wont work until I add the images
    var treeBG = game.add.sprite(0, 0, 'tree');
    adam = game.add.sprite(centerX, centerY, 'adam'); 
    adam.anchor.setTo(0.5, 0.5);
    adam.scale.setTo(0.7, 0.7);
    game.physics.enable(adam);
    adam.body.collideWorldBounds = true;
// walking animation
    adam.animations.add('walk', [0, 1, 2, 3, 4]);

// code bellow is to make the camera move with the character. We might not need or want this so it will be commented out.
game.camera.follow(adam);
game.camera.deadzone = new Phaser.Rectangle(ceneterX - 300, 0, 600, 1000);
},
    update: function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            adam.scale.setTo(0.7, 0.7);
            adam.x += speed;
            adam.animations.play('walk', 14, true);
        }
    else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            adam.scale.setTo(-0.7, 0.7);
            adam.x -= speed;
            adam.animations.play('walk', 14, true);
    }
    else{
            adam.animations.stop('walk');
            adam.frame = 0;
    }
    if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
        adam.y -= speed;
// This is how we will set the bounds for the map need to add the y value after < to set bounds
    if(adam.y < 395){
        adam.y = 395;
    }
        }
    else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            adam.y += speed;
        }
    }
};
// starts a new state
function changeState(i, stateNum){
    console.log('state' + stateNum);
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