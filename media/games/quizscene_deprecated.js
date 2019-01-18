
defaultFont = {
    fontFamily: 'Arial',
    fontSize: '32px',
    fill: '#FFF'
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function newQuiz(lesson, maxItems=20) {
    var allVocab = getData();
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
            itemsToAdd = extraQuestions.length
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


class QuizScene extends Phaser.Scene {
    constructor() {
        super({key:"QuizScene"});
    }

    preload() {
    }
    
    create() {
        const currentLesson = 1;
        const numOfAnswers = 4;
        var quizDeck = newQuiz(currentLesson);
        var answerDeck = newAnswerDeck(currentLesson);
        var rightPile = [];
        var wrongPile = [];
        var completedPile = [];
        var answeredCorrectly = true;
        var correctAnswers = 0;
        var totalAnswers = 0;

        function getAnswers() {
            var answerList = [];
            answerList.push(question);
            while (answerList.length < numOfAnswers) {
                if (!answerDeck.length) {
                    answerDeck = newAnswerDeck(currentLesson);
                }
                if (answerDeck[0].id !== question.id) {
                    if (!answerList.includes(answerDeck[0])) {
                        answerList.push(answerDeck[0])
                    }
                }
                answerDeck.shift();
            }
            shuffleArray(answerList);
            return answerList;
        }

        var question = quizDeck.pop();
        var questionText = this.add.text(30, 30, question.character, defaultFont);
    
        var answers = getAnswers();
        var answerText = [];
        
        var buttons = [];

        for (let i = 0; i < numOfAnswers; i++) {
            buttons.push(this.add.rectangle(180, 120 + (100*i), 300, 50, 0x6666ff).setInteractive());
            buttons[i].on('pointerdown', function () {
                if (answers[i] == question) {
                    this.fillColor = 0x00ff00;
                    setTimeout(nextQuestion, 500);
                } else {
                    answeredCorrectly = false;
                    this.fillColor = 0xff0000;
                }
            });
        }

        answers.forEach((element, index) => {
            answerText.push(this.add.text(50, 100*(index+1), element.english, defaultFont));
        });

        const endGame = () => {
            console.log('ending game');
            this.scene.start('StartScene');
        }

        function runOutOfCards() {
            if (wrongPile.length) {
                quizDeck = wrongPile;
                wrongPile = [];
                shuffleArray(quizDeck);
            } else {
                if (rightPile.length) {
                    quizDeck = rightPile;
                    rightPile = [];
                    shuffleArray(quizDeck);
                } else {
                    var accuracy = Math.floor((correctAnswers / totalAnswers) * 100);
                    var gameOverMsg = 'You gained ' + accuracy + '% accuracy';
                    console.log(gameOverMsg);
                    endGame();
                }
            }
        }

        function nextQuestion() {
            var mostRecentQuestion = question;
            totalAnswers++;


            if (answeredCorrectly) {
                question.correctGuesses++;
                correctAnswers++;
                if (question.correctGuesses == 1) {
                    completedPile.push(question);
                } else {
                    rightPile.push(question);
                }
            } else {
                wrongPile.push(question);
            }
            answeredCorrectly = true;

            if (!quizDeck.length) {
                runOutOfCards();
            }
            
            if (!quizDeck[0] == mostRecentQuestion) {
                question = quizDeck.pop();
            } else {
                var layAside = quizDeck.pop();
                if (!quizDeck.length) {
                    runOutOfCards();
                }
                quizDeck.unshift(layAside);
                question = quizDeck.pop();
            }

            questionText.text = question.character;
            for (let i = 0; i < numOfAnswers; i++) {
                buttons[i].fillColor = 0x6666ff;
            }
            answers = getAnswers();
            answers.forEach((element, index) => {
                answerText[index].text = element.english;
            });
        }
    }
    
    update() {
    }
}