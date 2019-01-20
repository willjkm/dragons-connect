
class QuizScene extends Phaser.Scene {
    constructor() {
        super({key:"QuizScene"});
    }
    
    create() {
        initialize();

        ui.questionText = this.add.text(30, 30, cards.question[quiz.prompt], defaultFont);

        if (quiz.mode == 'multiple choice') {
            for (let i = 0; i < quiz.numOfAnswers; i++) {
                ui.buttons.push(this.add.rectangle(180, 120 + (100*i), 300, 50, 0x6666ff).setInteractive());
                ui.buttons[i].on('pointerdown', function () {
                    checkUserInput(i);
                });
                ui.answerText.push(this.add.text(50, 100*(i+1), cards.answers[i][quiz.answerFormat], defaultFont));
            }
        } else {
            ui.typedText = this.add.text(430, 30, "", defaultFont).setInteractive();
            this.input.keyboard.on('keydown', (input) => {
                processKeyboardInput(input.key);
            });
        }
    }
}

class GameOver extends Phaser.Scene {
    constructor() {
        super({key:"GameOver"});
    }
    create() {
        const startGame = () => {
            this.scene.start('QuizScene');
        }

        var message = "Game over! You gained " + user.accuracy + "% accuracy.";

        this.add.text(30, 30, message, defaultFont);
        var startButton = this.add.rectangle(180, 220, 300, 50, 0x6666ff).setInteractive();
        
        this.add.text(100, 200, "Play again", defaultFont);
        startButton.on('pointerdown', function () {
            startGame();
        });
    }
}

class StartScene extends Phaser.Scene {
    constructor() {
        super({key:"StartScene"});
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
}