var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [ StartScene, GameOver, QuizScene ]
};

var game = new Phaser.Game(config);
