
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

var keyDictionary = {
    alphabet: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    toneNumbers: ['1', '2', '3', '4']
}

var diacritic = {
    a: ['ā', 'á', 'ǎ', 'à'],
    e: ['ē', 'é', 'ě', 'è'],
    i: ['ī', 'í', 'ǐ', 'ì'],
    o: ['ō', 'ó', 'ǒ', 'ò'],
    u: ['ū', 'ú', 'ǔ', 'ù'],
    v: ['ǖ', 'ǘ', 'ǚ', 'ǜ']
}

function toneConvert(string, tonemark) {
    var tone = Number(tonemark);
    var newString = '';

    function tonify(string, index, vowel, tone) {
        var insert = '';
        var newText = '';

        switch (vowel) {
            case 'a':
                insert = diacritic.a[tone];
                break;
            case 'e':
                insert = diacritic.e[tone];
                break;
            case 'i':
                insert = diacritic.i[tone];
                break;
            case 'o':
                insert = diacritic.o[tone];
                break;
            case 'u':
                insert = diacritic.u[tone];
                break;
            case 'v':
                insert = diacritic.v[tone];
                break;
        }        

        if (index == string.length - 1) {
            newText = string.slice(0, index) + insert;
        } else {
            newText = string.slice(0, index) + insert + string.slice((index + 1) - string.length);
        }

        return newText;
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