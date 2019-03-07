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

        ui.cams = addCameras(this);
        ui.cams.msgCam.setVisible(false);

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

        ui.removeAnimations = () => {
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
            reminderTitle: this.add.text(680, 310, "Hints", barFont).setOrigin(0.5, 0.5),
            reminders: [
                this.add.text(680, 360, "", newFont).setOrigin(0.5, 0.5).setAlpha(0),
                this.add.text(680, 360, "", newFont).setOrigin(0.5, 0.5).setAlpha(0),
                this.add.text(680, 360, "", newFont).setOrigin(0.5, 0.5).setAlpha(0),
            ]
        }

        ui.shiftDown = (text) => {
            this.tweens.add({
                targets: text,
                y: '+=40',
                ease: 'Power1',
                duration: 300
            });
        }

        ui.fadeIn = (obj) => {
            obj.y = 360;
            this.tweens.add({
                targets: obj,
                alpha: 1,
                ease: 'Power1',
                duration: 300
            });
        }

        ui.fadeOut = (obj) => {
            this.tweens.add({
                targets: obj,
                alpha: 0,
                ease: 'Power1',
                duration: 300,
                onComplete: (obj) => {
                    ui.fadeIn(obj);
                }
            });
        }

        ui.addHint = (pinyin, character) => {
            ui.barText.reminders.forEach((element) => {
                if (element.alpha == 1) {
                    if (element.y < 440) {
                        ui.shiftDown(element);
                    } else {
                        ui.fadeOut(element);
                    }
                }
            });
            function newtext() {
                for (let i=0;i<3;i++) {
                    if (ui.barText.reminders[i].alpha == 0) {
                        ui.barText.reminders[i].text = pinyin + " " + character;
                        ui.fadeIn(ui.barText.reminders[i]);
                        break
                    }            
                }
            }
            setTimeout(newtext, 360);
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
                state.gameOver();
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

        // create gameover dialog box

        ui.message = gameEndDialog('FallingTones', this);

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

        state.gameOver = () => {
            var coins = Math.floor(user.score / 30);
            if (coins > 3) {
                coins = 3;
            }
            ui.message.displayText[0].text = "You scored: " + user.score.toString() + "!";
            ui.cams.msgCam.setVisible(true);
            ui.message.flyIn();
            ui.cams.dim([this.cameras.main]);        

            if (coins > 0) {
                ui.message.sparkle(coins);
            }

            if (user.topScore < user.score) {
                user.topScore = user.score;
            }

            // AJAX POST score to database

            var CSRFtoken = $('input[name=csrfmiddlewaretoken]').val();
            $.post('../../../lessons/ajax/gameover/', {
                csrfmiddlewaretoken: CSRFtoken,
                element_name: "falling tones",
                score: user.score,
                lesson: importData.lesson,
                award: coins.toString() + " coins"
            });
        }
    }

    update() {
        
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
                var recentBubble = {
                    character: ui.bubble.character.text,
                    pinyin: toneConvert(ui.bubble.pinyin.text, cards.question.tone - 1)
                }
                var correct = checkToneBucket(user.chosenBucket);
                if (!correct) {
                    if (ui.wallHeight > 110) {
                        ui.addHint(recentBubble.character, recentBubble.pinyin);
                        ui.raiseWall();
                        ui.newBubble();
                    } else {
                        state.phase = "gameover";
                        state.gameOver();
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
                        state.gameOver();
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
                {type: "image", name: "ft0", file: "ft0.jpg"},
                {type: "image", name: "ft1", file: "ft1.jpg"},
                {type: "image", name: "ft2", file: "ft2.jpg"},
                {type: "image", name: "ft3", file: "ft3.jpg"},
                {type: "image", name: "ft4", file: "ft4.jpg"},
                {type: "image", name: "ft5", file: "ft5.jpg"},
                {type: "image", name: "iarrow", file: "instruction_arrow.png"},
                {type: "image", name: "idialog", file: "instruction_dialog.png"},
            ]
        }
        
        myLoad(loadConfig, this);
        myLoad("buttons", this);
    }

    create() {

        if (typeof user.topScore == "undefined") {
            user.topScore = importData.top_score;
        }
        this.add.image(0,0, 'splash').setOrigin(0,0);
        this.add.text(595, 438, user.topScore.toString(), sketchyFont);
        var startButton = addButton('small', 290, 300, "Start Game", this);
        var instructions = addButton('small', 510, 300, "Instructions", this);
        instructions.button.on('pointerdown', () => {
            runInstructions('fallingTones', this);
        });

        startButton.button.on('pointerdown', () => {
            this.scene.start('FallingTones');
        });

    }
}