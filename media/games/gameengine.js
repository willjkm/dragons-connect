
class QuizScene extends Phaser.Scene {
    constructor() {
        super({key:"QuizScene"});
    }
    
    create() {
        var quiz = {
            currentLesson: 6,
            numOfAnswers: 4,
            correctGuesses: 2,
            maxLength: 20,
            prompt: "english",
            answerFormat: "pinyin"
        };
        var cards = {};
        var user = {};
        var answeredCorrectly;
        var ui = {};

        const initialize = () => {
            ui.questionText = this.add.text(30, 30, "", defaultFont);
            ui.buttons = [];
            ui.answerText = [];
            for (let i = 0; i < quiz.numOfAnswers; i++) {
                ui.buttons.push(this.add.rectangle(180, 120 + (100*i), 300, 50, 0x6666ff).setInteractive());
                ui.buttons[i].on('pointerdown', function () {
                    checkUserInput(i);
                });
                ui.answerText.push(this.add.text(50, 100*(i+1), "", defaultFont));
            }
            ui.typedText = this.add.text(430, 30, "", defaultFont).setInteractive();
            this.input.keyboard.on('keydown', (input) => {
                updateInputText(input.key);
            });
        }

        function updateInputText(key) {
            if (keyDictionary.alphabet.includes(key)) {
                var tempString = ui.typedText.text;
                ui.typedText.text = tempString + key;   
            }
            if (keyDictionary.toneNumbers.includes(key)) {
                var tempString = toneConvert(ui.typedText.text, key-1);
                ui.typedText.text = tempString;
            }
        }

        function newGame() {
            cards.quizDeck = newQuizDeck(quiz.currentLesson, quiz.maxLength);
            cards.answerDeck = newAnswerDeck(quiz.currentLesson);
            cards.rightPile = [];
            cards.wrongPile = [];
            cards.completedPile = [];
            cards.question = cards.quizDeck.pop();
            cards.answers = getAnswers();
            ui.questionText.text = getPrompt();
            for (let i = 0; i < quiz.numOfAnswers; i++) {
                ui.answerText[i].text = getAnswerText(i);
            }
            user.correctAnswers = 0;
            user.totalAnswers = 0;
            answeredCorrectly = true;
        }

        function getPrompt() {
            switch (quiz.prompt) {
                case "character":
                    return cards.question.character;
                case "english":
                    return cards.question.english;
                case "pinyin":
                    return cards.question.pinyin;
            }
        }

        function getAnswerText(answer) {
            switch (quiz.answerFormat) {
                case "character":
                    return cards.answers[answer].character;
                case "english":
                    return cards.answers[answer].english;
                case "pinyin":
                    return cards.answers[answer].pinyin;
            }
        }

        function getAnswers() {
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
        }
        
        function checkUserInput(choice) {
            if (cards.answers[choice] == cards.question) {
                ui.buttons[choice].fillColor = 0x00ff00;
                setTimeout(nextQuestion, 500);
            } else {
                answeredCorrectly = false;
                ui.buttons[choice].fillColor = 0xff0000;
            }
        }

        const endGame = () => {
            console.log('ending game');
            this.scene.start('StartScene');
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
                    var accuracy = Math.floor((user.correctAnswers / user.totalAnswers) * 100);
                    var gameOverMsg = 'You gained ' + accuracy + '% accuracy';
                    console.log(gameOverMsg);
                    endGame();
                }
            }
        }

        function nextQuestion() {
            var mostRecentQuestion = cards.question;
            user.totalAnswers++;

            if (answeredCorrectly) {
                cards.question.correctGuesses++;
                user.correctAnswers++;
                if (cards.question.correctGuesses == quiz.correctGuesses) {
                    cards.completedPile.push(cards.question);
                } else {
                    cards.rightPile.push(cards.question);
                }
            } else {
                cards.wrongPile.push(cards.question);
            }
            answeredCorrectly = true;

            if (!cards.quizDeck.length) {
                runOutOfCards();
            }
            
            if (!cards.quizDeck[0] == mostRecentQuestion) {
                cards.question = cards.quizDeck.pop();
            } else {
                var layAside = cards.quizDeck.pop();
                if (!cards.quizDeck.length) {
                    runOutOfCards();
                }
                cards.quizDeck.unshift(layAside);
                cards.question = cards.quizDeck.pop();
            }

            ui.questionText.text = getPrompt();
            for (let i = 0; i < quiz.numOfAnswers; i++) {
                ui.buttons[i].fillColor = 0x6666ff;
            }
            cards.answers = getAnswers();
            for (let i = 0; i < quiz.numOfAnswers; i++) {
                ui.answerText[i].text = getAnswerText(i);
            }
        }

        initialize();
        newGame();

    }
}