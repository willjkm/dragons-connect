

class StartScene extends Phaser.Scene {
    constructor() {
        super({key:"StartScene"});
    }

    preload() {
    }

    create() {

        const startGame = () => {
            this.scene.start('QuizScene');
        }

        var message = "Hello " + username + ", hope you enjoy this game!";

        this.add.text(30, 30, message, defaultFont);
        var startButton = this.add.rectangle(180, 220, 300, 50, 0x6666ff).setInteractive();
        
        this.add.text(100, 200, "Click to start", defaultFont);
        startButton.on('pointerdown', function () {
            startGame();
        });
    }

    update() {
    }

}