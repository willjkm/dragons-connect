
var quiz; // global object, containing config of each game

class QuizScene extends Phaser.Scene {
    constructor() {
        super({key:"QuizScene"});
    }
    
    create() {
    
        var user;
        var cards;
        var ui;

        quiz = {
            currentLesson: 6,
            numOfAnswers: 4,
            correctGuesses: 1, // number of times each item needs to be answered correctly before end of game
            maxLength: 10,
            mode: "multiple choice", // multiple choice, type answer, add tones
            prompt: "english",
            answerFormat: "pinyin" // character, english, pinyin
        };

        user = {
            correctAnswers: 0,
            totalAnswers: 0,
            answeredCorrectly: true    
        };

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
            questionText: this.add.text(30, 30, cards.question[quiz.prompt], defaultFont),
            answerText: [],
            buttons: []
        };

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

        function checkUserInput(choice) {
            if (cards.answers[choice] == cards.question) {
                ui.buttons[choice].fillColor = 0x00ff00;
                setTimeout(nextQuestion, 500);
            } else {
                user.answeredCorrectly = false;
                ui.buttons[choice].fillColor = 0xff0000;
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

            if (!cards.quizDeck[0] == cards.question) {
                cards.question = cards.quizDeck.pop();
            } else {
                if (!(cards.quizDeck.length - 1)) {
                    runOutOfCards();
                }
                cards.quizDeck.unshift(cards.quizDeck.pop());
                cards.question = cards.quizDeck.pop();
            }
            ui.questionText.text = cards.question[quiz.prompt];

            // reset answers

            if (quiz.mode == 'multiple choice') {
                cards.answers = getAnswers();
                for (let i = 0; i < quiz.numOfAnswers; i++) {
                    ui.buttons[i].fillColor = 0x6666ff;
                    ui.answerText[i].text = cards.answers[i][quiz.answerFormat];
                }
            } else {
                ui.typedText.style.color = '#ffffff';
                ui.typedText.text = ''
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
                    endGame();
                }
            }
        }

        const endGame = () => {
            gameData.accuracy = Math.floor((user.correctAnswers / user.totalAnswers) * 100);
            this.scene.start('GameOver');
        }

    }
}