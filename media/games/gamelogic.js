
function newQuizDeck(lesson, maxItems=20) {
    var allVocab = getData();
    if (quiz.mode == "falling tones") {
        allVocab = getToneData();
    }
    var questionSet = [];
    function filterLesson(item) {
        return item.lesson == lesson;
    }
    function earlierLessons(item) {
        return item.lesson < lesson;
    }

    questionSet.push.apply(questionSet, allVocab.filter(filterLesson));

    var itemsToAdd = maxItems - questionSet.length;

    if (itemsToAdd > 0) {
        const extraQuestions = allVocab.filter(earlierLessons);
        shuffleArray(extraQuestions);
        if (extraQuestions.length < itemsToAdd) {
            itemsToAdd = extraQuestions.length;
        }
        for (let i = 1; i <= itemsToAdd; i++) {
            questionSet.push(extraQuestions[i]);
        }
    }
    shuffleArray(questionSet);
    questionSet.forEach(function(element) {
        element.correctGuesses = 0;
    });
    return questionSet;
}

function newAnswerDeck(lesson) {
    var allVocab = getData();
    var answerSet = [];
    function lessonsToReview(item) {
        return item.lesson <= lesson;
    }
    answerSet.push.apply(answerSet, allVocab.filter(lessonsToReview));
    shuffleArray(answerSet);
    return answerSet;
}


function toneConvert(string, tonemark) {
    var tone = Number(tonemark);
    var newString = '';

    function tonify(string, index, vowel, tone) {
        if (index == string.length - 1) {
            return string.slice(0, index) + diacritic[vowel][tone];
        } else {
            return string.slice(0, index) + diacritic[vowel][tone] + string.slice((index + 1) - string.length);
        }
    }

    function considerLetter(i) {
        if (i >= 0) {
            switch (string[i]) {
                case 'r':
                case 'n':
                case 'g':
                    considerLetter(i-1);
                    break;
                case 'a':
                    newString = tonify(string, i, 'a', tone);
                    break;
                case 'e':
                    if (string[i-1] == 'v') {
                        var tempString = string.slice(0, i-1) + 'üe';
                        newString = tonify(tempString, i, 'e', tone);
                    } else {
                        newString = tonify(string, i, 'e', tone);
                    }
                    break;
                case 'i':
                    if (string[i-1] == 'a') {
                        newString = tonify(string, i-1, 'a', tone);
                    } else if (string[i-1] == 'e') {
                        newString = tonify(string, i-1, 'e', tone);
                    } else {
                        newString = tonify(string, i, 'i', tone);
                    }
                    break;
                case 'o':
                    if (string[i-1] == 'a') {
                        newString = tonify(string, i-1, 'a', tone);
                    } else {
                        newString = tonify(string, i, 'o', tone);
                    }
                    break;
                case 'u':
                    if (string[i-1] == 'o') {
                        newString = tonify(string, i-1, 'o', tone);
                    } else {
                        newString = tonify(string, i, 'u', tone);
                    }
                    break;
                case 'v':
                    newString = tonify(string, i, 'v', tone);
                    break;
            }
        }
    }

    considerLetter(string.length - 1);

    if (newString) {
        return newString;
    } else {
        return string;
    }
}

var initialize = () => {

    user.correctAnswers = 0;
    user.totalAnswers = 0;
    user.answeredCorrectly = true;


    cards = {
        quizDeck: newQuizDeck(quiz.currentLesson, quiz.maxLength),
        answerDeck: newAnswerDeck(quiz.currentLesson),
        rightPile: [],
        wrongPile: [],
        completedPile: [],
    };

    cards.question = getQuestion();
    cards.answers = getAnswers();

    ui = {
        answer: {
            displayText: [],
            buttons: []
        }
    };
}

function getQuestion() {
    return cards.quizDeck.pop();
}

function getAnswers() {
    if (quiz.mode == 'multiple choice') {
        var answerList = [];
        answerList.push(cards.question);
        while (answerList.length < quiz.numOfAnswers) {
            if (!cards.answerDeck.length) {
                cards.answerDeck = newAnswerDeck(quiz.currentLesson);
            }
            if (cards.answerDeck[0].id !== cards.question.id) {
                if (!answerList.includes(cards.answerDeck[0])) {
                    answerList.push(cards.answerDeck[0])
                }
            }
            cards.answerDeck.shift();
        }
        shuffleArray(answerList);
        return answerList;
    } else {
        return;
    }
}

function processKeyboardInput(key) {
    if (keyDictionary.alphabet.includes(key)) {
        ui.typedText.text = ui.typedText.text + key;
    } else if (keyDictionary.toneNumbers.includes(key)) {
        ui.typedText.text = toneConvert(ui.typedText.text, key-1);
    } else if (key == 'Backspace') {
        if (ui.typedText.text.length) {
            ui.typedText.text = ui.typedText.text.slice(0,ui.typedText.text.length - 1);
        }
    } else if (key == 'Enter') {
        if (ui.typedText.text == cards.question.pinyin) {
            ui.typedText.setColor('#00ff00');
            setTimeout(nextQuestion, 500);
        } else {
            ui.typedText.setColor('#ff0000');
            user.answeredCorrectly = false;
            // function: the user has to copy the answer out before the next round
        }
    }
}

function checkToneBucket(choice) {
    if (choice == cards.question.tone) {
        nextQuestion();
        return true
    } else {
        user.answeredCorrectly = false;
        nextQuestion();
        return false
    }
}

function checkUserInput(choice) {
    if (cards.answers[choice] == cards.question) {
        ui.answer.buttons[choice].button.setTexture('l_correct');
        setTimeout(nextQuestion, 500);
        return true
    } else {
        user.answeredCorrectly = false;
        ui.answer.buttons[choice].button.setTexture('l_false');
        return false
    }
}

function nextQuestion() {
    // deal with user's answer

    user.totalAnswers++;

    if (user.answeredCorrectly) {
        cards.question.correctGuesses++;
        user.correctAnswers++;
        if (cards.question.correctGuesses == quiz.correctGuesses) {
            cards.completedPile.push(cards.question);
        } else {
            cards.rightPile.push(cards.question);
        }
    } else {
        cards.wrongPile.push(cards.question);
        user.answeredCorrectly = true; //reset
    }

    // check if the game has ended

    if (!cards.quizDeck.length) {
        runOutOfCards();
    }
    
    // load up the next question

    if (cards.quizDeck[0] !== cards.question) {
        cards.question = cards.quizDeck.pop();
    } else {
        if (!(cards.quizDeck.length - 1)) {
            runOutOfCards();
        }
        cards.quizDeck.unshift(cards.quizDeck.pop());
        cards.question = cards.quizDeck.pop();
    }

    // set questions and answers
    
    if (typeof cards.question !== 'undefined') {
        if (quiz.mode == 'multiple choice') {
            ui.question.displayText.text = cards.question[quiz.prompt];
            cards.answers = getAnswers();
            for (let i = 0; i < quiz.numOfAnswers; i++) {
                ui.answer.buttons[i].displayText.text = cards.answers[i][quiz.answerFormat];
                ui.answer.buttons[i].button.setTexture('l_unclicked');
            }
        } else if (quiz.mode == 'falling tones') {
            ui.bubble.character.text = cards.question["character"]
            ui.bubble.pinyin.text = cards.question["pinyin"]
        } else if (quiz.mode == 'type answer') {
            ui.question.displayText.text = cards.question[quiz.prompt];
            ui.typedText.style.color = '#ffffff';
            ui.typedText.text = ''
        }
    }
}

function runOutOfCards() {
    if (cards.wrongPile.length) {
        cards.quizDeck = cards.wrongPile;
        cards.wrongPile = [];
        shuffleArray(cards.quizDeck);
    } else {
        if (cards.rightPile.length) {
            cards.quizDeck = cards.rightPile;
            cards.rightPile = [];
            shuffleArray(cards.quizDeck);
        } else {
            cards.quizDeck = newQuizDeck(quiz.currentLesson, quiz.maxLength); // this line provides an endless game
            // endGame(); choose this line for a quiz of limited length
        }
    }
}

var endGame = () => {
    user.accuracy = Math.floor((user.correctAnswers / user.totalAnswers) * 100);
    
    // AJAX POST score to database

    var CSRFtoken = $('input[name=csrfmiddlewaretoken]').val();
    $.post('../../lessons/ajax/gameover/', {
        csrfmiddlewaretoken: CSRFtoken,
        score: user.accuracy,
        lesson: quiz.currentLesson
    });
    game.scene.stop('QuizScene');
    game.scene.start('GameOver');
}

var addButton = (size, x, y, displayText, game) => {
    if (size == 'mini') {
        var result = {
            button: game.add.sprite(x, y, 'unclicked').setScale(0.3,0.3).setInteractive(),
            displayText: game.add.text(x, y, displayText, defaultFont).setOrigin(0.5,0.5)
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
            button: game.add.sprite(x, y, 'unclicked').setScale(0.5,0.5).setInteractive(),
            displayText: game.add.text(x, y, displayText, defaultFont).setOrigin(0.5,0.5)
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
            button: game.add.sprite(x, y, 'l_unclicked').setScale(0.5,0.5).setInteractive(),
            displayText: game.add.text(x, y, displayText, defaultFont).setOrigin(0.5,0.5)
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

var gameEndDialog = (sceneName, game) => {
    var result = {
        background: game.add.image(1200, 1300, 'message_frame'),
        displayText: [
            game.add.text(1200, 1200, "", themeFont).setOrigin(0.5, 0.5),
            game.add.text(1200, 1350, "", themeFont).setOrigin(0.5, 0.5),
            game.add.text(1200, 1400, "", smallFont).setOrigin(0.5, 0.5),
        ],
        coins: [
            game.add.image(1100, 1275, 'coin_disabled').setScale(0.6),
            game.add.image(1200, 1275, 'coin_disabled').setScale(0.6),
            game.add.image(1300, 1275, 'coin_disabled').setScale(0.6),
        ],
        buttons: [
            addButton('mini', 1050, 1450, 'Replay', game),
            addButton('mini', 1200, 1450, 'Next Level', game),
            addButton('mini', 1350, 1450, 'Menu', game)
        ],
        spark: game.add.particles('spark').createEmitter({
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

    result.buttons[0].button.on('pointerdown', () => {
        ui.removeAnimations();
        game.scene.restart(sceneName);
    })

    result.buttons[1].button.setVisible(false);
    result.buttons[1].displayText.setVisible(false);

    result.buttons[2].button.on('pointerdown', () => {
        ui.removeAnimations();
        game.scene.stop(sceneName);
        game.scene.start('StartScene');
    })

    result.allElements = [result.background]
    for (let i=0; i<3; i++) {
        result.allElements.push(
            result.displayText[i], result.coins[i], result.buttons[i].button, result.buttons[i].displayText
        )
    }

    result.flyIn = () => {
        game.tweens.add({
            targets: result.allElements,
            x: '-=800',
            ease: 'Power1',
            duration: 600
        });
    }

    result.flyOut = () => {
        game.tweens.add({
            targets: result.allElements,
            x: '+=800',
            ease: 'Power1',
            duration: 600
        });
    }

    result.sparkle = (coins) => {
        var counter = 0;
        game.time.addEvent({
            delay: 2000,
            callback: () => {
                if (counter == 0) {
                    result.spark.start();
                } else {
                    result.coins[counter-1].setTexture('coin');
                    if (result.coins[counter]) {
                        result.spark.setPosition(result.coins[counter].x,result.coins[counter].y);
                    } 
                    if (counter == coins) {
                        result.spark.stop();
                    }    
                }
                counter += 1;
            },
            callbackScope: game,
            repeat: coins
        });
    }
    return result;
}

var addCameras = (game) => {
    var result = {
        msgCam: game.cameras.add(0, 0, 800, 600).setOrigin(0,0).setScroll(0,1000).setVisible(true),
        dim: (cameraArray) => {
            game.tweens.add({
                targets: cameraArray,
                alpha: 0.3,
                ease: 'Power1',
                duration: 600
            });
        },
    };
    return result;
}