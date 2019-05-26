class GameScene extends Phaser.Scene {
    constructor() {
        super({key:"GameScene"});
    }

    preload() {
        this.add.image(0,0, 'splash').setOrigin(0,0);
        ui.loadingStar = this.add.image(600, 470, 'loadingstar');
        this.tweens.add({
            targets: ui.loadingStar,
            angle: 360,
            ease: 'Power1',
            duration: 1300,
            repeat: -1
        });

        var loadConfig = {
            mediaURL: "../../../static/images/",
            loadObjects: [
                {type: "image", name: "scroll", file: "scroll.png"},
                {type: "image", name: "roll", file: "roll.png"},
                {type: "image", name: "coin", file: "coin.png"},
                {type: "image", name: "coin_disabled", file: "coin_disabled.png"},
                {type: "image", name: "spark", file: "spark.png"}
            ]
        }
        myLoad(loadConfig, this);

        ui.data = getCultureData();

        var levelConfig = {
            mediaURL: "../../../static/images/",
            loadObjects: ui.data[importData.lesson-1].assets
        }
        myLoad(levelConfig, this);


        var soundLoadConfig = {
            mediaURL: "../../../static/sounds/",
            loadObjects: [
                {type: "sound", name: "correct", file: "complete_chime.ogg"},
                {type: "sound", name: "wrong", file: "wrong.ogg"},
                {type: "sound", name: "start", file: "brrring.ogg"}
            ]
        }
        myLoad(soundLoadConfig, this);

    }

    create() {
        this.tweens.killTweensOf(ui.loadingStar);
        ui.loadingStar.setVisible(false);

        this.add.image(0,0, 'background').setOrigin(0,0);

        ui.sound = {
            correct: this.sound.add('correct'),
            wrong: this.sound.add('wrong'),
            start: this.sound.add('start'),
        }

        if (importData.lesson == 5) {
            ui.music = [
                this.sound.add('sheng'),
                this.sound.add('suona'),
                this.sound.add('erhu'),
                this.sound.add('pipa'),
                this.sound.add('guzheng')
            ]
        }

        var levelData = ui.data[importData.lesson-1];

        ui.target = [];

        levelData.targets.forEach((t) => {
            ui.target.push(this.physics.add.sprite(t.location[0], t.location[1], t.texture));
        });

        ui.label = [];

        levelData.labels.forEach((l) => {
            ui.label.push(this.physics.add.sprite(l.destination[0], l.destination[1], l.texture));
        });

        ui.label.forEach((l, index) => {
            l.origin = levelData.labels[index].origin;
            l.destination = levelData.labels[index].destination;
            l.complete = false;
        });

        ui.target.forEach((t, index) => {
            t.counter = 2;
            t.selected = false;
            t.originalTexture = levelData.targets[index].texture;
            t.hoverTexture = levelData.targets[index].hoverTexture;
        });


        ui.overlapCheck = [];

        ui.labelCenter = [];

        if (levelData.config.type == "blocks") {
            ui.label.forEach((l) => {
                ui.labelCenter.push(this.physics.add.sprite(l.x, l.y, "spark").setScale(0.1).setVisible(false))
            })
            ui.labelCenter.forEach((l) => {
                ui.target.forEach((t) => {
                    ui.overlapCheck.push(this.physics.add.overlap(l, t, () => {
                        t.setTexture(t.hoverTexture);
                        t.counter = 2;
                        t.selected = true;
                    }));
                });
            });
        }

        ui.label.forEach((l, index) => {
            if (levelData.config.type == "dots") {
                ui.target.forEach((t) => {
                    ui.overlapCheck.push(this.physics.add.overlap(l, t, () => {
                        t.setTexture(t.hoverTexture);
                        t.counter = 2;
                        t.selected = true;
                    }));
                });
            }
            l.on('dragend', () => {
                if (ui.target[index].selected) {
                    ui.move(l, [l.destination[0], l.destination[1]]);
                    l.complete = true;
                    if (!disableScroll) {
                        ui.openScroll(index);
                    } else {
                        let endGame = true;
                        ui.label.forEach((l) => {
                            this.input.setDraggable(l, false)
                            if (!l.complete) {
                                this.input.setDraggable(l);
                                endGame = false;
                            }
                        });
                        if (endGame) {
                            endActivity(1, this);
                        }
                    }
                    if (importData.lesson !== 5) {
                        ui.sound.correct.play();
                    } else {
                        ui.music[index].play();
                    }
                } else {
                    ui.move(l, [l.origin[0], l.origin[1]]);
                    ui.sound.wrong.play();
                }
            });
        });

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        ui.move = (object, destination) => {
            this.tweens.add({
                targets: object,
                x: destination[0],
                y: destination[1],
                ease: 'Power1',
                duration: 400
            });
        };

        ui.instructions = this.add.text(
            levelData.config.inst_location[0],
            levelData.config.inst_location[1],
            levelData.config.instructions, ubuntuDark).setWordWrapWidth(
                levelData.config.inst_wordWrap, true).setAlpha(0).setOrigin(0.5,0.5);

        ui.scroll = {
            dimmer: this.add.rectangle(400, 300, 800, 600, 0x000000).setAlpha(0),
            back: this.add.image(400, 300, 'scroll').setVisible(false),
            top: this.add.image(400, 50-150, 'roll'),
            bottom: this.add.image(400, 88-150, 'roll'),
            button: addButton('mini', 400, 490, "OK", this),
            title: this.add.text(400, 100, levelData.scrolls[0].title, themeFont).setOrigin(0.5, 0.5).setAlpha(0),
            pic: this.add.sprite(400, 245, levelData.scrolls[0].pic).setOrigin(0.5, 0.5).setScale(0.9).setAlpha(0),
            blurb: this.add.text(400, 370, levelData.scrolls[0].blurb, smallFont).setOrigin(0.5, 0).setAlpha(0).setWordWrapWidth(470, true)
        }

        ui.scroll.button.button.on('pointerdown', () => {
            ui.closeScroll()
        });

        ui.scroll.button.button.setAlpha(0).setInteractive(false);
        ui.scroll.button.displayText.setAlpha(0);

        ui.shape = this.make.graphics();
        ui.shape.fillStyle(0xffffff);
        ui.shape.beginPath();
        ui.shape.fillRect(140, 50-500, 510, 20+500);
        ui.mask = ui.shape.createGeometryMask();
        ui.scroll.back.setMask(ui.mask);

        var disableScroll = false;
        if (importData.lesson == 4) {
            disableScroll = true;
        }

        ui.openScroll = (index) => {
            ui.label.forEach((l) => {
                this.input.setDraggable(l, false)
            })
            ui.scroll.title.setText(levelData.scrolls[index].title);
            ui.scroll.pic.setTexture(levelData.scrolls[index].pic);
            ui.scroll.blurb.setText(levelData.scrolls[index].blurb);
            ui.scroll.button.button.setTexture('unclicked');
            this.tweens.add({
                targets: ui.scroll.dimmer,
                alpha: 0.6,
                ease: 'Power1',
                duration: 1000
            });
            this.tweens.add({
                targets: ui.scroll.top,
                y: 50,
                ease: 'Power1',
                duration: 300
            });
            this.tweens.add({
                targets: ui.scroll.bottom,
                y: 88,
                ease: 'Power1',
                duration: 300
            });
            setTimeout(() => {
                ui.scroll.back.setVisible(true);
                this.tweens.add({
                    targets: ui.scroll.bottom,
                    y: 545,
                    ease: 'Power1',
                    duration: 800
                });
                this.tweens.add({
                    targets: ui.shape,
                    y: 500,
                    ease: 'Power1',
                    duration: 900
                });
                setTimeout(() => {
                    ui.scroll.button.button.setInteractive(true);
                    this.tweens.add({
                        targets: [
                            ui.scroll.button.button,
                            ui.scroll.button.displayText,
                            ui.scroll.title,
                            ui.scroll.pic,
                            ui.scroll.blurb
                        ],
                        alpha: 1,
                        ease: 'Power1',
                        duration: 300
                    });
                }, 930);
            }, 300)
        }



        ui.closeScroll = () => {
            this.sound.stopAll();
            let endGame = true;
            ui.label.forEach((l) => {
                if (!l.complete) {
                    this.input.setDraggable(l);
                    endGame = false;
                }
            })
            if (endGame) {
                endActivity(1, this);
            }
            ui.scroll.button.button.setInteractive(false);
            this.tweens.add({
                targets: [
                    ui.scroll.button.button,
                    ui.scroll.button.displayText,
                    ui.scroll.title,
                    ui.scroll.pic,
                    ui.scroll.blurb
                ],
                alpha: 0,
                ease: 'Power1',
                duration: 300
            });
            setTimeout(() => {
                this.tweens.add({
                    targets: ui.scroll.dimmer,
                    alpha: 0,
                    ease: 'Power1',
                    duration: 1000
                });
                setTimeout(() => {
                    this.tweens.add({
                        targets: ui.scroll.bottom,
                        y: 80,
                        ease: 'Power1',
                        duration: 800
                    });
                },10);
                this.tweens.add({
                    targets: ui.shape,
                    y: 0,
                    ease: 'Power1',
                    duration: 800
                });
                setTimeout(() => {
                    ui.scroll.back.setVisible(false);
                    this.tweens.add({
                        targets: ui.scroll.top,
                        y: 50-150,
                        ease: 'Power1',
                        duration: 300
                    });
                    this.tweens.add({
                        targets: ui.scroll.bottom,
                        y: 88-150,
                        ease: 'Power1',
                        duration: 300
                    });
                }, 930);
            }, 300)
        }

        ui.scrambleButton = addButton(
            'magenta',
            levelData.config.button_location[0],
            levelData.config.button_location[1],
            "Ready!", this);

        ui.scrambleButton.button.on('pointerdown', () => {
            ui.sound.start.play();
            ui.scrambleButton.button.setVisible(false);
            ui.scrambleButton.displayText.setVisible(false);
            ui.label.forEach((l) => {
                l.setInteractive()
                this.input.setDraggable(l);
                ui.move(l, [l.origin[0], l.origin[1]]);
            })
            this.tweens.add({
                targets: ui.instructions,
                alpha: 1,
                ease: 'Power1',
                duration: 500
            });
        })

        ui.debugtext = [];

        ui.label.forEach((l, index) => {
            ui.debugtext.push(this.add.text(50, 70*index, "", darkFont));
        })
    }

    update() {
        ui.labelCenter.forEach((l, index) => {
            l.x = ui.label[index].x;
            l.y = ui.label[index].y;
        });

        let haveSelection = false
        ui.target.forEach((t, index) => {
            if (t.selected) {
                if (haveSelection) {
                    if (!ui.label[index].complete) {
                        t.selected = false;
                        t.setTexture(t.originalTexture);
                    }
                } else {
                    if (!ui.label[index].complete) {
                        haveSelection = true;
                    }
                }
            }
        });

        ui.target.forEach((t) => {
            t.counter--;
            if (t.counter < 0) {
                t.counter = 0;
                t.selected = false;
                t.setTexture(t.originalTexture);
            }
        })
    }

}

class StartScene extends Phaser.Scene {
    constructor() {
        super({key:"StartScene"});
    }

    preload() {
        var loadConfig = {
            mediaURL: "/static/images/",
            loadObjects: [
                {type: "image", name: "splash", file: "culture_splash_" + importData.lesson + ".jpg"},
                {type: "image", name: "loading", file: "culture_loading_1.jpg"},
                {type: "image", name: "loadingstar", file: "loadingstar.png"},
            ]
        }

        myLoad(loadConfig, this);
        myLoad("buttons", this);
    }

    create() {
        this.add.image(0,0, 'splash').setOrigin(0,0);

        var startButton = addButton('small', 600, 475, "Start", this);

        startButton.button.on('pointerdown', () => {
            this.scene.start('GameScene');
        });
    }
}