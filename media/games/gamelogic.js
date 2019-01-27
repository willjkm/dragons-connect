
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function newQuizDeck(lesson, maxItems=20) {
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
        answerText: [],
        buttons: []
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

function checkUserInput(choice) {
    if (cards.answers[choice] == cards.question) {
        ui.buttons[choice].fillColor = 0x00ff00;
        setTimeout(nextQuestion, 500);
        return true
    } else {
        user.answeredCorrectly = false;
        ui.buttons[choice].fillColor = 0xff0000;
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

    var justasked = cards.question;

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
        ui.questionText.text = cards.question[quiz.prompt];

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
