var quiz = {
    currentLesson: importData.lesson,
    numOfAnswers: 4,
    correctGuesses: 1, // number of times each item needs to be answered correctly before end of game
    maxLength: 10,
    mode: "falling tones", // multiple choice, type answer, add tones, falling tones
    prompt: "english",
    answerFormat: "pinyin" // character, english, pinyin
};
var user = {};
var cards;
var ui = {};
var state = {};

WebFont.load({google: {families: ['Carter One', 'ABeeZee']}});

defaultFont = {
    fontFamily: 'Arial',
    fontSize: '32px',
    fill: '#FFF'
}

var darkFont = {
    fontFamily: 'Arial',
    fontSize: '32px',
    fill: '#111'
}

var newFont = {
    fontFamily: 'ABeeZee',
    fontSize: '24px',
    fill: '#111'
}

var newFontLarger = {
    fontFamily: 'ABeeZee',
    fontSize: '45px',
    fill: '#111'
}

var themeFont = {
    fontFamily: 'Carter One',
    fontSize: '32px',
    fill: '#111'
}

var barFont = {
    fontFamily: 'Carter One',
    fontSize: '60px',
    fill: '#AAAA55'
}

var smallFont = {
    fontFamily: 'Arial',
    fontSize: '20px',
    fill: '#111'
}

var largeFont = {
    fontFamily: 'Arial',
    fontSize: '40px',
    fill: '#111'
}

var funnyFont = {
    fontFamily: 'Carter One',
    fontSize: '300px',
    fill: '#e6086d'
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

function myLoad(config, game) {
    if (typeof config == "string") {
        if (config == "buttons") {
            game.load.image('unclicked', '../../../media/images/unclicked.png')
            game.load.image('l_unclicked', '../../../media/images/l_unclicked.png')
            game.load.image('hover', '../../../media/images/hover.png')
            game.load.image('l_hover', '../../../media/images/l_hover.png')
            game.load.image('mousedown', '../../../media/images/mousedown.png')
            game.load.image('l_mousedown', '../../../media/images/l_mousedown.png')
            game.load.image('false', '../../../media/images/false.png')
            game.load.image('l_false', '../../../media/images/l_false.png')
            game.load.image('correct', '../../../media/images/correct.png')
            game.load.image('l_correct', '../../../media/images/l_correct.png')
        }
    } else {
        config.loadObjects.forEach((element) => {
            if (element.type == "image") {
                game.load.image(element.name, config.mediaURL + element.file);
            } else if (element.type == "atlas") {
                game.load.atlas(element.name, config.mediaURL + element.file, config.mediaURL + element.json);
            }
        });
    }
}