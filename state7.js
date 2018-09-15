var arrow, startPointX, startPointY, endPointX, endPointY, swipeDirection, leeway = 80;

pacman.state7 = function(){};
pacman.state7.prototype = {
    preload: function(){
        game.load.image('arrow', 'assets/sprites/arrow.png');
    },
    create: function(){
// this is to change the background in the state. The color has to be a hex color. Hex color picker is a good site for it.
    game.stage.backgroundColor = '#a6ff4d';
    addChangeStateEventListeners();
        
    arrow = game.add.s;rite(centerX, centerY, 'arrow');
    arrow.anchor.setTo(0.5);
        
    game.input.onDown.add(this.startSwipe);
    game.input.onUp.add(this.getSwipeDirection);
},
startSwipe: function(){
    startPointX = game.input.x;
    startpointY = game.input.y;
},
getSwipeDirection: function() {
    endPointX = game.input.x;
    endPointY = game.input.y;
    
    if (Math.abs(endPointY - startPointY) < leeway && Math.abs(endPointX - startPointX) < leeway) {
        return false;
    }
    
    if (Math.abs(endPointY - startPointY) < Math.abs (endPointX - startPointX)) {
        console.log('horizontal');
        if (endPointX > startPointX) {
            swipeDirection = 90;
        } else {
            console.log('vertical');
            if (endPointY > startPointY) {
                swipeDirection = 180;
            } else {
                swipeDirection = 0;
            }
        }
        
        arrow.angle = swipeDirection;
    }
};