class GameScene extends Phaser.Scene {
    constructor() {
        super({key:"GameScene"});
    }

    preload() {
        this.add.image(0,0, 'loading').setOrigin(0,0);
        var loadConfig = {
            mediaURL: "../../../media/images/",
            loadObjects: [
                {type: "image", name: "background", file: "nightsky.jpg"},
                {type: "image", name: "rocket", file: "rocket.png"},
                {type: "image", name: "rocket_selected", file: "rocket_selected.png"},
                {type: "image", name: "moon1", file: "moon1.png"},
                {type: "image", name: "moon2", file: "moon2.png"},
                {type: "image", name: "moon3", file: "moon3.png"},
                {type: "image", name: "moon4", file: "moon4.png"},
                {type: "image", name: "moon5", file: "moon5.png"},
                {type: "image", name: "moon6", file: "moon6.png"},
                {type: "image", name: "housing", file: "housing.png"},
                {type: "image", name: "barrel", file: "barrel.png"},
                {type: "image", name: "barrel_selected", file: "barrel_selected.png"},
                {type: "image", name: "barrel_top", file: "barrel_top.png"},
                {type: "image", name: "barrel_top_selected", file: "barrel_top_selected.png"},
                {type: "image", name: "listenagain", file: "listen_lantern.png"},
                {type: "image", name: "listenagain_hover", file: "listen_lantern_selected.png"},
                {type: "image", name: "spark", file: "spark.png"},
                {type: "image", name: "spark0", file: "spark.png"},
                {type: "image", name: "spark1", file: "spark1.png"},
                {type: "image", name: "spark2", file: "spark2.png"},
                {type: "image", name: "spark3", file: "spark3.png"},
                {type: "image", name: "spark4", file: "spark4.png"},
                {type: "image", name: "spark5", file: "spark5.png"},
                {type: "image", name: "trail", file: "trail.png"},
                {type: "image", name: "message_frame", file: "gameoverbackground2.png"},
                {type: "image", name: "coin", file: "coin.png"},
                {type: "image", name: "coin_disabled", file: "coin_disabled.png"}
            ]
        }
        myLoad(loadConfig, this);

        var soundLoadConfig = {
            mediaURL: "../../../media/sounds/",
            loadObjects: [
                {type: "sound", name: "sparkle", file: "sparkle.ogg"},
                {type: "sound", name: "wrong", file: "wrong.ogg"},
                {type: "sound", name: "takeoff", file: "firework_takeoff.ogg"},
                {type: "sound", name: "bang", file: "firework_bang.ogg"},
            ]
        }
        myLoad(soundLoadConfig, this);

        var allRounds = getFireworksData();

        state.soundFileList = getPinyinSoundFiles();

        state.round = [];

        allRounds.forEach((round) => {
            round.pinyin = round.sounds
            if (round.lesson == importData.lesson) {
                console.log(round);
                state.round.push(round);
            }
        })

        while (state.round.length < 4) {
            let num = Math.floor(Math.random()*(((importData.lesson-1)*2)+2))
            if (state.round.indexOf(allRounds[num]) == -1) {
                console.log(allRounds[num]);
                state.round.push(allRounds[num]);
            }
        }

        var soundsToLoad = [];

        state.round.forEach((r) => {
            for (let i=0;i<4;i++) {
                state.soundFileList.forEach((obj) => {
                    if (obj.pinyin == r.sounds[i]) {
                        soundsToLoad.push({
                            type: "sound",
                            name: obj.file,
                            file: obj.file
                        })                        
                    }
                })
            }
        });

        soundLoadConfig = {
            mediaURL: "../../../media/sounds/",
            loadObjects: soundsToLoad
        }
        myLoad(soundLoadConfig, this);
    }

    create() {
        initialize();

        ui.inputAllowed = true;

        ui.sound = {
            wrong: this.sound.add('wrong'),
            takeoff: this.sound.add('takeoff'),
            bang: this.sound.add('bang'),
            sparkle: this.sound.add('sparkle')
        }

        state.round.forEach((r) => {
            r.audio = ["","","",""];
            for (let i=0;i<4;i++) {
                let fileName;
                state.soundFileList.forEach((obj) => {
                    if (obj.pinyin == r.sounds[i]) {
                        fileName = obj.file;
                    }
                })
                r.audio[i] = this.sound.add(fileName);
            }
        });

        state.totalRounds = 4;
        state.currentRound = 0;
        state.correctAnswer = Math.floor(Math.random()*4);

        state.nextQuestion = () => {
            var suitableRockets = [];
            ui.rocket.forEach((rocket, index) => {
                if (rocket.available) {
                    suitableRockets.push(index);
                }
            });
            if (suitableRockets.length > 0) {
                var choice = Math.floor(Math.random()*suitableRockets.length)
                return suitableRockets[choice]
            }
            else return null
        }

        state.nextRound = () => {
            state.currentRound += 1;
            if (state.currentRound == state.totalRounds) {
                state.gameOver();
            } else {
                state.correctAnswer = Math.floor(Math.random()*4)
                ui.rocket.forEach((rocket, index) => {
                    rocket.x = ((index + 1)*120) + 980;
                    rocket.y = 635;
                    rocket.setRotation(-1.2);
                    rocket.failed = false;
                    rocket.launched = false;
                    rocket.available = true;
                })
                ui.choiceText.forEach((t, index) => {
                    t.setText(state.round[state.currentRound].pinyin[index]);
                })
                state.round[state.currentRound].audio[state.correctAnswer].play();
            }
        }

        state.gameOver = () => {
            var coins = Math.floor(user.score / 30);
            if (coins > 3) {
                coins = 3;
            }
            ui.message.displayText[0].text = "You scored: " + user.score.toString() + "!";
            // ui.cams.msgCam.setVisible(true);
            // ui.message.flyIn();
            // ui.cams.dim([this.cameras.main]);        

            // if (coins > 0) {
            //     ui.message.sparkle(coins);
            // }

            this.cameras.remove(ui.foregroundCamera);
            ui.housing.setVisible(false);

            endActivity(7, this, coins);

            if (user.topScore < user.score) {
                user.topScore = user.score;
            }

            // AJAX POST score to database

            var CSRFtoken = $('input[name=csrfmiddlewaretoken]').val();
            $.post('../../../lessons/ajax/gameover/', {
                csrfmiddlewaretoken: CSRFtoken,
                element_name: "Fireworks",
                score: user.score,
                lesson: importData.lesson,
                coins: coins
            });
        }

        ui.cams = addCameras(this);
        ui.foregroundCamera = this.cameras.add(0, 0, 800, 600).setOrigin(0,0).setScroll(1000,0).setVisible(true)

        ui.removeAnimations = () => {};

        ui.background = this.add.image(0,0, 'background').setOrigin(0,0);
        ui.housing = this.add.sprite(-130,800,"housing").setOrigin(0,0);

        ui.trailblazer = ["","","",""]
        ui.explosion = ["","","",""]
        ui.trail = ["","","",""]

        for (let j=0;j<4;j++) {
            ui.trailblazer[j] = this.physics.add.sprite(450 + Math.floor(Math.random()*100)-50,650, 'spark').setVisible(false);
            ui.trailblazer[j].status = "ground"

            ui.explosion[j] = {
                leadSprite: [],
                trail: []
            }

            for (let i=0; i<9; i++) {
                ui.explosion[j].leadSprite.push(
                    this.physics.add.sprite(-10,-10, 'spark').setScale(0.6)
                );
                ui.explosion[j].trail.push(
                    this.add.particles('spark').createEmitter({
                        x: 0,
                        y: 0,
                        speed: { min: 1, max: 1 },
                        alpha: { start: 1, end: 0 },
                        scale: { start: 0.2, end: 0.1 },
                        lifespan: 1200,
                        gravityY: 1,
                        follow: ui.explosion[j].leadSprite[i]
                    }).stop()
                );
            }

            ui.trailblazer[j].explode = () => {
                ui.sound.bang.play();
                var randomColor = Math.floor(Math.random()*6);
                ui.explosion[j].leadSprite.forEach((sprite) => {
                    sprite.setAlpha();
                    sprite.setVisible(true);
                    sprite.setTexture('spark'+randomColor);
                    sprite.x = ui.trailblazer[j].x;
                    sprite.y = ui.trailblazer[j].y;
                    sprite.setVelocityX(Math.floor(Math.random()*400)-200)
                    sprite.setVelocityY(Math.floor(Math.random()*400)-200)
                });            
                ui.explosion[j].trail.forEach((emitter) => {
                    emitter.start();
                });
                setTimeout(() => {
                    ui.trailblazer[j].status = "ground"
                    ui.trailblazer[j].x = 450 + Math.floor(Math.random()*100)-50;
                    ui.trailblazer[j].y = 650;
                    ui.explosion[j].leadSprite.forEach((sprite) => {
                        sprite.setVisible(false);
                        sprite.setVelocityX(0);
                        sprite.setVelocityY(0);
                    })
                    ui.explosion[j].trail.forEach((emitter) => {
                        emitter.stop();
                    });
                }, 1200);
            }
            ui.trail[j] = this.add.particles('trail').createEmitter({
                x: 0,
                y: 0,
                speed: { min: 0, max: 3 },
                angle: { min: 100, max: 120 },
                scale: { start: 0.5, end: 0 },
                lifespan: 4000,
                gravityY: 0,
                follow: ui.trailblazer[j]
            }).stop();
        }
        
        
        ui.rocket = [];
        ui.barrel = [];
        ui.barrel_top = [];

        for (let i=0;i<4;i++) {
            ui.barrel.push(this.physics.add.sprite(((i+1)*120)-20+1000,600-15, 'barrel').setScale(0.6).setRotation(0.36).setInteractive());
            ui.rocket.push(this.physics.add.sprite(((i+1)*120)-20+1000,650-15, 'rocket').setScale(0.6).setRotation(-1.2).setInteractive());
            ui.barrel_top.push(this.physics.add.sprite(((i+1)*120)-20+1000,600-15, 'barrel_top').setScale(0.6).setRotation(0.36).setInteractive());
        }

        for (let i=0;i<4;i++) {
            ui.barrel[i].on('pointerover', () => {
                ui.rocket.highlight(i);
            });
            ui.barrel[i].on('pointerout', () => {
                ui.rocket.unhighlight(i);
            });
            ui.barrel_top[i].on('pointerover', () => {
                ui.rocket.highlight(i);
            });
            ui.barrel_top[i].on('pointerout', () => {
                ui.rocket.unhighlight(i);
            });
            ui.rocket[i].on('pointerover', () => {
                ui.rocket.highlight(i);
            });
            ui.rocket[i].on('pointerout', () => {
                ui.rocket.unhighlight(i);
            });
            ui.barrel[i].on('pointerdown', () => {
                ui.rocket.processInput(i);
            });
            ui.barrel_top[i].on('pointerdown', () => {
                ui.rocket.processInput(i);
            });
        }

        ui.rocket.highlight = (i) => {
            if (ui.rocket[i].texture.key == 'rocket') {
                if (ui.rocket[i].available) {
                    ui.rocket[i].setTexture('rocket_selected');
                    ui.barrel[i].setTexture('barrel_selected');
                    ui.barrel_top[i].setTexture('barrel_top_selected');    
                }
            }
        }

        ui.rocket.unhighlight = (i) => {
            if (ui.rocket[i].texture.key == 'rocket_selected') {
                ui.rocket[i].setTexture('rocket');
                ui.barrel[i].setTexture('barrel');
                ui.barrel_top[i].setTexture('barrel_top');
            }
        }

        ui.rocket.processInput = (i) => {
            if (ui.inputAllowed) {
                if (ui.rocket[i].available) {
                    ui.inputAllowed = false;
                    setTimeout (() => {
                        ui.inputAllowed = true;
                    }, 1500)
                    ui.rocket[i].available = false;
                    if (i == state.correctAnswer) {
                        ui.rocket[i].launch();
                        state.correctAnswer = state.nextQuestion();
                        setTimeout(() => {
                            if (state.round[state.currentRound].audio[state.correctAnswer] !== undefined) {
                                state.round[state.currentRound].audio[state.correctAnswer].play();
                            }
                        }, 1000);
                        if (state.correctAnswer === null) {
                            setTimeout(state.nextRound, 3000);
                        }
                        user.score += 10;
                        ui.scoreText.setText(user.score.toString());
                    } else {
                        ui.rocket[i].fail();    
                        user.lives -= 1
                        if (user.lives == 0) {
                            state.gameOver()
                        } else {
                            ui.moon.setTexture(ui.moonTextures[6-user.lives])
                        }
                    }    
                }    
            }
        }

        ui.rocket.forEach((rocket, index) => {
            rocket.spark = this.add.particles('spark').createEmitter({
                x: -1000,
                y: 950,
                speed: { min: 0, max: 700 },
                angle: { min: 100, max: 120 },
                scale: { start: 1, end: 0 },
                blendMode: 'SCREEN',
                lifespan: 600,
                gravityY: 50,
                follow: rocket
            }).stop();
            rocket.launched = false;
            rocket.failed = false;
            rocket.available = true;
            rocket.launch = () => {
                rocket.spark.start();
                setTimeout(() => {
                    rocket.launched = true;
                    ui.sound.takeoff.play();
                }, 200)
            }
            rocket.fail = () => {
                rocket.spark.start();
                setTimeout(() => {
                    ui.sound.wrong.play();
                    rocket.failed = true;
                    rocket.spark.stop();
                }, 200)
            }
            rocket.on('pointerdown', () => {
                ui.rocket.processInput(index)
            });
        });


        ui.moonTextures = ['moon1','moon2','moon3','moon4','moon5','moon6']
        ui.moon = this.add.image(600,50, 'moon1').setOrigin(0,0).setScale(0.5).setBlendMode('SCREEN');
        ui.listenAgain = this.add.sprite(20,10, 'listenagain').setOrigin(0,0).setInteractive();
        ui.listenAgain.on('pointerover', () => {
            if (ui.listenAgain.texture.key == 'listenagain') {
                ui.listenAgain.setTexture('listenagain_hover');
            }
        });
        ui.listenAgain.on('pointerout', () => {
            if (ui.listenAgain.texture.key == 'listenagain_hover') {
                ui.listenAgain.setTexture('listenagain');
            }
        });
        ui.listenAgain.on('pointerdown', () => {
            ui.listenAgain.setTexture('listenagain');
            if (state.round[state.currentRound].audio[state.correctAnswer] !== undefined) {
                state.round[state.currentRound].audio[state.correctAnswer].play();
            }
            setTimeout(() => {
                ui.listenAgain.setTexture('listenagain');
            }, 1500)
        });

        ui.choiceText = [];

        for (let i=0;i<4;i++) {
            ui.choiceText.push(
                this.add.text(110+(120*i)+1000, 560, state.round[state.currentRound].pinyin[i], defaultFont).setOrigin(0.5, 0.5)
            );
        }

        for (let i=0;i<4;i++) {
            ui.choiceText[i].setVisible(false);
            ui.choiceText[i].setVisible(true);
        }

        state.round[state.currentRound].audio[state.correctAnswer].play(); // first sound of game

        user.lives = 6;
        user.score = 0;
        ui.scoreText = this.add.text(1685, 565, "0", ubuntuFont).setOrigin(0, 0.5)
        ui.message = gameEndDialog('GameScene', this);
    }

    update() {
        ui.rocket.forEach((rocket, index) => {
            if (rocket.launched) {
                rocket.displacement = (700-rocket.y)
                rocket.speed = 50 + rocket.displacement**1.5
                rocket.setVelocityX(rocket.speed/2.4);
                rocket.setVelocityY(-rocket.speed);
                if (rocket.y < -300) {
                    rocket.launched = false;
                    rocket.spark.stop();
                    rocket.setVelocityX(0);
                    rocket.setVelocityY(0);
                    ui.trail[index].start();
                    ui.trailblazer[index].status = "launching";
                    ui.trailblazer[index].setVelocityX(Math.floor(Math.random()*100)-50);
                    ui.trailblazer[index].setVelocityY(-160);        
                }
            }
            if (rocket.failed) {
                rocket.setVelocityX(-90);
                rocket.setVelocityY(200);
                if (rocket.y > 800) {
                    rocket.failed = false;
                    rocket.setVelocityX(0);
                    rocket.setVelocityY(0);
                }
            }
        });
        ui.trailblazer.forEach((t, index) => {
            if (t.status == "launching") {
                if (t.y < 200) {
                    t.setVelocityX(0);
                    t.setVelocityY(0);
                    t.status = "exploding";
                    ui.trail[index].stop();
                    t.explode();
                }
            } else if (t.status == "exploding") {
                ui.explosion[index].leadSprite.forEach((sprite) => {
                    sprite.alpha -= 0.01;
                });
            }    
        });
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
                {type: "image", name: "splash", file: "rockets_newsplash.jpg"},
                {type: "image", name: "loading", file: "loading_f.jpg"},
                {type: "image", name: "coin", file: "coin.png"},
                {type: "image", name: "coin_disabled", file: "coin_disabled.png"},
                {type: "image", name: "fw0", file: "fw0.jpg"},
                {type: "image", name: "fw1", file: "fw1.jpg"},
                {type: "image", name: "fw2", file: "fw2.jpg"},
                {type: "image", name: "fw3", file: "fw3.jpg"},
                {type: "image", name: "fw4", file: "fw4.jpg"},
                {type: "image", name: "iarrow", file: "instruction_arrow.png"},
                {type: "image", name: "idialog", file: "instruction_dialog.png"},
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

        this.add.text(400, 200, "Top score: " + user.topScore.toString(), defaultFont).setOrigin(0.5,0.5);

        var myCoins = [
            this.add.image(210, 350, 'coin_disabled'),
            this.add.image(400, 350, 'coin_disabled'),
            this.add.image(590, 350, 'coin_disabled')
        ]

        for (let i=0;i<importData.coins;i++) {
            myCoins[i].setTexture('coin');
        }

        var startButton = addButton('small', 290, 520, "Start Game", this);
        var instructions = addButton('small', 510, 520, "Instructions", this);
        instructions.button.on('pointerdown', () => {
            runInstructions('rockets', this);
        });

        startButton.button.on('pointerdown', () => {
            this.scene.start('GameScene');
        });
    }
}