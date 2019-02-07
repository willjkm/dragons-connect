class FallingTones extends Phaser.Scene {
    constructor() {
        super({key:"FallingTones"});
    }

    preload() {
        this.add.image(0,0, 'loading').setOrigin(0,0);
        var loadConfig = {
            mediaURL: "../../../media/images/",
            loadObjects: [
                {type: "image", name: "bowls", file: "bowls.png"},
                {type: "image", name: "bubble", file: "bubble.png"},
                {type: "atlas", name: "pop", file: "pop.png", json: "pop.json"},
                {type: "image", name: "wall", file: "bowlsandwall.png"},
                {type: "image", name: "background", file: "background_ft.jpg"},
                {type: "image", name: "message_frame", file: "gameoverbackground2.png"},
                {type: "image", name: "coin", file: "coin.png"},
                {type: "image", name: "coin_disabled", file: "coin_disabled.png"},
                {type: "image", name: "spark", file: "spark.png"},
            ]
        }
        myLoad(loadConfig, this);
    }

    create() {
        initialize();

        ui.cams = {
            msgCam: this.cameras.add(0, 0, 800, 600).setOrigin(0,0).setScroll(0,2000).setVisible(true),
            dim: (cameraArray) => {
                this.tweens.add({
                    targets: cameraArray,
                    alpha: 0.3,
                    ease: 'Power1',
                    duration: 600
                });
            }
        };

        var animationFrames = [];

        for (let i = 1; i < 10; i++) {
            var str = 'pop' + i.toString() + '.png';
            animationFrames.push({key: 'pop', frame: str})
        }

        this.anims.create({
            key: 'pop',
            frames: animationFrames,
            frameRate: 20,
            repeat: 0
        });

        var removeAnimations = () => {
            this.anims.remove('pop');
        }

        ui.wallHeight = 430;
        ui.background = this.add.image(0,0, 'background').setOrigin(0,0);
        ui.bowls = this.add.image(0,ui.wallHeight, 'bowls').setOrigin(0,0);
        ui.barText = {
            title: this.add.text(680, 60, "Score", barFont).setOrigin(0.5, 0.5),
            score: this.add.text(680, 120, "0", newFontLarger).setOrigin(0.5, 0.5),
            levelTitle: this.add.text(680, 180, "Level", barFont).setOrigin(0.5, 0.5),
            level: this.add.text(680, 240, "1", newFontLarger).setOrigin(0.5, 0.5),
        }
        ui.bubble = {
            sprite: this.physics.add.sprite(50, 10, 'bubble').setOrigin(0,0).setScale(0.3).setCollideWorldBounds(true),
            character: this.add.text(95, 45, cards.question["character"], darkFont).setOrigin(0.5, 0.5),
            pinyin: this.add.text(95, 75, cards.question["pinyin"], newFont).setOrigin(0.5, 0.5)
        }

        ui.bubble.setVelocityX = (x) => {
            ui.bubble.sprite.setVelocityX(x);
            ui.bubble.character.x = ui.bubble.sprite.x+45;
            ui.bubble.pinyin.x = ui.bubble.sprite.x+45;
        }
        ui.bubble.setVelocityY = (y) => {
            ui.bubble.sprite.setVelocityY(y);
            if (ui.bubble.pinyin.visible) {
                ui.bubble.character.y = ui.bubble.sprite.y+35;
            } else {
                ui.bubble.character.y = ui.bubble.sprite.y+45;
            }
            ui.bubble.pinyin.y = ui.bubble.sprite.y+65;
        }
        ui.bubble.sprite.on('animationcomplete', () => {
            if (ui.wallHeight > 110) {
                ui.raiseWall();
                ui.newBubble();
            } else {
                state.phase = "gameover";
            }
        });
        ui.newBubble = () => {
            ui.bubble.sprite.setTexture('bubble');
            if (user.score < 150) {
                ui.bubble.pinyin.setVisible(true);
            }
            ui.bubble.character.setVisible(true);
            ui.bubble.sprite.y = 10;
            ui.bubble.character.y = 45;
            ui.bubble.pinyin.y = 75;
            var rand = Math.floor(Math.random()*480)
            ui.bubble.sprite.x = rand;
            ui.bubble.character.x = rand + 45;
            ui.bubble.pinyin.x = rand + 45;
            state.phase = "play"
        }

        // draw gameover dialog box

        ui.message = {
            background: this.add.image(1200, 2300, 'message_frame'),
            displayText: [
                this.add.text(1200, 2200, "", themeFont).setOrigin(0.5, 0.5),
                this.add.text(1200, 2350, "", themeFont).setOrigin(0.5, 0.5),
                this.add.text(1200, 2400, "", smallFont).setOrigin(0.5, 0.5),
            ],
            coins: [
                this.add.image(1100, 2275, 'coin_disabled').setScale(0.6),
                this.add.image(1200, 2275, 'coin_disabled').setScale(0.6),
                this.add.image(1300, 2275, 'coin_disabled').setScale(0.6),
            ],
            buttons: [
                addButton('mini', 1050, 2450, 'Replay', this),
                addButton('mini', 1200, 2450, 'Next Level', this),
                addButton('mini', 1350, 2450, 'Menu', this)
            ],
            spark: this.add.particles('spark').createEmitter({
                x: 300,
                y: 2275,
                speed: { min: -200, max: 200 },
                angle: { min: 0, max: 360 },
                scale: { start: 1, end: 0 },
                blendMode: 'SCREEN',
                lifespan: 600,
                gravityY: 0
            }).stop()
        };

        ui.message.buttons[0].button.on('pointerdown', () => {
            removeAnimations();
            this.scene.restart('FallingTones');
        })

        ui.message.buttons[1].button.setVisible(false);
        ui.message.buttons[1].displayText.setVisible(false);

        ui.message.buttons[2].button.on('pointerdown', () => {
            removeAnimations();
            this.scene.stop('FallingTones');
            this.scene.start('StartScene');
        })

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

        ui.wall = this.add.image(0,430, 'wall').setOrigin(0,0);
        ui.raiseWall = () => {
            ui.wallHeight -= 40;
            this.tweens.add({
                targets: [ui.wall, ui.bowls],
                y: '-=40',
                ease: 'Power1',
                duration: 600
            });
        }
        ui.debugText = this.add.text(700, 100, "", darkFont);
        ui.cursors = this.input.keyboard.createCursorKeys();
        state.phase = "play";
        state.level = 1;
        state.spin = 0;
        user.score = 0;
        user.chosenBucket = 0;
        user.findBucket = (x) => {
            if (x < 71) {
                return 1
            } else if (x < 211) {
                return 2
            } else if (x < 351) {
                return 3
            } else {
                return 4
            }
        };
    }

    update() {
        
        // update bubble position

        ui.bubble.setVelocityX(0);
        ui.bubble.setVelocityY(0);

        if (state.phase == "play") {
            var speed = 1 + (state.level - 1) / 3;
            if (speed > 3) {
                speed = 3;
            }
            ui.bubble.sprite.y += speed;
            ui.bubble.character.y += speed;
            ui.bubble.pinyin.y += speed;
            if (state.level >= 10) {
                state.spin += 0.1
                ui.bubble.character.setRotation(state.spin);
            }
            if (ui.bubble.sprite.y > ui.wallHeight + 15) {
                user.chosenBucket = user.findBucket(ui.bubble.sprite.x);
                var correct = checkToneBucket(user.chosenBucket);
                if (!correct) {
                    if (ui.wallHeight > 110) {
                        ui.raiseWall();
                        ui.newBubble();
                    } else {
                        state.phase = "gameover";
                    }
                } else {
                    user.score += 10;
                    if (user.score % 30 == 0) {
                        state.level += 1
                        ui.barText.level.text = state.level.toString();
                    }
                    if (user.score == 150) {
                        ui.bubble.pinyin.setVisible(false);
                        ui.bubble.character.setStyle({fontSize: "40px"});
                    }
                    if (user.score == 500) {
                        state.phase = "gameover";
                    }
                    ui.barText.score.text = user.score.toString();
                    if (state.phase !== "gameover") {
                        ui.newBubble();
                    }
                }
            }
            if (ui.bubble.sprite.y > ui.wallHeight - 75) {
                var offset = (ui.bubble.sprite.x - 25) % 140
                if (offset <= 45) {
                    ui.bubble.setVelocityX(-offset * speed);
                } else if (offset >= 95) {
                    ui.bubble.setVelocityX((140-offset)*speed);
                } else {
                    state.phase = "paused";
                    ui.bubble.pinyin.setVisible(false);
                    ui.bubble.character.setVisible(false);
                    ui.bubble.sprite.play('pop');
                }
            }
        }

        // process user input

        if (ui.bubble.sprite.y < ui.wallHeight - 75) {
            if (ui.cursors.left.isDown) {
                ui.bubble.setVelocityX(-200 * speed);
            } else if (ui.cursors.right.isDown) {
                if (ui.bubble.sprite.x < 480) {
                    ui.bubble.setVelocityX(200 * speed);
                }
            } else if (ui.cursors.down.isDown) {
                ui.bubble.setVelocityY(200);
            }
        }

        if (state.phase == "gameover") {
            state.phase = 'paused'; // Game over code is executed only once
            var coins = Math.floor(user.score / 30);
            if (coins > 3) {
                coins = 3;
            }
            ui.message.displayText[0].text = "You scored: " + user.score.toString() + "!";
            ui.message.displayText[1].text = "";
            ui.message.displayText[2].text = "";
            ui.message.flyIn();
            ui.cams.dim([ui.cams.raceCam, this.cameras.main]);        
            
            // animate coin sparkles

            if (coins > 0) {
                var counter = 0;
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
                {type: "image", name: "splash", file: "splashscreen.jpg"},
                {type: "image", name: "loading", file: "loading2.jpg"},
            ]
        }
        
        myLoad(loadConfig, this);
        myLoad("buttons", this);
    }

    create() {
        this.add.image(0,0, 'splash').setOrigin(0,0);
        var startButton = addButton('small', 290, 300, "Start Game", this);
        var instructions = addButton('small', 510, 300, "Instructions", this);
        startButton.button.on('pointerdown', () => {
            this.scene.start('FallingTones');
        });

    }
}