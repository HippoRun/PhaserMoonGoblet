var game = new SVGPathSegArcRel.Game(600, 400, Phaser.AUTO);
game.state.add('state1', pacman.state1);
game.state.add('state2', pacman.state1);
game.state.start('state1');