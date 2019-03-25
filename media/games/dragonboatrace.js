

class GameScene extends Phaser.Scene {
    constructor() {
        super({key:"GameScene"});
    }

    preload() {
        this.add.image(0,0, 'loading').setOrigin(0,0);
        
        var loadConfig = {
            mediaURL: "../../../media/images/",
            loadObjects: [
                {type: "image", name: "boat", file: "dboat.png"},
                {type: "image", name: "background", file: "newerbackground.jpg"},
                {type: "image", name: "scenery", file: "sceneryNEW.jpg"},
                {type: "image", name: "message_frame", file: "gameoverbackground.png"},
                {type: "atlas", name: "dboat", file: "boat_spritesheetsmaller.png", json: "boat_spritesheetsmaller.json"},
                {type: "atlas", name: "enemy1", file: "boat_spritesheetsmaller1.png", json: "boat_spritesheetsmaller1.json"},
                {type: "atlas", name: "enemy2", file: "boat_spritesheetsmaller2.png", json: "boat_spritesheetsmaller2.json"},
                {type: "atlas", name: "enemy3", file: "boat_spritesheetsmaller3.png", json: "boat_spritesheetsmaller3.json"},
                {type: "image", name: "coin", file: "coin.png"},
                {type: "image", name: "coin_disabled", file: "coin_disabled.png"},
                {type: "image", name: "spark", file: "spark.png"},
            ]
        }
        
        myLoad(loadConfig, this);

        var soundLoadConfig = {
            mediaURL: "../../../media/sounds/",
            loadObjects: [
                {type: "sound", name: "countdown", file: "countdown2.ogg"},
                {type: "sound", name: "countdown_high", file: "countdown2_high.ogg"},
                {type: "sound", name: "correct", file: "correct.ogg"},
                {type: "sound", name: "wrong", file: "wrong.ogg"},
                {type: "sound", name: "sparkle", file: "sparkle.ogg"}
            ]
        }
        myLoad(soundLoadConfig, this);
    }

    create() {

        initialize();

        // create animations

        var animationFrames = [];

        for (let i = 1; i < 21; i++) {
            var str = 'Boat' + i.toString() + '.png';
            animationFrames.push({key: 'dboat', frame: str})
        }

        this.anims.create({
            key: 'paddle',
            frames: animationFrames,
            frameRate: 20,
            repeat: 1
        });

        var getOpponentFrames = (index) => {
            var atlas = 'enemy' + index.toString(); 
            var animationFrames = [];
            for (let i = 1; i < 21; i++) {
                var str = 'Boat' + i.toString() + '.png';
                animationFrames.push({key: atlas, frame: str})
            }
            return animationFrames;
        }

        for (let i = 0; i<3; i++ ) {
            var animationKey = 'paddleforever' + (i + 1).toString();
            this.anims.create({
                key: animationKey,
                frames: getOpponentFrames(i + 1),
                frameRate: 20,
                repeat: -1
            });
        }    

        ui.removeAnimations = () => {
            this.anims.remove('paddle');
            this.anims.remove('paddleforever1');
            this.anims.remove('paddleforever2');
            this.anims.remove('paddleforever3');    
        }

        // set game cameras

        this.cameras.main.setSize(800,350).setPosition(0,250).setScroll(0,250); 
        ui.raceCam = this.cameras.add(0, 0, 800, 300).setOrigin(0,0.766)
        
        ui.cams = addCameras(this);

        // sounds

        ui.sound = {
            correct: this.sound.add('correct'),
            wrong: this.sound.add('wrong'),
            countdown: this.sound.add('countdown'),
            countdown_high: this.sound.add('countdown_high')
        }

        // initialize game state

        state = {
            secondsElapsed: 0,
            phase: "starting",
            clock: this.time.addEvent({
                delay: 1000,
                callback: () => {
                    if (state.phase == "starting") {
                        ui.start.number -= 1;
                        ui.start.displayText.text = ui.start.number.toString();
                        if (ui.start.number == 0) {
                            ui.sound.countdown_high.play();
                            state.phase = "race";
                            state.clock.elapsed = 0;
                            ui.start.displayText.text = "GO!";
                            ui.opponent.team[0].play('paddleforever1');
                            ui.opponent.team[1].play('paddleforever2');
                            ui.opponent.team[2].play('paddleforever3');
                        } else {
                            ui.sound.countdown.play();
                        }
                        ui.start.tween.restart();
                    } else {
                        state.secondsElapsed += 1;
                        ui.start.displayText.setVisible(false);
                    }
                },
                callbackScope: this,
                loop: true
            }),
        };

        // draw background

        ui.background = this.add.image(0,0, 'background').setOrigin(0,0);
        ui.scenery = this.add.image(0, 0, 'scenery').setOrigin(0,0);

        // draw gameover dialog box

        ui.message = gameEndDialog('GameScene', this);

        // draw question and answers

        ui.question = {
            displayText: this.add.text(185, 380, cards.question[quiz.prompt], largeFont).setOrigin(0.5,0.5)
        };

        ui.answer = {
            displayText: [],
            buttons: [],
            buttonLocations: [[155, 470],[155, 545],[455, 470],[455, 545]]
        };

        for (let i = 0; i < quiz.numOfAnswers; i++) {
            ui.answer.buttons.push(addButton(
                'big', ui.answer.buttonLocations[i][0], ui.answer.buttonLocations[i][1], cards.answers[i][quiz.answerFormat], this));
            ui.answer.buttons[i].button.on('pointerdown', function () {
                if (state.phase == "race") {
                    state.check = checkUserInput(i);
                    if (state.check) {
                        ui.sound.correct.play()
                        ui.energy.boost += 15;
                        ui.dboat.anims.play('paddle', true);
                    } else {
                        ui.sound.wrong.play()
                        ui.energy.boost -= 10;
                    }    
                }
            });
        }

        // draw text that shows time and position in race

        this.add.rectangle(700, 1050, 100, 55, 0xffffff).setAlpha(0.6)

        ui.timer = {
            displayText: [
                this.add.text(700, 1050, "", darkFont).setOrigin(0.5,0.5),
                this.add.text(705, 515, "", themeFont).setOrigin(0.5,0.5),
            ],
            findPlace: () => {
                var place = 1;
                ui.opponent.team.forEach(element => {
                    if (element.x > ui.dboat.x) {
                        place += 1;
                    };
                });
                if (place == 1) {
                    return "1st";
                } else if (place == 2) {
                    return "2nd";
                } else if (place == 3) {
                    return "3rd";
                } else if (place == 4) {
                    return "4th";
                }
            }
        };


        // draw energy bar

        ui.energy = {
            level: 0,
            bar: this.add.rectangle(352, 373.3, 0, 40.5, 0xff0000),                                                                                                                                                                 
            displayText: this.add.text(726, 495, "", defaultFont).setOrigin(0.5,0).setVisible(false)
        };

        ui.energy.update = () => {
            if (Math.abs(ui.energy.boost) > 1) {
                ui.energy.level += ui.energy.boost;
                ui.energy.boost = (ui.energy.boost / 3);
            } else {
                ui.energy.boost = 0;
            }
    
            if (ui.energy.level > 0) {
                if (ui.energy.level > 50) {
                    ui.energy.level -= (ui.energy.level/500);
                } else {
                    ui.energy.level -= 0.1;
                }
            }
    
            if (ui.energy.level > 100) {
                ui.energy.level = 100;
            } else if (ui.energy.level < 0) {
                ui.energy.level = 0;
            }
        };
        
        // computer sprites

        ui.opponent = {
            team: [
                this.add.sprite(100,120,'enemy1','Boat1.png').setScale(0.3,0.3).setFlip(true,false),
                this.add.sprite(100,160,'enemy2','Boat1.png').setScale(0.3,0.3).setFlip(true,false),
                this.add.sprite(100,200,'enemy3','Boat1.png').setScale(0.3,0.3).setFlip(true,false)
            ],
            returnVelocity: (x) => {            
                if (x < 300) {
                    return 0.2 + (0.8 * x / 300);
                } else {
                    return 1;
                }
            }
        }

        ui.opponent.team.forEach((element) => {
            element.speed = 1 + Math.random();
        })

        // player sprite

        ui.dboat = this.add.sprite(100,240,'dboat','Boat1.png').setScale(0.3,0.3).setFlip(true,false);

        ui.dboat.on('madeSomeProgress', () => {
            ui.raceCam.startFollow(ui.dboat, false, 1, 1, 250, 10);
            ui.dboat.isFollowed = true;
        });

        // animated starting text

        ui.start = {
            number: 3,
            displayText: this.add.text(400, 300, "3", funnyFont
            ).setOrigin(0.5,0.5).setStroke('#de77ae', 16).setShadow(2, 2, "#333333", 2, true, true)
        }
        ui.start.tween = this.tweens.add({
            targets: ui.start.displayText,
            scaleX: 0.8,
            scaleY: 0.8,
            ease: 'Power1',
            duration: 300
        });

        state.gameOver = () => {
            // Remove interactive and animated elements from game scene
                        
            ui.opponent.team.forEach(element => {
                element.setVisible(false);
            });

            ui.answer.buttons.forEach((element) => {
                element.button.removeInteractive();
            });

            // work out how many coins will be awarded

            var place = 1;
            ui.opponent.team.forEach(element => {
                if (element.x > ui.dboat.x) {
                    place += 1;
                };
            });
            var coins = 4-place;

            // update the game over message text

            var finalScore = ui.timer.displayText[0].text;
            ui.message.displayText[0].text = "You came " + ui.timer.displayText[1].text + "!";
            ui.message.displayText[1].text = "Time: " + finalScore + "s";

            if (Number(user.topScore) > Number(finalScore)) {
                ui.message.displayText[2].text = "New Record!";
                ui.message.displayText[2].setStyle({fontSize:'30px', color: '#ee7777', fontFamily: 'Carter One'}).setRotation(-0.5).setX(1300).setY(1370);
            } else if (user.topScore == "0") {
                ui.message.displayText[2].text = "";
            } else {            
                ui.message.displayText[2].text = "Personal best: " + user.topScore + "s";
            }

            ui.message.flyIn();
            ui.cams.dim([ui.raceCam, this.cameras.main]);        

            if (coins > 0) {
                ui.message.sparkle(coins);
            }

            // update user top score and coins

            if (Number(user.topScore) > Number(finalScore)) {
                user.topScore = finalScore;
            } else if (user.topScore == 0) {
                user.topScore = finalScore;
            }

            if (user.coins < coins) {
                user.coins = coins;
            }

            // AJAX POST score to database

            var CSRFtoken = $('input[name=csrfmiddlewaretoken]').val();
            $.post('../../../lessons/ajax/gameover/', {
                csrfmiddlewaretoken: CSRFtoken,
                element_name: "Dragon Boat Race",
                score: Math.floor(finalScore * 100),
                lesson: importData.lesson,
                coins: coins
            });
        }
    }

    update() {
        if (state.phase == "race") {
            // update time and race position
            
            ui.timer.displayText[0].text = (state.secondsElapsed + state.clock.getProgress()).toFixed(2).toString();
            ui.timer.displayText[1].text = ui.timer.findPlace();

            // update energy bar

            ui.energy.update();

            ui.energy.displayText.text = Math.floor(ui.energy.level).toString();
            ui.energy.bar.width = - ui.energy.level * 5;
            if (ui.energy.bar.width < -418) {
                ui.energy.bar.width = -418;
            }
            ui.energy.bar.x = 356 - ui.energy.bar.width;
            ui.energy.bar.fillColor = percentage_to_color(ui.energy.level);

            // Update boat positions

            ui.dboat.x += (ui.energy.level/25);
            ui.opponent.team.forEach((element) => {
                element.x += element.speed * ui.opponent.returnVelocity(element.x);                
            })

            // Turn on camera tracking user boat after the boat made some progress

            if (!ui.dboat.isFollowed) {
                if (ui.dboat.x > 250) {
                    ui.dboat.emit('madeSomeProgress', ui.dboat);
                }
            }

            // End of game when boat progresses 2300 pixels

            if (ui.dboat.x > 2300) {
                state.phase = "gameover";
                state.gameOver();
            }
        }
    } 
}

class StartScene extends Phaser.Scene {
    constructor() {
        super({key:"StartScene"});
    }

    preload() {
        var loadConfig = {
            mediaURL: "../../../media/images/",
            loadObjects: [
                {type: "image", name: "splash", file: "splash.jpg"},
                {type: "image", name: "coin", file: "coin.png"},
                {type: "image", name: "coin_disabled", file: "coin_disabled.png"},
                {type: "image", name: "loading", file: "loading.jpg"},
                {type: "image", name: "dbr0", file: "dbr0.jpg"},
                {type: "image", name: "dbr1", file: "dbr1.jpg"},
                {type: "image", name: "dbr2", file: "dbr2.jpg"},
                {type: "image", name: "dbr3", file: "dbr3.jpg"},
                {type: "image", name: "dbr4", file: "dbr4.jpg"},
                {type: "image", name: "dbr5", file: "dbr5.jpg"},
                {type: "image", name: "iarrow", file: "instruction_arrow.png"},
                {type: "image", name: "idialog", file: "instruction_dialog.png"},
            ]
        }
        
        myLoad(loadConfig, this);
        myLoad("buttons", this);
    }

    create() {
        var gui = {}; // user interface object for the start scene

        this.add.image(0, 0, 'splash').setOrigin(0,0);

        gui.cams = addCameras(this);

        var startButton = addButton('small', 290, 250, "Start Game", this);
        var instructions = addButton('small', 510, 250, "Instructions", this);

        instructions.button.on('pointerdown', () => {
            runInstructions('race', this);
        });

        // populate previous top scores (first time only)

        if (typeof user.topScore == "undefined") {
            user.topScore = "0";
            if (importData.top_score) {
                user.topScore = importData.top_score;
            }
        } 

        if (typeof user.coins == "undefined") {
            user.coins = 0;
            if (importData.coins) {
                user.coins = importData.coins;
            }
        } 

        // parameters for starting a new game

        var startGame = (level, prompt, format) => {
            quiz.level = level;
            quiz.prompt = prompt;
            quiz.answerFormat = format;
            this.scene.start('GameScene');
        }

        // user interface

        startButton.button.on('pointerdown', () => {
            startGame(1, 'pinyin', 'english')
        });
    }
}