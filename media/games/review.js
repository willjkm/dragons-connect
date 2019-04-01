class GameScene extends Phaser.Scene {
    constructor() {
        super({key:"GameScene"});
    }

    preload() {
        this.add.image(0,0, 'splash').setOrigin(0,0);
        this.add.text(600, 400, "Loading", themeFont).setOrigin(0.5, 0.5);
        ui.loadingStar = this.add.image(600, 480, 'loadingstar');
        this.tweens.add({
            targets: ui.loadingStar,
            angle: 360,
            ease: 'Power1',
            duration: 1300,
            repeat: -1
        });

        var loadConfig = {
            mediaURL: "../../../media/images/",
            loadObjects: [
                {type: "image", name: "background", file: "grammar_background.jpg"},
                {type: "image", name: "dictbubble", file: "dict_bubble.png"},
                {type: "image", name: "toggleBlue", file: "toggle_blue.png"},
                {type: "image", name: "toggleGrey", file: "toggle_grey.png"},
                {type: "image", name: "toggleButton", file: "toggle_button.png"},
                {type: "image", name: "rightArrow", file: "right_arrow.png"},
                {type: "image", name: "rightArrowHover", file: "right_arrow_hover.png"},
                {type: "image", name: "leftArrow", file: "left_arrow.png"},
                {type: "image", name: "leftArrowHover", file: "left_arrow_hover.png"},
                {type: "image", name: "meimei", file: "mei_circle.png"},
                {type: "image", name: "an", file: "an_circle.png"},
                {type: "image", name: "tianwen", file: "tianwen_circle.png"},
                {type: "image", name: "emptyCircle", file: "empty_circle.png"},
                {type: "image", name: "emptyCircleWhite", file: "empty_circle_white.png"},
                {type: "image", name: "progressGrey", file: "progress_grey.png"},
                {type: "image", name: "progressGreen", file: "progress_green.png"},
                {type: "image", name: "audioIcon", file: "audio_icon.png"},
                {type: "image", name: "coin", file: "coin.png"},
                {type: "image", name: "coin_disabled", file: "coin_disabled.png"},
                {type: "image", name: "spark", file: "spark.png"}
            ]
        }
        myLoad(loadConfig, this);
        
        var myDict = getDictionaryData();

        var soundsToLoad = [];

        myDict.forEach((obj) => {
            soundsToLoad.push({
                type: "sound",
                name: obj.pinyin,
                file: obj.soundfile
            })
        })
        
        var soundLoadConfig = {
            mediaURL: "../../../media/sounds/",
            loadObjects: soundsToLoad
        }
        myLoad(soundLoadConfig, this);


        var dialogData = getDialogData();
        var moreSoundsToLoad = [];

        var counter = 1
        dialogData.forEach((obj) => {
            if (obj.lesson == importData.lesson) {
                moreSoundsToLoad.push({
                    type: "sound",
                    name: 'line-'+ (counter).toString(),
                    file: obj.soundfile    
                })
                counter++;
            }
        })

        var soundLoadConfig = {
            mediaURL: "../../../media/sounds/",
            loadObjects: moreSoundsToLoad
        }
        myLoad(soundLoadConfig, this);
    }

    create() {
        this.tweens.killTweensOf(ui.loadingStar);
        ui.loadingStar.setVisible(false);

        this.add.image(0,0, 'background').setOrigin(0,0);
        var currentLesson = importData.lesson;
        var currentLine = 0;
        var vocabData = getDictionaryData();
        var dialogData = getDialogData();
        
        var lines = [];

        ui.displayMode = "characters";

        dialogData.forEach((line) => {
            if (line.lesson == currentLesson) {
                lines.push(line);
            }
        })

        lines.forEach((line, index) => {
            line.audio = this.sound.add('line-'+ (index+1).toString());
        })

        // parse Chinese, return an array of objects: either vocab item or punctuation.

        const parseLine = (line) => {
            var punctuation = ["！","？","。","，"];
            var result = [];
            var ignoreCharacters = 0;
            function findWord(word) {
                var foundWord = vocabData.find((vocab) => vocab.character === word);
                var result = {}
                let key;
                for (key in foundWord) {
                    result[key] = foundWord[key]; // this creates a new object rather than pointing to the old one.
                }
                return result;
            }

            for (let i=0;i<line.length;i++) { // iterate over every character
                if (ignoreCharacters == 0) {
                    if (punctuation.includes(line[i])) {
                        var newPunctuation = [
                            {
                                "old": "！",
                                "new": "!"
                            },
                            {
                                "old": "？",
                                "new": "?"
                            },
                            {
                                "old": "。",
                                "new": "."
                            },
                            {
                                "old": "，",
                                "new": ","
                            }
                        ]

                        var newPunc = newPunctuation.find((character) => character.old === line[i]).new

                        result.push({
                            "character": line[i],
                            "pinyin": newPunc,
                            "english": ""
                        });
                    } else if (line[i] == "~") { // this special character indicates a following word of multiple characters
                        if (line[i+1] == "~") {
                            result.push(findWord(line[i+2] + line[i+3] + line[i+4]));
                            ignoreCharacters = 4;
                        } else {
                            result.push(findWord(line[i+1] + line[i+2]));
                            ignoreCharacters = 2;
                        }
                    } else {
                        result.push(findWord(line[i]));
                    }
                } else {
                    ignoreCharacters--;
                }
            }    
            return result        
        }
        
        ui.displayList = [];

        var firstTime = true;

        var displaySentence = () => {
            if (!firstTime) {
                lines[currentLine].audio.play();
            }
            firstTime = false;

            if (currentLine == 0) {
                ui.leftArrow.setVisible(false);
            }

            if (currentLine == 1) {
                ui.leftArrow.setVisible(true);
            }

            ui.circle.setTexture(lines[currentLine].speaker);

            ui.progress[currentLine].setTexture('progressGreen');
            if (currentLine < lines.length - 1) {
                ui.progress[currentLine + 1].setTexture('progressGrey');
            }

            if (ui.displayList !== []) {
                ui.displayList.forEach((vocab) => {
                    vocab.displayText.setVisible(false);
                })
                ui.displayList = [];
            }
            
            ui.displayList = parseLine(lines[currentLine].chinese);

            var cursor = 130;
            var punctuation = ["!","?",".",","]
            var capitalize = true

            var populateDictionary = (vocab) => {
                if (vocab.english) { // if an entry exists
                    var width = (vocab.displayText.width*0.5) + cursor - 150;
                    if (width > 430) {
                        width = 430;
                    }
                    var characterWidth;
                    if (ui.displayMode == "pinyin") {
                        var dummyText = this.add.text(0,0,vocab.character, ubuntuDark).setVisible(false);
                        characterWidth = dummyText.width;
                    } else {
                        characterWidth = vocab.displayText.width;
                    }
                    vocab.dictionary = {
                        "bubble": this.add.image(width - 20,110, 'dictbubble').setOrigin(0,0).setVisible(false),
                        "character": this.add.text(width, 130, vocab.character, chineseFont).setVisible(false),
                        "pinyin": this.add.text(width + characterWidth + 5, 135, vocab.pinyin, ubuntuGrey).setVisible(false),
                        "english": this.add.text(width, 170, vocab.english, ubuntuRed).setVisible(false),
                        "notes": this.add.text(width, 230, vocab.notes, smallFont).setWordWrapWidth(335, true).setVisible(false),
                        "sound": this.sound.add(vocab.pinyin)
                    }
                    vocab.displayText.on('pointerover', () => {
                        vocab.displayText.setColor('#FFF');
                        vocab.dictionary.bubble.setVisible(true);
                        vocab.dictionary.character.setVisible(true);
                        vocab.dictionary.pinyin.setVisible(true);
                        vocab.dictionary.english.setVisible(true);
                        vocab.dictionary.notes.setVisible(true);
                    });
                    vocab.displayText.on('pointerout', () => {
                        vocab.displayText.setColor('#111');
                        vocab.dictionary.bubble.setVisible(false);
                        vocab.dictionary.character.setVisible(false);
                        vocab.dictionary.pinyin.setVisible(false);
                        vocab.dictionary.english.setVisible(false);
                        vocab.dictionary.notes.setVisible(false);
                    });
                    vocab.displayText.on('pointerdown', () => {
                        vocab.dictionary.sound.play();
                    });
                }
            }

            // find length of pinyin: if it's too long, then reduce font size

            var displayPinyin = (font) => {
                ui.displayList.forEach((vocab) => {
                    if (punctuation.includes(vocab.pinyin)) {
                        vocab.displayText = this.add.text(cursor, 335, vocab.pinyin, font).setInteractive();
                        if (vocab.pinyin !== ",") {
                            capitalize = true;
                        }
                    } else {
                        if (capitalize) {
                            let newPinyin = vocab.pinyin.slice(0,1).toUpperCase() + vocab.pinyin.slice(1);
                            vocab.displayText = this.add.text(cursor, 335, " " + newPinyin, font).setInteractive();
                            capitalize = false;
                        } else {
                            vocab.displayText = this.add.text(cursor, 335, " " + vocab.pinyin, font).setInteractive();
                        }
                    }
                    populateDictionary(vocab);
                    cursor += vocab.displayText.width;
                })
            }

            if (ui.displayMode == "pinyin") {
                displayPinyin(ubuntuDark);
                if (cursor > 600) { //re-write with smaller font
                    cursor = 130;
                    ui.displayList.forEach((vocab) => {
                        vocab.displayText.setVisible(false);
                    })
                    displayPinyin(ubuntuDarkSmall);
                }
            } else if (ui.displayMode == "characters") {
                ui.displayList.forEach((vocab) => {
                    vocab.displayText = this.add.text(cursor, 335, vocab.character, chineseFont).setInteractive();
                    populateDictionary(vocab);
                    cursor += vocab.displayText.width;
                });
            }

            // populate dictionary



            var shift = 0.5*(670 - cursor)
            ui.displayList.forEach((vocab) => {
                vocab.displayText.x += shift
                if (typeof vocab.dictionary == "object") {
                    vocab.dictionary.bubble.x += shift
                    vocab.dictionary.character.x += shift
                    vocab.dictionary.pinyin.x += shift
                    vocab.dictionary.english.x += shift
                    vocab.dictionary.notes.x += shift    
                }
            })

        }

        ui.leftArrow = this.add.sprite(70,350, 'leftArrow').setInteractive();
        ui.rightArrow = this.add.sprite(720,350, 'rightArrow').setInteractive();

        ui.leftArrow.on('pointerover', () => {
            ui.leftArrow.setTexture('leftArrowHover')
        })
        ui.leftArrow.on('pointerout', () => {
            ui.leftArrow.setTexture('leftArrow')
        })
        ui.leftArrow.on('pointerdown', () => {
            currentLine--;
            ui.english.setText(lines[currentLine].english);
            displaySentence();
        })

        ui.rightArrow.on('pointerover', () => {
            ui.rightArrow.setTexture('rightArrowHover')
        })
        ui.rightArrow.on('pointerout', () => {
            ui.rightArrow.setTexture('rightArrow')
        })

        ui.rightArrow.on('pointerdown', () => {
            currentLine++;
            if (currentLine == lines.length) {
                endActivity(3, this);
            } else {
                ui.english.setText(lines[currentLine].english);
                displaySentence();
            }
        })

        ui.fadeIn = (obj) => {
            this.tweens.add({
                targets: obj,
                alpha: 1,
                ease: 'Power1',
                duration: 200
            });
        }

        ui.fadeOut = (obj) => {
            this.tweens.add({
                targets: obj,
                alpha: 0,
                ease: 'Power1',
                duration: 200
            });
        }

        ui.shiftRight = (obj) => {
            this.tweens.add({
                targets: obj,
                x: '+=30',
                ease: 'Power1',
                duration: 200
            });
        }

        ui.shiftLeft = (obj) => {
            this.tweens.add({
                targets: obj,
                x: '-=30',
                ease: 'Power1',
                duration: 200
            });
        }


        ui.pinyinToggle = {
            "grey": this.add.image(150, 510, 'toggleGrey').setOrigin(0,0).setInteractive(),
            "blue": this.add.image(150, 510, 'toggleBlue').setOrigin(0,0).setAlpha(0).setInteractive(),
            "button": this.add.image(150, 510, 'toggleButton').setOrigin(0,0).setInteractive(),
            "displayText": this.add.text(230,515, 'Show Pinyin', ubuntuDarkSmall).setOrigin(0,0).setInteractive(),
            "active": false
        }

        ui.pinyinToggle.toggle = () => {
            if (ui.pinyinToggle.active) {
                ui.shiftLeft(ui.pinyinToggle.button);
                ui.fadeOut(ui.pinyinToggle.blue);
                ui.pinyinToggle.active = false;
                ui.displayMode = "characters";
                displaySentence();
            } else {
                ui.shiftRight(ui.pinyinToggle.button);
                ui.fadeIn(ui.pinyinToggle.blue);
                ui.pinyinToggle.active = true;
                ui.displayMode = "pinyin";
                displaySentence();
            }
        }

        ui.pinyinToggle.grey.on('pointerdown', () => {
            ui.pinyinToggle.toggle();
        })

        ui.pinyinToggle.blue.on('pointerdown', () => {
            ui.pinyinToggle.toggle();
        })

        ui.pinyinToggle.button.on('pointerdown', () => {
            ui.pinyinToggle.toggle();
        })

        ui.pinyinToggle.displayText.on('pointerdown', () => {
            ui.pinyinToggle.toggle();
        })

        ui.english = this.add.text(400,455, lines[currentLine].english, ubuntuGrey).setOrigin(0.5,0.5).setAlpha(0)

        ui.englishToggle = {
            "grey": this.add.image(400, 510, 'toggleGrey').setOrigin(0,0).setInteractive(),
            "blue": this.add.image(400, 510, 'toggleBlue').setOrigin(0,0).setAlpha(0).setInteractive(),
            "button": this.add.image(400, 510, 'toggleButton').setOrigin(0,0).setInteractive(),
            "displayText": this.add.text(480,515, 'Show English', ubuntuDarkSmall).setOrigin(0,0).setInteractive(),
            "active": false
        }

        ui.englishToggle.toggle = () => {
            if (ui.englishToggle.active) {
                ui.shiftLeft(ui.englishToggle.button);
                ui.fadeOut(ui.englishToggle.blue);
                ui.englishToggle.active = false;
                ui.fadeOut(ui.english);
            } else {
                ui.shiftRight(ui.englishToggle.button);
                ui.fadeIn(ui.englishToggle.blue);
                ui.englishToggle.active = true;
                ui.fadeIn(ui.english);
            }
        }

        ui.englishToggle.grey.on('pointerdown', () => {
            ui.englishToggle.toggle();
        })

        ui.englishToggle.blue.on('pointerdown', () => {
            ui.englishToggle.toggle();
        })

        ui.englishToggle.button.on('pointerdown', () => {
            ui.englishToggle.toggle();
        })

        ui.englishToggle.displayText.on('pointerdown', () => {
            ui.englishToggle.toggle();
        })

        ui.audio = {
            "circle": this.add.sprite(625, 175, 'emptyCircle').setInteractive(),
            "icon": this.add.image(625, 150, 'audioIcon'),
            "displayText": this.add.text(625, 195, 'Listen again', ubuntuDarkSmall).setOrigin(0.5,0.5)
        }

        ui.audio.circle.on('pointerover', () => {
            ui.audio.circle.setTexture('emptyCircleWhite');
        });

        ui.audio.circle.on('pointerout', () => {
            ui.audio.circle.setTexture('emptyCircle');
        });

        ui.audio.circle.on('pointerdown', () => {
            lines[currentLine].audio.play();
        });



        ui.circle = this.add.sprite(175, 175, 'emptyCircle')
        
        ui.progress = []

        if (lines.length > 11) {
            lines.forEach((line, index) => {
                ui.progress.push(this.add.sprite(50 + index*55, 30, 'progressGrey').setScale(0.6, 0.8))
            })
        } else {
            lines.forEach((line, index) => {
                ui.progress.push(this.add.sprite(50 + index*70 + (11-lines.length)*35, 30, 'progressGrey').setScale(0.8))
            })
        }

        displaySentence();
        setTimeout(() => {
            displaySentence()
        }, 500);
    }

    update() {
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
                {type: "image", name: "splash", file: "grammar_newsplash.jpg"},
                {type: "image", name: "loadingstar", file: "loadingstar.png"},
            ]
        }
        
        myLoad(loadConfig, this);
        myLoad("buttons", this);
    }

    create() {
        this.add.text(0, -100, "Null", ubuntuRed); // loading font early
        this.add.image(0,0, 'splash').setOrigin(0,0);

        var startButton
        
        startButton = addButton('small', 600, 450, "Start", this);
        startButton.button.on('pointerdown', () => {
            this.scene.start('GameScene');
        });        
    }
}