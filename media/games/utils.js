var quiz = {
    currentLesson: importData.lesson,
    numOfAnswers: 4,
    correctGuesses: 1, // number of times each item needs to be answered correctly before end of game
    maxLength: 10,
    mode: "", // multiple choice, type answer, add tones, falling tones
    prompt: "english",
    answerFormat: "pinyin" // character, english, pinyin
};

if (importData.scene_name == 'FallingTones') {
    quiz.mode = 'falling tones';
} else {
    quiz.mode = 'multiple choice';
}

var user = {};
var cards;
var ui = {};
var state = {};

WebFont.load({google: {families: ['Carter One', 'ABeeZee', 'Ubuntu', 'Ubuntu Mono', 'Cabin Sketch', 'Noto Sans SC']}});

defaultFont = {
    fontFamily: 'Arial',
    fontSize: '32px',
    fill: '#FFF'
}

var chineseFont = {
    fontFamily: 'Noto Sans SC',
    fontSize: '32px',
    fill: '#111'
}

var sketchyFont = {
    fontFamily: 'Cabin Sketch',
    fontSize: '38px',
    fill: '#FFF'
}

var monoFont = {
    fontFamily: 'Ubuntu Mono',
    fontSize: '28px',
    fill: '#FFF'
}

var ubuntuFont = {
    fontFamily: 'Ubuntu',
    fontSize: '30px',
    fill: '#FFF'
}

var ubuntuDark = {
    fontFamily: 'Ubuntu',
    fontSize: '30px',
    fill: '#111'
}

var ubuntuDarkSmall = {
    fontFamily: 'Ubuntu',
    fontSize: '25px',
    fill: '#111'
}

var ubuntuGrey = {
    fontFamily: 'Ubuntu',
    fontSize: '26px',
    fill: '#3f86dd'
}

var ubuntuRed = {
    fontFamily: 'Ubuntu',
    fontSize: '50px',
    fill: '#e21616'
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

var instructionFont = {
    fontFamily: 'ABeeZee',
    fontSize: '18px',
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

var barFontLarge = {
    fontFamily: 'Carter One',
    fontSize: '90px',
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

var funnyFontMedium = {
    fontFamily: 'Carter One',
    fontSize: '150px',
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
            } else if (element.type == "sound") {
                game.load.audio(element.name, config.mediaURL + element.file);
            }
        });
    }
}

function shuffleArray(arr) {
    var array = arr;
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

var instructionsData = {
    race: {
        backgroundFile: 'dbr',
        slides: [
            {
                text: 'You are competing in a Dragon Boat race. Make your boat go faster by choosing the right words.',
                dialogPosition: [0,0],
                showArrow: false,
                arrowPosition: [0,0],
                arrowDirection: 'left'
            },
            {
                text: 'This is your boat.',
                dialogPosition: [200,50],
                showArrow: true,
                arrowPosition: [100,300],
                arrowDirection: 'up'
            },
            {
                text: 'This is the word you have to match.',
                dialogPosition: [400,200],
                showArrow: false,
                arrowPosition: [0,0],
                arrowDirection: 'left'
            },
            {
                text: 'These are the possible answers. \nIn this case, the correct answer is “you”.',
                dialogPosition: [200,150],
                showArrow: false,
                arrowPosition: [0,0],
                arrowDirection: 'left'
            },
            {
                text: 'The energy bar shows how fast your boat is going.',
                dialogPosition: [300,300],
                showArrow: false,
                arrowPosition: [0,0],
                arrowDirection: 'left'
            },
            {
                text: 'This is your race time. How fast can you complete the course? \n\nGood luck!',
                dialogPosition: [0,200],
                showArrow: false,
                arrowPosition: [0,0],
                arrowDirection: 'left'
            }
        ]
    },
    fallingTones: {
        backgroundFile: 'ft',
        slides: [
            {
                text: 'This game tests your memory of Chinese tones. \nThe goal of the game is to put all the words into the right bowl.',
                dialogPosition: [0,0],
                showArrow: false,
                arrowPosition: [0,0],
                arrowDirection: 'left'
            },
            {
                text: 'Each Chinese word has one of four tones. For example, the tone for “hen” is 3rd tone, which is marked with a V shape: hěn.',
                dialogPosition: [225,180],
                showArrow: false,
                arrowPosition: [0,0],
                arrowDirection: 'left'
            },
            {
                text: 'Use the arrow keys to move the words into the correct bowl.',
                dialogPosition: [225,180],
                showArrow: false,
                arrowPosition: [0,0],
                arrowDirection: 'left'
            },
            {
                text: 'This bowl shows the third tone, so this is where “hen” should fall.',
                dialogPosition: [225,180],
                showArrow: true,
                arrowPosition: [230,500],
                arrowDirection: 'right'
            },
            {
                text: 'If the word enters the wrong bowl, the wall will rise up.',
                dialogPosition: [225,180],
                showArrow: true,
                arrowPosition: [130,400],
                arrowDirection: 'down'
            },
            {
                text: 'You can see your current score and level. As your score increases, the levels become harder to complete. Good luck!',
                dialogPosition: [200,100],
                showArrow: false,
                arrowPosition: [0,0],
                arrowDirection: 'left'
            }
        ]
    },
    rockets: {
        backgroundFile: 'fw',
        slides: [
            {
                text: 'This game tests your Chinese listening skills. The goal of the game is to fire all your rockets successfully.',
                dialogPosition: [0,0],
                showArrow: false,
                arrowPosition: [0,0],
                arrowDirection: 'left'
            },
            {
                text: 'In every round you will hear a Chinese word, and you should click on the pinyin that matches the word you heard.',
                dialogPosition: [80,250],
                showArrow: false,
                arrowPosition: [0,0],
                arrowDirection: 'left'
            },
            {
                text: 'If you click on the correct rocket, it will fire. If you click on the wrong rocket, it will fall over.',
                dialogPosition: [200,30],
                showArrow: false,
                arrowPosition: [0,0],
                arrowDirection: 'left'
            },
            {
                text: 'The moon represents your remaining life. When you click on the wrong rocket, the moon will slowly disappear.',
                dialogPosition: [250,30],
                showArrow: false,
                arrowPosition: [0,0],
                arrowDirection: 'left'
            },
            {
                text: 'If you want to hear a word again, you can click on this button. You can hear a word as many times as you need. Good luck!',
                dialogPosition: [250,30],
                showArrow: true,
                arrowPosition: [130,250],
                arrowDirection: 'up'
            }
        ]
    },
    blockzi: {
        backgroundFile: 'bz',
        slides: [
            {
                text: 'This game tests your recognition of Chinese characters. The goal of the game is to clear the board of blocks.',
                dialogPosition: [0,0],
                showArrow: false,
                arrowPosition: [0,0],
                arrowDirection: 'left'
            },
            {
                text: 'In every round, you will have to click on characters that match an English word. In this round, you have to find characters that mean “four”.',
                dialogPosition: [200,30],
                showArrow: true,
                arrowPosition: [685,260],
                arrowDirection: 'up'
            },
            {
                text: 'These are all the matching characters. When you click a correct character, it will disappear.',
                dialogPosition: [200,30],
                showArrow: false,
                arrowPosition: [0,0],
                arrowDirection: 'left'
            },
            {
                text: 'When you clear a block, your power will increase.',
                dialogPosition: [200,300],
                showArrow: false,
                arrowPosition: [0,0],
                arrowDirection: 'left'
            },
            {
                text: 'This is a power-up block. Clicking on it will clear a row and a column. It will also clear away any stone blocks. Good luck!',
                dialogPosition: [300,340],
                showArrow: true,
                arrowPosition: [350,260],
                arrowDirection: 'right'
            }
        ]
    },
    quizTime: {
        backgroundFile: 'qt',
        slides: [
            {
                text: 'This game tests your knowledge and language from this lesson. The goal of the game is to light up Shanghai by answering questions correctly.',
                dialogPosition: [0,0],
                showArrow: false,
                arrowPosition: [0,0],
                arrowDirection: 'left'
            },
            {
                text: 'The spinner will select the topic of the next question. For example, pink = vocabulary.',
                dialogPosition: [260,20],
                showArrow: false,
                arrowPosition: [0,0],
                arrowDirection: 'left'
            },
            {
                text: 'This is the current question you have to answer.',
                dialogPosition: [40,20],
                showArrow: false,
                arrowPosition: [0,0],
                arrowDirection: 'left'
            },
            {
                text: 'These are the possible answers.',
                dialogPosition: [100,250],
                showArrow: false,
                arrowPosition: [0,0],
                arrowDirection: 'left'
            },
            {
                text: 'When you get an answer correct, part of Shanghai’s skyline will light up. When you get an answer wrong, the lights will turn off again. Good luck!',
                dialogPosition: [100,150],
                showArrow: false,
                arrowPosition: [0,0],
                arrowDirection: 'left'
            }
        ]
    },
}

function runInstructions(sceneName, game) {
    var data = instructionsData[sceneName];
    var background = game.add.sprite(0,0,data.backgroundFile+'0').setOrigin(0,0).setInteractive();
    var dialog = {
        back: game.add.image(225,180, 'idialog').setOrigin(0,0).setAlpha(0),
        text: game.add.text(255,210, data.slides[0].text, instructionFont).setWordWrapWidth(310, true).setLineSpacing(10)
    };
    var arrow = game.add.image(100,0, 'iarrow').setVisible(false);
    var currentSlide = 1;
    var acceptInput = true;

    game.tweens.add({
        targets: dialog.back,
        alpha: 1,
        ease: 'Power1',
        duration: 750
    });

    function nextSlide(slide, index) {
        background.setTexture(data.backgroundFile + index.toString());
        game.tweens.killAll();
        if (slide.showArrow) {
            arrow.setVisible(true);
            if (slide.arrowDirection == 'left') {
                arrow.setRotation(Math.PI);
                game.tweens.add({
                    targets: arrow,
                    x: slide.arrowPosition[0]+20,
                    ease: 'Power1',
                    yoyo: true,
                    duration: 600,
                    loop: -1
                });    
            } else if (slide.arrowDirection == 'right') {
                arrow.setRotation(0);
                    game.tweens.add({
                        targets: arrow,
                        x: slide.arrowPosition[0]-20,
                        ease: 'Power1',
                        yoyo: true,
                        duration: 600,
                        loop: -1
                    });    
            } else if (slide.arrowDirection == 'up') {
                arrow.setRotation(Math.PI*3/2);
                game.tweens.add({
                    targets: arrow,
                    y: slide.arrowPosition[1]+20,
                    ease: 'Power1',
                    yoyo: true,
                    duration: 600,
                    loop: -1
                });    
            } else if (slide.arrowDirection == 'down') {
                arrow.setRotation(Math.PI/2);
                game.tweens.add({
                    targets: arrow,
                    y: slide.arrowPosition[1]-20,
                    ease: 'Power1',
                    yoyo: true,
                    duration: 600,
                    loop: -1
                });    
            }
            arrow.setPosition(slide.arrowPosition[0], slide.arrowPosition[1]);
        } else {
            arrow.setVisible(false);
        }
        dialog.text.setVisible(false);
        acceptInput = false;
        game.tweens.add({
            targets: dialog.back,
            x: slide.dialogPosition[0],
            y: slide.dialogPosition[1],
            ease: 'Power1',
            duration: 600
        });
        
        setTimeout(() => {
            dialog.text.setVisible(true);
            dialog.text.setPosition(slide.dialogPosition[0]+25,slide.dialogPosition[1]+30);
            dialog.text.setText(slide.text);
            acceptInput = true;
        }, 600);
    }

    background.on('pointerdown', () => {
        if (currentSlide < data.slides.length) {
            if (acceptInput) {
                nextSlide(data.slides[currentSlide], currentSlide);
                currentSlide++;    
            }
        } else {
            background.setVisible(false).setInteractive(false);
            dialog.back.setVisible(false);
            dialog.text.setVisible(false);
            arrow.setVisible(false);
        }
    })

}