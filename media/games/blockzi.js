class GameScene extends Phaser.Scene {
    constructor() {
        super({key:"GameScene"});
    }

    preload() {
        this.add.image(0,0, 'loading').setOrigin(0,0);
        this.add.text(400, 300, "Loading", themeFont).setOrigin(0.5, 0.5);

        var loadConfig = {
            mediaURL: "../../../media/images/",
            loadObjects: [
                {type: "image", name: "background", file: "blockzi_new.jpg"},
                {type: "image", name: "message_frame", file: "gameoverbackground2.png"},
                {type: "image", name: "bar", file: "bar.png"},
                {type: "image", name: "b1", file: "b1.png"},
                {type: "image", name: "b2", file: "b2.png"},
                {type: "image", name: "b3", file: "b3.png"},
                {type: "image", name: "b4", file: "b4.png"},
                {type: "image", name: "b5", file: "b5.png"},
                {type: "image", name: "b6", file: "b6.png"},
                {type: "image", name: "powerup", file: "powerup.png"},
                {type: "image", name: "power0", file: "power0.png"},
                {type: "image", name: "power1", file: "power1.png"},
                {type: "image", name: "power2", file: "power2.png"},
                {type: "image", name: "power3", file: "power3.png"},
                {type: "image", name: "power4", file: "power4.png"},
                {type: "image", name: "power5", file: "power5.png"},
                {type: "image", name: "power6", file: "power6.png"},
                {type: "image", name: "b_hover", file: "b_hover.png"},
                {type: "image", name: "stone", file: "stone.png"},
                {type: "image", name: "spark", file: "spark.png"},
                {type: "image", name: "coin", file: "coin.png"},
                {type: "image", name: "nowfind", file: "nowfind.png"},
                {type: "image", name: "coin_disabled", file: "coin_disabled.png"},
                {type: "image", name: "music_on", file: "music_on.png"},
                {type: "image", name: "music_off", file: "music_off.png"},
                {type: "image", name: "fx_on", file: "fx_on.png"},
                {type: "image", name: "fx_off", file: "fx_off.png"}
            ]
        }
        myLoad(loadConfig, this);
        var soundLoadConfig = {
            mediaURL: "../../../media/sounds/",
            loadObjects: [
                {type: "sound", name: "sparkle", file: "sparkle.ogg"},
                {type: "sound", name: "wrong", file: "wrong.ogg"},
                {type: "sound", name: "powerup", file: "getpowerup.ogg"},
                {type: "sound", name: "clear", file: "powerup.ogg"},
                {type: "sound", name: "deploy", file: "success.ogg"},
                {type: "sound", name: "impact", file: "impact.ogg"},
                {type: "sound", name: "music", file: "trailer.ogg"}
            ]
        }
        myLoad(soundLoadConfig, this);
    }

    create() {
        initialize();

        ui.perfect = true;

        ui.sound = {
            wrong: this.sound.add('wrong'),
            powerup: this.sound.add('powerup'),
            deploy: this.sound.add('deploy'),
            impact: this.sound.add('impact'),
            clear: this.sound.add('clear'),
            sparkle: this.sound.add('sparkle')
        }

        ui.music = this.sound.add('music');

        ui.music.setLoop(true);
        ui.music.play();

        ui.allCharacters = getCharacterData()

        ui.data = []

        ui.allCharacters.forEach((vocab) => {
            if (vocab.lesson == importData.lesson) {
                ui.data.push(vocab);
            }
        })

        ui.getVocab = () => {
            var choice = Math.floor(Math.random()*ui.data.length);
            return ui.data[choice];
        };

        ui.newQuestionList = (recentQuestion) => {
            var arr = ui.data.slice();
            shuffleArray(arr);
            if (arr[0] == recentQuestion) {
                [arr[arr.length-1], arr[0]] = [arr[0], arr[arr.length-1]];
            }
            return arr;
        }

        ui.questionList = [];

        ui.background = this.add.image(0,0, 'background').setOrigin(0,0);

        ui.prompt = {
            vocab: ui.getVocab()
        }

        ui.prompt.displayText = this.add.text(675, 130, ui.prompt.vocab.english, darkFont).setOrigin(0.5, 0.5),

        ui.getNextQuestion = (recentQuestion) => {
            var nextQuestion = null;
            var candidateQuestions = [];
            var availableVocab = [];
            var counter = 0
            while (!nextQuestion) {
                counter++
                ui.blocks.forEach((column) => {
                    column.forEach((block) => {
                        if (!block.locked) {
                            if (availableVocab.indexOf(block.vocab) == -1) {
                                availableVocab.push(block.vocab);
                            }    
                        }
                    });
                });
                ui.questionList.forEach((vocab) => {
                    if (vocab != recentQuestion) {
                        if (availableVocab.indexOf(vocab) != -1) {
                            candidateQuestions.push(vocab);
                        }
                    }
                });
                if (candidateQuestions.length) {
                    nextQuestion = candidateQuestions[Math.floor(Math.random()*candidateQuestions.length)]
                    var position = ui.questionList.indexOf(nextQuestion);
                    var array1 = ui.questionList.slice(0, position);
                    var array2 = ui.questionList.slice(position + 1);
                    ui.questionList = array1.concat(array2);        
                } else {
                    ui.questionList = ui.newQuestionList(ui.prompt.vocab);
                }
                if (!availableVocab.length) {
                    ui.questionList = ui.newQuestionList(ui.prompt.vocab);
                    nextQuestion = ui.questionList[0]
                }
                if (counter > 200) {
                    nextQuestion = ui.data[0]
                }
            }
            return nextQuestion;
        }

        ui.timer = 60
        ui.newScore = 180
        ui.scoreText = this.add.text(675, 280, ui.newScore.toString(), darkFont).setOrigin(0.5, 0.5),
        ui.displayCoins = [
            this.add.image(610,325, 'coin').setScale(0.4),
            this.add.image(675,325, 'coin').setScale(0.4),
            this.add.image(740,325, 'coin').setScale(0.4),
        ]
        ui.coinsToWin = 3;

        ui.powerUp = this.add.image(675,480, 'power0').setScale(0.4);
        ui.powerUp.update = (power) => {
            if (power > 6) {
                power = 6;
            }
            var newTexture = 'power' + power;
            ui.powerUp.setTexture(newTexture);
        }

        // ui.bar = {
        //     level: 30,
        //     rect: this.add.rectangle(595, 165, 160, 10, 0xbada55).setOrigin(0,0)
        // } 

        ui.blocks = [[],[],[],[],[],[]];
        ui.blocksOnScreen = 0
        ui.totalBlocks = 0
        ui.blockGroup = this.physics.add.group()


        ui.addBlock = (column) => {
            ui.totalBlocks++;
            ui.blocksOnScreen++;
            var color = Math.floor(Math.random()*6)+1;
            var texture = 'b' + color.toString();
            var newBlock = this.physics.add.sprite(105 + (75*column), -100, texture).setInteractive();
            newBlock.vocab = ui.getVocab()
            newBlock.blockText = this.add.text(-100, -100, newBlock.vocab.character, darkFont).setOrigin(0.5, 0.5);
            newBlock.column = column;
            newBlock.locked = false;
            newBlock.on('pointerover', () => {
                if (!newBlock.locked) {
                    newBlock.oldTexture = newBlock.texture.key
                    newBlock.setTexture('b_hover');    
                }
            })
            newBlock.on('pointerout', () => {
                if (!newBlock.locked) {
                    newBlock.setTexture(newBlock.oldTexture);
                }
            })
            newBlock.on('pointerdown', () => {
                if (!ui.exploding) {
                    ui.processInput(newBlock);
                }
            })
            if (typeof ui.blocks[column] !== 'undefined') {
                ui.blocks[column].push(newBlock);
                ui.blockGroup.add(newBlock);    
            }
        }

        ui.addPowerUp = (column) => {
            if (ui.soundControl.fxEnabled) {
                ui.sound.powerup.play()
            }
            user.power = 0
            setTimeout(() => {
                ui.powerUp.update(user.power);
            }, 1000);
            ui.blocksOnScreen++;
            var newPowerUp = this.physics.add.sprite(105 + (75*column), -100, "powerup").setInteractive();
            newPowerUp.column = column;
            newPowerUp.on('pointerover', () => {
                newPowerUp.setTexture('b_hover');    
            })
            newPowerUp.on('pointerout', () => {
                newPowerUp.setTexture("powerup");
            })
            newPowerUp.on('pointerdown', () => {
                if (!ui.exploding) {
                    ui.deployPowerUp(newPowerUp);
                }
            })
            ui.blocks[column].push(newPowerUp);
        }

        ui.exploding = false;

        ui.deployPowerUp = (powerUp) => {
            if (ui.soundControl.fxEnabled) {
                ui.sound.deploy.play();
            }
            ui.exploding = true;
            var velocities = [
                [0,400],
                [0,-400],
                [400,0],
                [-400,0]
            ]
            
            for (let i=0;i<4;i++) {
                ui.explosion[i].leadSprite.x = powerUp.x;
                ui.explosion[i].leadSprite.y = powerUp.y;
                ui.explosion[i].leadSprite.setVelocityX(velocities[i][0]);
                ui.explosion[i].leadSprite.setVelocityY(velocities[i][1]);
                ui.explosion[i].leadSprite.setVisible(true);
                ui.explosion[i].trail.start();
            }
            ui.removeBlock(powerUp);
            setTimeout(() => {
                for (let i=0;i<4;i++) {
                    ui.explosion[i].leadSprite.x = -100
                    ui.explosion[i].leadSprite.y = -100
                    ui.explosion[i].leadSprite.setVelocityX(0);
                    ui.explosion[i].leadSprite.setVelocityY(0);
                    ui.explosion[i].leadSprite.setVisible(false);
                    ui.explosion[i].trail.stop();
                    ui.exploding = false;
                }    
            }, 1000)
        }

        ui.chooseColumn = () => {
            var availableColumns = [];
            ui.blocks.forEach((column, index) => {
                if (column.length < 6) {
                    availableColumns.push(index);
                }
            })
            if (availableColumns.length == 0) {
                clearInterval(ui.playInterval);
                ui.coinsToWin = 0;
                state.gameOver();
            } else {
                var column = availableColumns[Math.floor(Math.random()*availableColumns.length)]
                return column    
            }
        }

        ui.processInput = (block) => {
            if (!block.locked) {
                if (block.vocab == ui.prompt.vocab) {
                    //user.score += 10;
                    user.power += 1;
                    ui.powerUp.update(user.power);
                    if (user.power == 6) {
                        ui.addPowerUp(ui.chooseColumn());
                    }
                    // ui.scoreText.text = user.score;
                    ui.removeBlock(block);
                    // if the player got all of the prompt blocks, present "Clear" message and move to next prompt
                    var moreOutThere = false;
                    ui.blocks.forEach((column) => {
                        column.forEach((b) => {
                            if (!b.locked) {
                                if (b.vocab == ui.prompt.vocab) {
                                    moreOutThere = true;
                                }
                            }
                        });
                    });
                    if (!moreOutThere) {
                        if (ui.soundControl.fxEnabled) {
                            ui.sound.clear.play();
                        }
                        //user.score += 5;
                        //ui.scoreText.text = user.score;
                        ui.nextround.dialog.setVisible(true);
                        ui.nextround.text.setVisible(true);                        
                        ui.exploding = true;
                        var recentQuestion = ui.prompt.vocab;
                        ui.prompt.vocab = ui.getNextQuestion(recentQuestion);
                        ui.prompt.displayText.text = ui.prompt.vocab.english;
                        ui.nextround.text.setText(ui.prompt.vocab.english);

                        setTimeout(() => {
                            ui.nextround.dialog.setVisible(false);
                            ui.nextround.text.setVisible(false);
                            ui.exploding = false;
                            // ui.bar.rect.width = 160;
                        }, 2000)
                    }
                } else {
                    ui.perfect = false;
                    if (ui.soundControl.fxEnabled) {
                        ui.sound.wrong.play();
                    }
                    block.locked = true;
                    block.blockText.text = "";
                    block.setTexture('stone');
                    user.power = 0;
                    //user.score -= 5;
                    if (user.score < 0) {
                        user.score = 0;
                    }
                    //ui.scoreText.text = user.score;
                    ui.powerUp.update(user.power);
                    var column = ui.chooseColumn();
                    ui.addBlock(column);
                }
            }
        }

        ui.removeBlock = (block) => {
            if (ui.soundControl.fxEnabled) {
                ui.sound.impact.play();
            }
            ui.blocksOnScreen--;
            block.disableBody(true, true);
            block.setVisible(false);
            if (typeof block.blockText !== 'undefined') {
                block.blockText.text = "";
            }
            var position = ui.blocks[block.column].indexOf(block);
            var array1 = ui.blocks[block.column].slice(0, position)
            var array2 = ui.blocks[block.column].slice(position + 1);
            ui.blocks[block.column] = array1.concat(array2);        
        }

        ui.soundControl = {
            musicToggle: this.add.sprite(700, 570, 'music_on').setInteractive().setScale(0.5),
            musicEnabled: true,
            fxToggle: this.add.sprite(750, 570, 'fx_on').setInteractive().setScale(0.5),
            fxEnabled: true
        }

        ui.soundControl.musicToggle.on('pointerdown', () => {
            if (ui.soundControl.musicEnabled) {
                ui.soundControl.musicEnabled = false;
                ui.soundControl.musicToggle.setTexture('music_off');
                ui.music.pause();
            } else {
                ui.soundControl.musicEnabled = true;
                ui.soundControl.musicToggle.setTexture('music_on');
                ui.music.resume();
            }
        });
        ui.soundControl.fxToggle.on('pointerdown', () => {
            if (ui.soundControl.fxEnabled) {
                ui.soundControl.fxEnabled = false;
                ui.soundControl.fxToggle.setTexture('fx_off');
            } else {
                ui.soundControl.fxEnabled = true;
                ui.soundControl.fxToggle.setTexture('fx_on');
            }
        });

        state.gameOver = () => {
            state.phase = "gameover";
            user.score = ui.newScore
            clearInterval(ui.playInterval);
            clearInterval(ui.timerInterval);

            // var coins = Math.floor(user.score / 30);
            // if (coins > 3) {
            //     coins = 3;
            // }
            // ui.message.displayText[0].text = "You scored: " + user.score.toString() + "!";
            // ui.cams.msgCam.setVisible(true);
            // ui.message.flyIn();
            // ui.cams.dim([this.cameras.main]);        

            // if (coins > 0) {
            //     ui.message.sparkle(coins);
            // }

            ui.nextround.dialog.setVisible(false);
            ui.nextround.text.setVisible(false);


            if (user.topScore < user.score) {
                user.topScore = user.score;
            }

            // AJAX POST score to database

            // var CSRFtoken = $('input[name=csrfmiddlewaretoken]').val();
            // $.post('../../../lessons/ajax/gameover/', {
            //     csrfmiddlewaretoken: CSRFtoken,
            //     element_name: "Blockzi",
            //     score: user.score,
            //     lesson: importData.lesson,
            //     coins: ui.coinsToWin
            // });

            // special award: finishing with no mistakes

            
            var award = [];
            if (ui.coinsToWin > 0) {
                if (ui.perfect) {                    
                    award.push("41");
                    // $.post('../../../lessons/ajax/specialaward/', {
                    //     csrfmiddlewaretoken: CSRFtoken,
                    //     element_name: "41",
                    //     lesson: importData.lesson,
                    // });    
                }
            }
            endActivity(9, this, ui.coinsToWin, user.score, "Blockzi", award);

        }


        state.phase = "starting"
        ui.cams = addCameras(this);
        ui.debugText = this.add.text(680, 310, "", defaultFont)
        ui.removeAnimations = () => {};
        user.lives = 6;
        user.score = 0;
        user.power = 0;
        ui.message = gameEndDialog('GameScene', this);

        ui.startCounter = 0;
        ui.starting = setInterval(() => {
            ui.addBlock(ui.startCounter);
            ui.startCounter += 1
            if (ui.startCounter == 6) {
                ui.startCounter = 0
            }
        }, 100)
        ui.clearMessage = this.add.text(400,1300, "Clear!", funnyFontMedium).setOrigin(0.5, 0.5).setVisible(false);

        function hitBlock (sprite, block) {
            ui.removeBlock(block);
        }

        ui.nextround = {
            dialog: this.add.image(300,1240, 'nowfind').setVisible(false),
            text: this.add.text(300,1300,'Great job!', ubuntuRed).setVisible(false).setOrigin(0.5,0.5)
        }

        ui.explosion = ["","","",""]
        ui.collider = ["","","",""]

        for (let i=0;i<4;i++) {
            ui.explosion[i] = {
                leadSprite: this.physics.add.sprite(0,0, 'spark').setScale(0.5).setVisible(false).setImmovable(true)
            }
            ui.explosion[i].trail = this.add.particles('spark').createEmitter({
                    x: 0,
                    y: 0,
                    speed: { min: 50, max: 50 },
                    scale: { start: 0.2, end: 0.1 },
                    lifespan: 1200,
                    gravityY: 0,
                    follow: ui.explosion[i].leadSprite
            }).stop()
            this.physics.add.collider(ui.explosion[i].leadSprite, ui.blockGroup, hitBlock, null, this);
        }
    }

    update() {
        if (state.phase == "starting") {
            if (ui.blocksOnScreen == 18) {
                clearInterval(ui.starting);
                ui.playInterval = setInterval(() => {
                    if (!ui.exploding) {
                        var column = ui.chooseColumn();
                        ui.addBlock(column);
                    }
                },2000)
                ui.timerInterval = setInterval(() => {
                    ui.timer--;
                    ui.newScore--;
                    ui.scoreText.setText(ui.newScore.toString())
                    if (ui.timer == 0) {
                        ui.timer = 60;
                        ui.displayCoins[3-ui.coinsToWin].setTexture('coin_disabled');
                        ui.coinsToWin--;
                        if (ui.coinsToWin == 0) {
                            state.gameOver();
                        }
                    }
                }, 1000)
                ui.addPowerUp(ui.chooseColumn()); //DEBUG
                state.phase = "play"    ;
            }
        }

        if (ui.totalBlocks == 35) {
            clearInterval(ui.playInterval);
            ui.playInterval = setInterval(() => {
                if (!ui.exploding) {
                    var column = ui.chooseColumn();
                    ui.addBlock(column);
                }
            },1500)
            ui.totalBlocks++
        }

        if (ui.totalBlocks == 55) {
            clearInterval(ui.playInterval);
            ui.playInterval = setInterval(() => {
                if (!ui.exploding) {
                    var column = ui.chooseColumn();
                    ui.addBlock(column);
                }
            },1200)
            ui.totalBlocks++
        }

        if (state.phase == "play") {
            if (!ui.exploding) {
                //ui.bar.rect.width -= 0.4;
            }
            if (ui.blocksOnScreen < 3) {
                //user.score += 100;
                state.gameOver();
            }
        }

        if (!ui.exploding) {
            // if (ui.bar.rect.width <= 0) {
            //     var recentQuestion = ui.prompt.vocab;
            //     ui.prompt.vocab = ui.getNextQuestion(recentQuestion);
            //     ui.prompt.displayText.text = ui.prompt.vocab.english;

            //     ui.nextround.dialog.setVisible(true);
            //     ui.nextround.text.setVisible(true);                        
            //     ui.exploding = true;
            //     ui.nextround.text.setText("Now find:" + ui.prompt.vocab.english);

            //     setTimeout(() => {
            //         ui.nextround.dialog.setVisible(false);
            //         ui.nextround.text.setVisible(false);
            //         ui.exploding = false;
            //         ui.bar.rect.width = 160;
            //     }, 2000)
            
            //     user.power--;
            //     if (user.power < 0) {
            //         user.power = 0;
            //     }
            //     ui.powerUp.update(user.power);
            // }
            ui.blocks.forEach((column) => {
                if (column.length > 0) {
                    column.forEach((block, j) => {
                        var speed;
                        var distance;
                        if (typeof column[j-1] !== 'undefined') {
                            distance = column[j-1].y - block.y;
                        } else {
                            distance = 560 - block.y;
                        }
                        if (distance < 150) {
                            speed = (distance - 75) * 8;
                        } else {
                            speed = 600;
                        }
                        block.setVelocityY(speed);
                        if (typeof block.blockText !== 'undefined') {
                            block.blockText.x = block.x;
                            block.blockText.y = block.y;    
                        }
                    })
                }
            })    
        } else {
            ui.blocks.forEach((column) => {
                if (column.length > 0) {
                    column.forEach((block) => {
                        block.setVelocityY(0);
                        if (typeof block.blockText !== 'undefined') {
                            block.blockText.x = block.x;
                            block.blockText.y = block.y;    
                        }
                    })
                }
            })    
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
                {type: "image", name: "splash", file: "blockzi_splash.jpg"},
                {type: "image", name: "loading", file: "blockzi_splash.jpg"},
                {type: "image", name: "coin", file: "coin.png"},
                {type: "image", name: "coin_disabled", file: "coin_disabled.png"},
                {type: "image", name: "bz0", file: "bz0.jpg"},
                {type: "image", name: "bz1", file: "bz1.jpg"},
                {type: "image", name: "bz2", file: "bz2.jpg"},
                {type: "image", name: "bz3", file: "bz3.jpg"},
                {type: "image", name: "bz4", file: "bz4.jpg"},
                {type: "image", name: "iarrow", file: "instruction_arrow.png"},
                {type: "image", name: "idialog", file: "instruction_dialog.png"}
            ]
        }
        
        myLoad(loadConfig, this);
        myLoad("buttons", this);
    }

    create() {
        this.add.image(0,0, 'splash').setOrigin(0,0);

        if (typeof user.topScore == "undefined") {
            user.topScore = importData.top_score;
        }

        this.add.text(400, 180, "Top score: " + user.topScore.toString(), newFontLarger).setOrigin(0.5,0.5);

        var myCoins = [
            this.add.image(270, 280, 'coin_disabled').setScale(0.8),
            this.add.image(400, 280, 'coin_disabled').setScale(0.8),
            this.add.image(530, 280, 'coin_disabled').setScale(0.8)
        ]

        for (let i=0;i<importData.coins;i++) {
            myCoins[i].setTexture('coin');
        }

        var startButton = addButton('small', 290, 420, "Start Game", this);
        var instructions = addButton('small', 510, 420, "Instructions", this);
        var haveReadInstructions = false;
        instructions.button.on('pointerdown', () => {
            runInstructions('blockzi', this);
            haveReadInstructions = true;
        });

        startButton.button.on('pointerdown', () => {
            if (importData.lesson == 1) {
                if (!haveReadInstructions) {
                    runInstructions('blockzi', this);
                    haveReadInstructions = true;
                } else {
                    this.scene.start('GameScene');
                }
            } else {
                this.scene.start('GameScene');
            }
        });
    }
}