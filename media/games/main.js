
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0}
        }
    },
    audio: {
        disableWebAudio: true
    },
    scene: [ StartScene, GameScene ] 
};

var game = new Phaser.Game(config);
