class Grammar extends Phaser.Scene {
    constructor() {
        super({key:"Grammar"});
    }

    preload() {
        this.add.image(0,0, 'loading').setOrigin(0,0);
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
            ]
        }
        myLoad(loadConfig, this);
    }

    create() {
        this.add.image(0,0, 'background').setOrigin(0,0);
        var currentLesson = 2;
        var currentLine = 0;
        var vocabData = getDictionaryData();
        var dialogData = getDialogData();
        var lines = [];
        ui.displayMode = "characters";

        dialogData.forEach((line) => {
            if (line.Lesson == currentLesson) {
                lines.push(line);
            }
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

        var displaySentence = () => {
            
            if (ui.displayList !== []) {
                ui.displayList.forEach((vocab) => {
                    vocab.displayText.setVisible(false);
                })
                ui.displayList = [];
            }
            
            ui.displayList = parseLine(lines[currentLine].Chinese);

            var cursor = 130;
            var punctuation = ["!","?",".",","]
            var capitalize = true

            ui.displayList.forEach((vocab) => {
                if (ui.displayMode == "characters") {
                    vocab.displayText = this.add.text(cursor, 335, vocab.character, ubuntuDark).setInteractive();
                } else {
                    if (punctuation.includes(vocab.pinyin)) {
                        vocab.displayText = this.add.text(cursor, 335, vocab.pinyin, ubuntuDarkSmall).setInteractive();
                        if (vocab.pinyin !== ",") {
                            capitalize = true;
                        }
                    } else {
                        if (capitalize) {
                            let newPinyin = vocab.pinyin.slice(0,1).toUpperCase() + vocab.pinyin.slice(1);
                            vocab.displayText = this.add.text(cursor, 335, " " + newPinyin, ubuntuDarkSmall).setInteractive();
                            capitalize = false;
                        } else {
                            vocab.displayText = this.add.text(cursor, 335, " " + vocab.pinyin, ubuntuDarkSmall).setInteractive();
                        }
                    }
                }
                if (vocab.english) {
                    var width = vocab.displayText.width*0.5
                    var characterWidth;
                    if (ui.displayMode == "pinyin") {
                        var dummyText = this.add.text(0,0,vocab.character, ubuntuDark).setVisible(false);
                        characterWidth = dummyText.width;
                    } else {
                        characterWidth = width * 2
                    }
                    vocab.dictionary = {
                        "bubble": this.add.image(cursor-40+width,110, 'dictbubble').setOrigin(0,0).setVisible(false),
                        "character": this.add.text(cursor-20+width, 130, vocab.character, ubuntuDark).setVisible(false),
                        "pinyin": this.add.text(cursor-15+width + characterWidth, 135, vocab.pinyin, ubuntuGrey).setVisible(false),
                        "english": this.add.text(cursor-20+width, 170, vocab.english, ubuntuRed).setVisible(false),
                        "notes":this.add.text(cursor-20+width, 230, vocab.notes, smallFont).setWordWrapWidth(335, true).setVisible(false)
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
                }
                cursor += vocab.displayText.width;
            });
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
            ui.english.setText(lines[currentLine].English);
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
            ui.english.setText(lines[currentLine].English);
            displaySentence();
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
            "grey": this.add.image(20, 510, 'toggleGrey').setOrigin(0,0).setInteractive(),
            "blue": this.add.image(20, 510, 'toggleBlue').setOrigin(0,0).setAlpha(0).setInteractive(),
            "button": this.add.image(20, 510, 'toggleButton').setOrigin(0,0).setInteractive(),
            "displayText": this.add.text(100,515, 'Toggle Pinyin', ubuntuDarkSmall).setOrigin(0,0),
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

        ui.english = this.add.text(400,435, lines[currentLine].English, ubuntuGrey).setOrigin(0.5,0.5).setAlpha(0)

        ui.englishToggle = {
            "grey": this.add.image(260, 510, 'toggleGrey').setOrigin(0,0).setInteractive(),
            "blue": this.add.image(260, 510, 'toggleBlue').setOrigin(0,0).setAlpha(0).setInteractive(),
            "button": this.add.image(260, 510, 'toggleButton').setOrigin(0,0).setInteractive(),
            "displayText": this.add.text(340,515, 'Show English', ubuntuDarkSmall).setOrigin(0,0),
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

        
        displaySentence();

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
                {type: "image", name: "splash", file: "grammar_splash.jpg"},
                {type: "image", name: "loading", file: "grammar_splash.jpg"},
            ]
        }
        
        myLoad(loadConfig, this);
        myLoad("buttons", this);
    }

    create() {
        this.add.image(0,0, 'splash').setOrigin(0,0);

        var startButton = addButton('small', 290, 420, "Start", this);

        startButton.button.on('pointerdown', () => {
            this.scene.start('Grammar');
        });
    }
}