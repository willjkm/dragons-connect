
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

class DragonBoatRace extends Phaser.Scene {
    constructor() {
        super({key:"DragonBoatRace"});
    }
    
    create() {
        var state = {};

        var buttonLocations = [
            [60, 425],
            [60, 500],
            [350, 425],
            [350, 500]
        ]

        initialize();

        ui.questionBackground = this.add.rectangle(60, 280, 370, 130, 0xccf7f0).setOrigin(0,0);
        ui.questionText = this.add.text(245, 345, cards.question[quiz.prompt], largeFont).setOrigin(0.5,0.5);
        ui.energy = {
            level: 0,
            displayText: this.add.text(700, 450, "0", defaultFont),
            bar: this.add.rectangle(710, 430, 40, 2, 0xff0000)
        };

        for (let i = 0; i < quiz.numOfAnswers; i++) {
            ui.buttons.push(this.add.rectangle(
                buttonLocations[i][0], 
                buttonLocations[i][1],
                270,
                55,
                0x6666ff).setOrigin(0,0).setInteractive());
            ui.buttons[i].on('pointerdown', function () {
                state.check = checkUserInput(i);
                if (state.check) {
                    ui.energy.level += 30; // energy boost
                    if (ui.energy.level > 100) {
                        ui.energy.level = 100;
                    } 
                } else {
                    if (ui.energy.level > 10) {
                        ui.energy.level -= 10;
                    }
                }
            });
            ui.answerText.push(this.add.text(
                buttonLocations[i][0]+135,
                buttonLocations[i][1]+27,
                cards.answers[i][quiz.answerFormat],
                defaultFont).setOrigin(0.5,0.5));
        }
    }

    update() {
        var depletion = () => {
            if (ui.energy.level > 50) {
                return (ui.energy.level/500);
            } else {
                return 0.1;
            }
        }
        
        function percentage_to_color(percentage) {
            var r, g, b = 0;
            if(percentage < 50) {
                r = 255;
                g = Math.round(5.1 * percentage);
            }
            else {
                g = 255;
                r = Math.round(510 - 5.10 * percentage);
            }
            var h = r * 0x10000 + g * 0x100 + b * 0x1;
            return '0x' + ('00000000' + h.toString(16)).slice(-6);
        }

        if (ui.energy.level > 1) {
            ui.energy.level -= depletion();
            ui.energy.displayText.text = Math.floor(ui.energy.level).toString();
            ui.energy.bar.height = ui.energy.level * 2;
            ui.energy.bar.y = 430 - (ui.energy.level * 2);
            ui.energy.bar.fillColor = percentage_to_color(ui.energy.level);
        }
    }
}

class GameOver extends Phaser.Scene {
    constructor() {
        super({key:"GameOver"});
    }
    create() {
        const startGame = () => {
            this.scene.start('DragonBoatRace');
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
            this.scene.start('DragonBoatRace');
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