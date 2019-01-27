
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

    preload() {
        this.load.image('boat', '../../../media/images/dboat.png');
        this.load.image('scenery', '../../../media/images/panorama.png');
    }

    create() {

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
            displayText: this.add.text(700, 500, "0", defaultFont),
            bar: this.add.rectangle(710, 480, 40, 2, 0xff0000)
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
                    ui.energy.boost += 15;
                } else {
                    ui.energy.boost -= 10;
                }
            });
            ui.answerText.push(this.add.text(
                buttonLocations[i][0]+135,
                buttonLocations[i][1]+27,
                cards.answers[i][quiz.answerFormat],
                defaultFont).setOrigin(0.5,0.5));
        }

        ui.timer = {
            background: this.add.rectangle(445, 300, 150, 110, 0x123456).setOrigin(0,0),
            displayText: this.add.text(500, 345, "0", defaultFont),
        };

        state.secondsElapsed = 0;

        state.clock = this.time.addEvent({
            delay: 1000,
            callback: tick,
            callbackScope: this,
            loop: true
        });

        function tick () {
            state.secondsElapsed += 1;
        }    

        ui.scenery = this.add.image(0, -100, 'scenery').setOrigin(0,0);
        ui.boat = this.add.image(100, 100, 'boat').setOrigin(0,0);
        ui.team1 = this.add.image(100, 50, 'boat').setOrigin(0,0).setTint(0xcc0000);
        ui.team2 = this.add.image(100, 150, 'boat').setOrigin(0,0).setTint(0x00cc00);
        var raceCam = this.cameras.add(0, 0, 800, 250).setOrigin(0,0.6);
        ui.boat.on('madeSomeProgress', () => {
            raceCam.startFollow(ui.boat, false, 1, 1, 250, -50);
            ui.boat.isFollowed = true;
        });
        this.cameras.main.setSize(800,300).setPosition(0,300).setScroll(0,300);
    }

    update() {
        var depletion = () => {
            if (ui.energy.level > 50) {
                return (ui.energy.level/500);
            } else {
                return 0.1;
            }
        }

        var opponentVelocity = (x) => {
            if (x < 300) {
                return 0.2 + (0.8 * x / 300)
            } else {
                return 1
            }
        }

        // Update clock display text

        ui.timer.displayText.text = (state.secondsElapsed + state.clock.getProgress()).toFixed(2).toString();

        // Animate energy level

        if (Math.abs(ui.energy.boost) > 1) {
            ui.energy.level += ui.energy.boost;
            ui.energy.boost = (ui.energy.boost / 3);
        } else {
            ui.energy.boost = 0;
        }

        if (ui.energy.level > 0) {
            ui.energy.level -= depletion();
        }

        if (ui.energy.level > 100) {
            ui.energy.level = 100;
        } else if (ui.energy.level < 0) {
            ui.energy.level = 0;
        }

        ui.energy.displayText.text = Math.floor(ui.energy.level).toString();
        ui.energy.bar.height = ui.energy.level * 2;
        ui.energy.bar.y = 480 - (ui.energy.level * 2);
        ui.energy.bar.fillColor = percentage_to_color(ui.energy.level);

        // Update boat positions

        ui.boat.x += (ui.energy.level/25);
        ui.team1.x += 2 * opponentVelocity(ui.team1.x)
        ui.team2.x += 1 * opponentVelocity(ui.team2.x)

        // Turn on camera tracking user boat after the boat made some progress

        if (!ui.boat.isFollowed) {
            if (ui.boat.x > 250) {
                ui.boat.emit('madeSomeProgress', ui.boat);
            }
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

        var message = "Dragon Boat Race";

        this.add.text(30, 30, message, defaultFont);
        var startButton = this.add.rectangle(180, 220, 300, 50, 0x6666ff).setInteractive();
        
        this.add.text(100, 200, "Start", defaultFont);
        startButton.on('pointerdown', function () {
            startGame();
        });
    }
}