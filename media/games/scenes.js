

class DragonBoatRace extends Phaser.Scene {
    constructor() {
        super({key:"DragonBoatRace"});
    }

    preload() {
        //this.load.image('loading', '../../../media/images/loading.jpg');
        this.add.image(0,0, 'loading').setOrigin(0,0);
        this.load.image('boat', '../../../media/images/dboat.png');
        this.load.image('background', '../../../media/images/background.jpg');
        this.load.image('scenery', '../../../media/images/scenery2.jpg');
        this.load.image('message_frame', '../../../media/images/gameoverbackground.png');
        this.load.atlas('dboat', '../../../media/images/boat_spritesheetsmaller.png', '../../../media/images/boat_spritesheetsmaller.json');
        this.load.atlas('enemy1', '../../../media/images/boat_spritesheetsmaller1.png', '../../../media/images/boat_spritesheetsmaller1.json');
        this.load.atlas('enemy2', '../../../media/images/boat_spritesheetsmaller2.png', '../../../media/images/boat_spritesheetsmaller2.json');
        this.load.atlas('enemy3', '../../../media/images/boat_spritesheetsmaller3.png', '../../../media/images/boat_spritesheetsmaller3.json');
        this.load.image('coin', '../../../media/images/coin.png');
        this.load.image('coin_disabled', '../../../media/images/coin_disabled.png');
        this.load.image('spark', '../../../media/images/spark.png')
        
        // button images

        this.load.image('unclicked', '../../../media/images/unclicked.png')
        this.load.image('l_unclicked', '../../../media/images/l_unclicked.png')
        this.load.image('hover', '../../../media/images/hover.png')
        this.load.image('l_hover', '../../../media/images/l_hover.png')
        this.load.image('mousedown', '../../../media/images/mousedown.png')
        this.load.image('l_mousedown', '../../../media/images/l_mousedown.png')
        this.load.image('false', '../../../media/images/false.png')
        this.load.image('l_false', '../../../media/images/l_false.png')
        this.load.image('correct', '../../../media/images/correct.png')
        this.load.image('l_correct', '../../../media/images/l_correct.png')

    }

    create() {

        initialize();

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

        this.cameras.main.setSize(800,350).setPosition(0,250).setScroll(0,250);

        ui.cams = {
            raceCam: this.cameras.add(0, 0, 800, 250).setOrigin(0,0.6),
            msgCam: this.cameras.add(0, 0, 800, 600).setOrigin(0,0).setScroll(0,1000).setVisible(true),
            dim: (cameraArray) => {
                this.tweens.add({
                    targets: cameraArray,
                    alpha: 0.3,
                    ease: 'Power1',
                    duration: 600
                });
            },
            undim: (cameraArray) => {
                this.tweens.add({
                    targets: cameraArray,
                    alpha: 1,
                    ease: 'Power1',
                    duration: 600
                });
            }
        };
        

        var addButton = (size, x, y, displayText) => {
            if (size == 'mini') {
                var result = {
                    button: this.add.sprite(x, y, 'unclicked').setScale(0.3,0.3).setInteractive(),
                    displayText: this.add.text(x, y, displayText, defaultFont).setOrigin(0.5,0.5)
                };
                result.displayText.setStyle({fontSize:'20px'});
                result.button.on('pointerover', () => {
                    if (result.button.texture.key == 'unclicked') {
                        result.button.setTexture('hover');
                    }
                });
                result.button.on('pointerout', () => {
                    if (result.button.texture.key == 'hover') {
                        result.button.setTexture('unclicked');
                    }
                });
                result.button.on('pointerdown', () => {
                    result.button.setTexture('mousedown');
                });
            } else if (size == 'small') {
                var result = {
                    button: this.add.sprite(x, y, 'unclicked').setScale(0.5,0.5).setInteractive(),
                    displayText: this.add.text(x, y, displayText, defaultFont).setOrigin(0.5,0.5)
                };
                result.button.on('pointerover', () => {
                    if (result.button.texture.key == 'unclicked') {
                        result.button.setTexture('hover');
                    }
                });
                result.button.on('pointerout', () => {
                    if (result.button.texture.key == 'hover') {
                        result.button.setTexture('unclicked');
                    }
                });
                result.button.on('pointerdown', () => {
                    result.button.setTexture('mousedown');
                });
            } else if (size == 'big') {
                var result = {
                    button: this.add.sprite(x, y, 'l_unclicked').setScale(0.5,0.5).setInteractive(),
                    displayText: this.add.text(x, y, displayText, defaultFont).setOrigin(0.5,0.5)
                };
                result.button.on('pointerover', () => {
                    if (result.button.texture.key == 'l_unclicked') {
                        result.button.setTexture('l_hover');
                    }
                });
                result.button.on('pointerout', () => {
                    if (result.button.texture.key == 'l_hover') {
                        result.button.setTexture('l_unclicked');
                    }
                });
                result.button.on('pointerdown', () => {
                    result.button.setTexture('l_mousedown');
                });
            }
            return result;
        }

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
                            state.phase = "race";
                            state.clock.elapsed = 0;
                            ui.start.displayText.text = "GO!";
                            ui.opponent.team[0].play('paddleforever1');
                            ui.opponent.team[1].play('paddleforever2');
                            ui.opponent.team[2].play('paddleforever3');
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


        ui.background = this.add.image(0,0, 'background').setOrigin(0,0);

        ui.message = {
            background: this.add.image(1200, 1300, 'message_frame'),
            displayText: [
                this.add.text(1200, 1200, "You came 2nd!", themeFont).setOrigin(0.5, 0.5),
                this.add.text(1200, 1350, "Time: 20.05s", themeFont).setOrigin(0.5, 0.5),
                this.add.text(1200, 1400, "Personal best: 16.75s", smallFont).setOrigin(0.5, 0.5),
            ],
            coins: [
                this.add.image(1100, 1275, 'coin_disabled').setScale(0.6),
                this.add.image(1200, 1275, 'coin_disabled').setScale(0.6),
                this.add.image(1300, 1275, 'coin_disabled').setScale(0.6),
            ],
            buttons: [
                addButton('mini', 1050, 1450, 'Replay'),
                addButton('mini', 1200, 1450, 'Next Level'),
                addButton('mini', 1350, 1450, 'Menu')
            ],
            spark: this.add.particles('spark').createEmitter({
                x: 300,
                y: 1275,
                speed: { min: -200, max: 200 },
                angle: { min: 0, max: 360 },
                scale: { start: 1, end: 0 },
                blendMode: 'SCREEN',
                lifespan: 600,
                gravityY: 0
            }).stop()
        };

        ui.message.allElements = [ui.message.background]
        for (let i=0; i<3; i++) {
            ui.message.allElements.push(
                ui.message.displayText[i], ui.message.coins[i], ui.message.buttons[i].button, ui.message.buttons[i].displayText
            )
        }

        ui.message.flyIn = () => {
            this.tweens.add({
                targets: ui.message.allElements,
                x: '-=800',
                ease: 'Power1',
                duration: 600
            });
        }

        ui.message.flyOut = () => {
            this.tweens.add({
                targets: ui.message.allElements,
                x: '+=800',
                ease: 'Power1',
                duration: 600
            });
        }

        ui.question = {
            // background: this.add.rectangle(60, 280, 370, 130, 0xccf7f0).setOrigin(0,0),
            displayText: this.add.text(185, 335, cards.question[quiz.prompt], largeFont).setOrigin(0.5,0.5)
        };

        ui.answer = {
            displayText: [],
            buttons: [],
            buttonLocations: [[210, 450],[210, 525],[500, 450],[500, 525]]
        };

        for (let i = 0; i < quiz.numOfAnswers; i++) {
            ui.answer.buttons.push(addButton(
                'big', ui.answer.buttonLocations[i][0], ui.answer.buttonLocations[i][1], cards.answers[i][quiz.answerFormat]));
            ui.answer.buttons[i].button.on('pointerdown', function () {
                if (state.phase == "race") {
                    state.check = checkUserInput(i);
                    if (state.check) {
                        ui.energy.boost += 15;
                        ui.dboat.anims.play('paddle', true);
                    } else {
                        ui.energy.boost -= 10;
                    }    
                }
            });
        }


        ui.timer = {
            // background: this.add.rectangle(445, 300, 150, 110, 0x123456).setOrigin(0,0),
            displayText: [
                this.add.text(440, 340, "", darkFont).setOrigin(0.5,0.5),
                this.add.text(598, 340, "", themeFont).setOrigin(0.5,0.5),
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

        ui.energy = {
            level: 0,
            bar: this.add.rectangle(728, 531, 52, 2, 0xff0000),                                                                                                                                                                 
            displayText: this.add.text(726, 495, "", defaultFont).setOrigin(0.5,0)
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
        
        ui.scenery = this.add.image(0, 0, 'scenery').setOrigin(0,0);
        
        ui.opponent = {
            team: [
                this.add.sprite(100,40,'enemy1','Boat1.png').setScale(0.3,0.3).setFlip(true,false),
                this.add.sprite(100,80,'enemy2','Boat1.png').setScale(0.3,0.3).setFlip(true,false),
                this.add.sprite(100,120,'enemy3','Boat1.png').setScale(0.3,0.3).setFlip(true,false)
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

        ui.dboat = this.add.sprite(100,160,'dboat','Boat1.png').setScale(0.3,0.3).setFlip(true,false);

        ui.dboat.on('madeSomeProgress', () => {
            ui.cams.raceCam.startFollow(ui.dboat, false, 1, 1, 250, 10);
            ui.dboat.isFollowed = true;
        });

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
    }

    update() {
        if (state.phase == "race") {
            ui.timer.displayText[0].text = (state.secondsElapsed + state.clock.getProgress()).toFixed(2).toString();
            ui.timer.displayText[1].text = ui.timer.findPlace();

            ui.energy.update();

            ui.energy.displayText.text = Math.floor(ui.energy.level).toString();
            ui.energy.bar.height = ui.energy.level * 2.4;
            ui.energy.bar.y = 531 - ui.energy.bar.height;
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
                state.phase = 'gameover';
            }
        }
        
        if (state.phase == 'gameover') {
            ui.opponent.team.forEach(element => {
                element.setVisible(false);
            });
            var place = 1;
            ui.opponent.team.forEach(element => {
                if (element.x > ui.dboat.x) {
                    place += 1;
                };
            });
            var coins = 4-place;

            ui.answer.buttons.forEach((element) => {
                element.button.removeInteractive();
            });

            ui.message.displayText[0].text = "You came " + ui.timer.displayText[1].text + "!"
            ui.message.displayText[1].text = "Time: " + ui.timer.displayText[0].text + "s"
            ui.message.flyIn();
            ui.cams.dim([ui.cams.raceCam, this.cameras.main])
            state.phase = 'paused';
            ui.message.buttons[0].button.on('pointerdown', () => {
                this.anims.remove('paddle');
                this.anims.remove('paddleforever1');
                this.anims.remove('paddleforever2');
                this.anims.remove('paddleforever3');
                this.scene.restart('DragonBoatRace');
            })
            if (coins > 0) {
                var counter = 0
                this.time.addEvent({
                    delay: 2000,
                    callback: () => {
                        if (counter == 0) {
                            ui.message.spark.start();
                        } else {
                            ui.message.coins[counter-1].setTexture('coin');
                            if (ui.message.coins[counter]) {
                                ui.message.spark.setPosition(ui.message.coins[counter].x,ui.message.coins[counter].y);
                            } 
                            if (counter == coins) {
                                ui.message.spark.stop();
                            }    
                        }
                        counter += 1;
                    },
                    callbackScope: this,
                    repeat: coins
                });
            }
        }

        // Pause game (debug only)

        this.input.keyboard.on('keydown_P', () => {
            if (state.phase == 'race') {
                ui.message.flyIn();
                ui.cams.dim([ui.cams.raceCam, this.cameras.main])
                setTimeout(() => {
                    state.phase = 'paused';
                }, 800);
            } else if (state.phase == 'paused') {
                ui.message.flyOut();
                ui.cams.undim([ui.cams.raceCam, this.cameras.main])
                setTimeout(() => {
                    state.phase = 'race';
                }, 800);
            }
        });    
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

    preload() {
        this.load.image('splash', '../../../media/images/splash.jpg');
        this.load.image('unclicked', '../../../media/images/unclicked.png')
        this.load.image('hover', '../../../media/images/hover.png')
        this.load.image('mousedown', '../../../media/images/mousedown.png')
        this.load.image('loading', '../../../media/images/loading.jpg');
    }

    create() {

        this.add.image(0, 0, 'splash').setOrigin(0,0);

        var addButton = (size, x, y, displayText) => {
            if (size == 'small') {
                var result = {
                    button: this.add.sprite(x, y, 'unclicked').setScale(0.5,0.5).setInteractive(),
                    displayText: this.add.text(x, y, displayText, defaultFont).setOrigin(0.5,0.5)
                };
                result.button.on('pointerover', () => {
                    if (result.button.texture.key == 'unclicked') {
                        result.button.setTexture('hover');
                    }
                });
                result.button.on('pointerout', () => {
                    if (result.button.texture.key == 'hover') {
                        result.button.setTexture('unclicked');
                    }
                });
                result.button.on('pointerdown', () => {
                    result.button.setTexture('mousedown');
                });
            } else if (size == 'big') {
                var result = {
                    button: this.add.sprite(x, y, 'l_unclicked').setScale(0.5,0.5).setInteractive(),
                    displayText: this.add.text(x, y, displayText, defaultFont).setOrigin(0.5,0.5)
                };
                result.button.on('pointerover', () => {
                    if (result.button.texture.key == 'l_unclicked') {
                        result.button.setTexture('l_hover');
                    }
                });
                result.button.on('pointerout', () => {
                    if (result.button.texture.key == 'l_hover') {
                        result.button.setTexture('l_unclicked');
                    }
                });
                result.button.on('pointerdown', () => {
                    result.button.setTexture('l_mousedown');
                });
            }
            return result;
        }

        var startButton = addButton('small', 290, 250, "Start Game")
        var instructions = addButton('small', 510, 250, "Instructions")
        
        startButton.button.on('pointerdown', () => {
            this.add.image(0,0, 'loading').setOrigin(0,0);
            this.scene.start('DragonBoatRace');
        });
    }
}