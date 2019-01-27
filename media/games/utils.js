var quiz = {
    currentLesson: 6,
    numOfAnswers: 4,
    correctGuesses: 1, // number of times each item needs to be answered correctly before end of game
    maxLength: 10,
    mode: "multiple choice", // multiple choice, type answer, add tones
    prompt: "english",
    answerFormat: "pinyin" // character, english, pinyin
};
var user;
var cards;
var ui;
var state = {};

defaultFont = {
    fontFamily: 'Arial',
    fontSize: '32px',
    fill: '#FFF'
}

var largeFont = {
    fontFamily: 'Arial',
    fontSize: '80px',
    fill: '#707070'
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

var percentage_to_color = (percentage) => {
    var r, g, b = 0;
    if(percentage < 50) {
        r = 255;
        g = Math.round(5.1 * percentage);
    }
    else {
        g = 255;
        r = Math.round(510 - 5.10 * percentage);
    }
    var h = r * 0x10000 + g * 0x100 + b * 0x1;
    return '0x' + ('00000000' + h.toString(16)).slice(-6);
}