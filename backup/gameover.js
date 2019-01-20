class GameOver extends Phaser.Scene {
    constructor() {
        super({key:"GameOver"});
    }

    preload() {
    }

    create() {

        // AJAX POST score to database

        var CSRFtoken = $('input[name=csrfmiddlewaretoken]').val();
        $.post('../../lessons/ajax/gameover/', {
            csrfmiddlewaretoken: CSRFtoken,
            score: gameData.accuracy,
            lesson: quiz.currentLesson
        });

        const startGame = () => {
            this.scene.start('QuizScene');
        }

        var message = "Game over! You gained " + gameData.accuracy + "% accuracy.";

        this.add.text(30, 30, message, defaultFont);
        var startButton = this.add.rectangle(180, 220, 300, 50, 0x6666ff).setInteractive();
        
        this.add.text(100, 200, "Play again", defaultFont);
        startButton.on('pointerdown', function () {
            startGame();
        });
    }

    update() {
    }

}