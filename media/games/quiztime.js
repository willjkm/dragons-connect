class GameScene extends Phaser.Scene {
    constructor() {
        super({key:"GameScene"});
    }

    preload() {
        this.add.image(0,0, 'loading').setOrigin(0,0);
        var loadConfig = {
            mediaURL: "../../../media/images/",
            loadObjects: [
                {type: "image", name: "background", file: "background_ch.jpg"},
                {type: "image", name: "message_frame", file: "gameoverbackground2.png"},
                {type: "image", name: "shanghai0", file: "shanghai0.jpg"},
                {type: "image", name: "shanghai1", file: "shanghai1.jpg"},
                {type: "image", name: "shanghai2", file: "shanghai2.jpg"},
                {type: "image", name: "shanghai3", file: "shanghai3.jpg"},
                {type: "image", name: "shanghai4", file: "shanghai4.jpg"},
                {type: "image", name: "shanghai5", file: "shanghai5.jpg"},
                {type: "image", name: "shanghai6", file: "shanghai6.jpg"},
                {type: "image", name: "shanghai7", file: "shanghai7.jpg"},
                {type: "image", name: "shanghai8", file: "shanghai8.jpg"},
                {type: "image", name: "shanghai9", file: "shanghai9.jpg"},
                {type: "image", name: "q0", file: "q0.png"},
                {type: "image", name: "q1", file: "q1.png"},
                {type: "image", name: "q2", file: "q2.png"},
                {type: "image", name: "q3", file: "q3.png"},
                {type: "image", name: "q4", file: "q4.png"},
                {type: "image", name: "q5", file: "q5.png"},
                {type: "image", name: "arrow", file: "arrow.png"},
                {type: "image", name: "spinner", file: "spinner.png"},
                {type: "image", name: "spark", file: "spark.png"},
                {type: "image", name: "coin", file: "coin.png"},
                {type: "image", name: "coin_disabled", file: "coin_disabled.png"},
                {type: "image", name: "listenagain", file: "listenagain.png"},
                {type: "image", name: "listenagain_hover", file: "listenagain_hover.png"},
                {type: "image", name: "listenagain_down", file: "listenagain_down.png"}
            ]
        }
        myLoad(loadConfig, this);
        var soundLoadConfig = {
            mediaURL: "../../../media/sounds/",
            loadObjects: [
                {type: "sound", name: "fei2", file: "fei2.ogg"},
                {type: "sound", name: "fei4", file: "fei4.ogg"},
                {type: "sound", name: "sparkle", file: "sparkle.ogg"},
                {type: "sound", name: "correct", file: "correct.ogg"},
                {type: "sound", name: "wrong", file: "wrong.ogg"},
                {type: "sound", name: "click", file: "click.ogg"},
                {type: "sound", name: "next_question", file: "next_question.ogg"},

            ]
        }
        myLoad(soundLoadConfig, this);

    }

    create() {

        ui.sound = {
            correct: this.sound.add('correct'),
            wrong: this.sound.add('wrong'),
            click: this.sound.add('click'),
            next_question: this.sound.add('next_question'),
            sparkle: this.sound.add('sparkle'),
        }

        user.score = 90; // start at 90 and 10 points off for every incorrect answer
        user.step = 0; // this variable tracks how many answers have been answered correctly

        function newQuestionDeck() {
            var allVocab = getQuizData();
            shuffleArray(allVocab);
            var result = []
            allVocab.forEach((element) => {
                if (element.lesson == importData.lesson) {
                    result.push(element);
                }
            })
            return result;
        }

        ui.nextQuestion = () => {
            ui.pauseInput();
            if (ui.question.category == 5) {
                ui.listenFlyOut();
            }
            if (ui.questionDeck.length == 0) {
                ui.questionDeck = newQuestionDeck();
            }
            var nextQ = ui.questionDeck.pop();
            ui.question.category = nextQ.category;
            ui.question.displayText.text = ""
            if (ui.question.category == 5) {
                ui.question.sound = this.sound.add(nextQ.sound)
            }

            setTimeout(() => {
                ui.sound.next_question.play();
                for (let i=0;i<4;i++) {
                    ui.answer.buttons[i].displayText.text = "";
                }

                var correctChoice = Math.floor(Math.random()*4)
                ui.answer.buttons[correctChoice].displayText.text = nextQ.answer;
                ui.answer.buttons[correctChoice].correct = true

                shuffleArray(nextQ.wrong)

                var counter = 0

                for (let i=0;i<4;i++) {
                    if (ui.answer.buttons[i].displayText.text == "") {
                        ui.answer.buttons[i].displayText.text = nextQ.wrong[counter];
                        ui.answer.buttons[i].correct = false;
                        counter++;
                    }
                }
                for (let i=0;i<4;i++) {
                    ui.answer.buttons[i].button.setTexture('l_unclicked');
                }
                ui.animate(ui.question.category);
                if (ui.question.category == 5) {
                    ui.listenFlyIn();
                }
                setTimeout(() => {
                    ui.writeOn(nextQ.question);
                    if (ui.question.category == 5) {
                        if (ui.question.sound !== undefined) {
                            ui.question.sound.play();
                        }
                    }
                }, 1000)

            }, 2000)
        }

        ui.writeOn = (str) => {
            var counter = 0
            var typing = setInterval(() => {
                if (counter == str.length-1) {
                    clearInterval(typing);
                    ui.allowInput()
                }
                ui.question.displayText.text += str[counter];
                counter++;
            },50)
        }

        ui.pauseInput = () => {
            for (let i=0;i<4;i++) {
                ui.answer.buttons[i].button.removeInteractive();
            }
            ui.listenAgain.removeInteractive();
        }

        ui.allowInput = () => {
            for (let i=0;i<4;i++) {
                ui.answer.buttons[i].button.setInteractive();
            }
            ui.listenAgain.setInteractive();
        }

        ui.questionDeck = newQuestionDeck(1); // will be newQuestionDeck(quiz.lesson) Also, could add maxquestions

        ui.background = this.add.sprite(0,0,'shanghai0').setOrigin(0,0);

        ui.listenAgain = this.add.sprite(-250,250, 'listenagain').setOrigin(0,0).setInteractive();
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
            ui.listenAgain.setTexture('listenagain_down');
            if (ui.question.sound !== undefined) {
                ui.question.sound.play();
            }
            setTimeout(() => {
                ui.listenAgain.setTexture('listenagain');
            }, 1500)
        });
        
        ui.listenFlyIn = () => {
            this.tweens.add({
                targets: ui.listenAgain,
                x: 50,
                ease: 'Power1',
                duration: 500
            });
        }

        ui.listenFlyOut = () => {
            this.tweens.add({
                targets: ui.listenAgain,
                x: -250,
                ease: 'Power1',
                duration: 500
            });
        }

        ui.spinner = this.add.sprite(120,120, 'spinner').setScale(0.7).setRotation(-Math.PI/12).setInteractive();
        ui.arrow = this.add.image(120,120, 'arrow').setScale(0.7);
        ui.question = {
            category: 0,
            rect: this.add.sprite(395,30,'q0').setOrigin(0,0),
            displayText: this.add.text(405, 40, "", monoFont)
        }

        ui.question.displayText.setWordWrapWidth(355, true);


        ui.animate = (category) => {
            var config = [
                {
                    title: "knowledge",
                    color: "#d7cb24"
                },
                {
                    title: "vocab",
                    color: "#d85acc"
                },
                {
                    title: "pinyin",
                    color: "#5ad6d8"
                },
                {
                    title: "tones",
                    color: "#ff002a"
                },
                {
                    title: "characters",
                    color: "#24d733"
                },
                {
                    title: "listening",
                    color: "#0062ff"
                },
            ]
            ui.categoryText.text = config[category].title;
            ui.categoryText.setColor(config[category].color);
            ui.categoryText.setVisible(true);
            this.tweens.add({
                targets: ui.categoryText,
                scaleX: 1,
                scaleY: 1,
                ease: 'Power1',
                duration: 500
            });
            setTimeout(() => {
                this.tweens.add({
                    targets: ui.categoryText,
                    x: -400,
                    ease: 'Power1',
                    duration: 500
                });
                setTimeout(() => {
                    ui.categoryText.setVisible(false).setScale(0.6).setX(300);
                }, 2000);
            },2000);
        }

        ui.answer = {
            buttons: [],
            buttonLocations: [[630, 220],[630, 300],[630, 380],[630, 460]]
        };

        for (let i = 0; i < 4; i++) {
            ui.answer.buttons.push(addButton(
                'big', ui.answer.buttonLocations[i][0], ui.answer.buttonLocations[i][1], "", this));
            ui.answer.buttons[i].available = true;
            ui.answer.buttons[i].button.on('pointerdown', function () {
                if (ui.answer.buttons[i].correct) {
                    ui.answer.buttons[i].button.setTexture('l_correct');
                    ui.sound.correct.play();
                    user.step++;
                    ui.background.setTexture('shanghai'+user.step);    
                    if (user.step == 9) {
                        setTimeout(() => {
                            state.gameOver();
                        }, 1500);
                    } else {
                        ui.spin();
                        for (let j = 0; j<4;j++) {
                            ui.answer.buttons[j].available = true;
                        }
                    }
                } else {
                    ui.answer.buttons[i].button.setTexture('l_false');
                    if (ui.answer.buttons[i].available) {
                        ui.answer.buttons[i].available = false;
                        user.score -= 10;
                        if (user.score < 0) {
                            user.score = 0;
                        }
                        ui.sound.wrong.play();
                        user.step--;
                        if (user.step < 0) {
                            user.step = 0;
                        }
                        ui.background.setTexture('shanghai'+user.step);    
                    }
                }
            });
        }

        ui.categoryText = this.add.text(300, 340, "", barFontLarge).setVisible(false).setOrigin(0.5,0.5).setScale(0.6);

        ui.spin = () => {
            state.phase = 'spinning'
            ui.nextQuestion()
            this.tweens.add({
                targets: ui.arrow,
                rotation: (Math.PI*(Math.floor(Math.random()*2)+1)) + ui.question.category*Math.PI/6,
                ease: 'Power1',
                duration: 2000
            });
        }

        state.phase = "starting"
        ui.cams = addCameras(this);
        ui.debugText = this.add.text(680, 310, "", defaultFont)
        ui.removeAnimations = () => {};


        state.gameOver = () => {
            state.phase = "gameover";
            clearInterval(ui.playInterval);
            var coins = Math.floor(user.score / 30);
            if (coins > 3) {
                coins = 3;
            }
            ui.message.displayText[0].text = "You scored: " + user.score.toString() + "!";
            ui.cams.msgCam.setVisible(true);
            // ui.message.flyIn();
            // ui.cams.dim([this.cameras.main]);        

            // if (coins > 0) {
            //     ui.message.sparkle(coins);
            // }

            if (user.topScore < user.score) {
                user.topScore = user.score;
            }

            // AJAX POST score to database

            // var CSRFtoken = $('input[name=csrfmiddlewaretoken]').val();
            // $.post('../../../lessons/ajax/gameover/', {
            //     csrfmiddlewaretoken: CSRFtoken,
            //     element_name: "Quiz Time",
            //     score: user.score,
            //     lesson: importData.lesson,
            //     coins: coins
            // });

            endActivity(10, this, coins, user.score, "Quiz Time", []);

        }

        ui.message = gameEndDialog('GameScene', this);
        ui.colorNum = 0;
        ui.spin();
    }

    update() {
        ui.colorNum = Math.floor(((ui.arrow.rotation+(Math.PI/12))%Math.PI)*(6/Math.PI));
        if (ui.colorNum < 0) ui.colorNum += 6;
        let recentTexture = ui.question.rect.texture;
        ui.question.rect.setTexture('q' + ui.colorNum);
        if (ui.question.rect.texture !== recentTexture) {
            ui.sound.click.play();
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
                {type: "image", name: "splash", file: "quiz_splash.jpg"},
                {type: "image", name: "loading", file: "quiz_loading.jpg"},
                {type: "image", name: "qt0", file: "qt0.jpg"},
                {type: "image", name: "qt1", file: "qt1.jpg"},
                {type: "image", name: "qt2", file: "qt2.jpg"},
                {type: "image", name: "qt3", file: "qt3.jpg"},
                {type: "image", name: "qt4", file: "qt4.jpg"},
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

        this.add.text(400, 300, "Top score: " + user.topScore.toString(), defaultFont).setOrigin(0.5,0.5);

        var startButton = addButton('small', 290, 200, "Start Game", this);
        var instructions = addButton('small', 510, 200, "Instructions", this);
        instructions.button.on('pointerdown', () => {
            runInstructions('quizTime', this);
        });

        startButton.button.on('pointerdown', () => {
            this.scene.start('GameScene');
        });
    }
}