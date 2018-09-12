// variable that represents center width and center height of sprite. if you want it on top of left of page make it 0, 0
var pacman = {}, centerX = 1500 / 2, centerY = 1000 / 2, warewolf, speed = 2;

pacman.state0 = function(){};
pacman.state0.prototype = {
    preload: function(){
// onces we have the images we will add it here
    game.load.image('warewolf', 'assets/spritesheets/warewolf.png', 240, 370);
    game.load.image('map', 'assets/backgrounds/map.png');
    },
    create: function(){
    game.physics.startSystem(Phaser.Physics.ARCADE);
 // this is to change the background in the state. The color has to be a hex color. Hex color picker is a good site for it.
    game.stage.backgroundColor = '#DDDDDD';
    console.log('state0');

    addChangeStateEventListeners();

// this will set bounds for the camera to follow. We might not need so code will be commented out.
// game.world.setBounds(0, 0, 2813, 1000);

// this is to fit all screen sizes
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

// this wont work until I add the images
    var map = game.add.sprite(0, 0, 'map1');
    warewolf = game.add.sprite(centerX, centerY, 'warewolf'); 
    warewolf.anchor.setTo(0.5, 0.5);
    warewolf.scale.setTo(0.7, 0.7);
    game.physics.enable(warewolf);
    warewolf.body.collideWorldBounds = true;
// walking animation
    warewolf.animations.add('walk', [0, 1, 2, 3, 4]);

// code bellow is to make the camera move with the character. We might not need or want this so it will be commented out.
//    game.camera.follow(warewolf);
//    game.camera.deadzone = new Phaser.Rectangle(ceneterX - 300, 0, 600, 1000);

},
    update: function(){
        if(game.input.keyboard.isDown(Phaser.keyboard.RIGHT)){
            warewolf.scale.setTo(0.7, 0.7);
            warewolf.x += speed;
            warewolf.animations.play('walk', 14, true);
        }
        else if(game.input.keyboard.isDown(Phaser.keyboard.LEFT)){
            warewolf.scale.setTo(-0.7, 0.7);
            warewolf.x -+ speed;
            warewolf.animations.play('walk', 14, true);
        }
        else{
            warewolf.animations.stop('walk');
            warewolf.frame = 0;
        }
        if(game.input.keyboard.isDown(Phaser.keyboard.UP)){
            warewolf.y -= speed;
// This is how we will set the bounds for the map need to add the y value after < to set bounds
            // if(warewolf.y < ){
//             warewolf.y = 395;
            //}
        }
        else if(game.input.keyboard.isDown(Phaser.keyboard.DOWN)){
            warewolf.y += speed;
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