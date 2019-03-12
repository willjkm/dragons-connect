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
            ]
        }
        myLoad(loadConfig, this);
    }

    create() {
        this.add.image(0,0, 'background').setOrigin(0,0);
        var currentLesson = 6;
        var currentLine = 6;
        var vocabData = getDictionaryData();
        var dialogData = getDialogData();
        var lines = [];

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
        
        var displayList = parseLine(lines[currentLine].Chinese);

        var cursor = 200;

        displayList.forEach((vocab) => {
            if (typeof vocab.displayText !== 'undefined') {
                console.log(vocab);
            }
            vocab.displayText = this.add.text(cursor, 335, vocab.character, ubuntuDark).setInteractive();
            if (vocab.english) {
                var width = vocab.displayText.width*0.5
                vocab.dictionary = {
                    "bubble": this.add.image(cursor-40+width,110, 'dictbubble').setOrigin(0,0).setVisible(false),
                    "character": this.add.text(cursor-20+width, 130, vocab.character, ubuntuDark).setVisible(false),
                    "pinyin": this.add.text(cursor-15+width*3, 135, vocab.pinyin, ubuntuGrey).setVisible(false),
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

        // var entry1 = this.add.text(180, 130, displayList[0].character, ubuntuDark);
        // this.add.text(180 + entry1.width + 15, 130 + 5, displayList[0].pinyin, ubuntuGrey);
        // this.add.text(180, 170, displayList[0].english, ubuntuRed);
        // this.add.text(180, 230, displayList[0].notes, smallFont).setWordWrapWidth(355, true);


        // var test = this.add.text(400, 350, "result here", darkFont).setOrigin(0.5, 0.5).setInteractive();

        // console.log(test.width)

        // test.on('pointerover', () => {
        //     test.setColor('#FFFFFF');
        // });

        // test.on('pointerout', () => {
        //     test.setColor('#000000');
        // });

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