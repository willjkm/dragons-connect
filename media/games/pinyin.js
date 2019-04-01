class GameScene extends Phaser.Scene {
    constructor() {
        super({key:"GameScene"});
    }

    preload() {
        this.add.image(0,0, 'splash').setOrigin(0,0);
        this.add.text(400, 300, "Loading", themeFont).setOrigin(0.5, 0.5);
        ui.loadingStar = this.add.image(400, 400, 'loadingstar');
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
                {type: "image", name: "circle", file: "circle.png"},
                {type: "image", name: "circleHover", file: "circle_h.png"},
                {type: "image", name: "circleComplete", file: "circle2.png"},
                {type: "image", name: "background", file: "pinyin_background.jpg"},
                {type: "image", name: "rightArrow", file: "right_arrow.png"},
                {type: "image", name: "rightArrowHover", file: "right_arrow_hover.png"},
                {type: "image", name: "leftArrow", file: "left_arrow.png"},
                {type: "image", name: "leftArrowHover", file: "left_arrow_hover.png"},
                {type: "image", name: "progressGrey", file: "progress_grey.png"},
                {type: "image", name: "progressGreen", file: "progress_green.png"},
                {type: "image", name: "coin", file: "coin.png"},
                {type: "image", name: "coin_disabled", file: "coin_disabled.png"},
                {type: "image", name: "spark", file: "spark.png"},
            ]
        }
        myLoad(loadConfig, this);
        
        var myDict = getPinyinSoundFiles();
        
        var soundsToLoad = [];

        myDict.forEach((obj) => {
            soundsToLoad.push({
                type: "sound",
                name: obj.pinyin,
                file: obj.file
            })
        })
        
        var soundLoadConfig = {
            mediaURL: "../../../media/sounds/",
            loadObjects: soundsToLoad
        }
        myLoad(soundLoadConfig, this);

    }


    create() {
        this.tweens.killTweensOf(ui.loadingStar);
        ui.loadingStar.setVisible(false);

        this.add.image(0,0, 'background').setOrigin(0,0);
        var myData = getPinyinData();
        var slide = [];
        var currentSlide = 0;
        myData.forEach((item) => {
            if (item.lesson == importData.lesson) {
                slide.push(item);
            }
        });
        ui = {
            title: this.add.text(400, 120, slide[0].title, themeFont).setOrigin(0.5,0.5),
            blurb: this.add.text(155, 175, slide[0].blurb, ubuntuDarkSmall).setWordWrapWidth(455, true),
            circle: []
        }

        for (let i=0;i<4;i++) {
            ui.circle.push({
                background: this.add.sprite(200+(i*130), 450, 'circle').setInteractive(),
                text: this.add.text(200+(i*130), 450, slide[0].sounds[i], ubuntuDarkSmall).setOrigin(0.5, 0.5),
                sound: this.sound.add(slide[0].sounds[i]),
            });
        }

        state.counter = 0
        state.progress = 0

        setTimeout(() => {
            ui.circle.forEach((item) => {
                item.text.setStyle({fontFamily: 'Arial'})
                item.text.setStyle({fontFamily: 'Ubuntu'})
            })
        }, 500)

        ui.circle.forEach((item) => {
            item.background.on('pointerover', () => {
                if (item.background.texture.key == 'circle') {
                    item.background.setTexture('circleHover');
                }
            });
            item.background.on('pointerout', () => {
                if (item.background.texture.key == 'circleHover') {
                    item.background.setTexture('circle');
                }
            });
            item.background.on('pointerdown', () => {
                if (item.background.texture.key !== 'circleComplete') {
                    state.counter++;
                    item.background.setTexture('circleComplete');
                    if (state.counter == 4) {
                        state.counter = 0;
                        ui.rightArrow.setVisible(true);
                    }    
                }
                item.sound.play();
            });
        })

        var displaySlide = () => {
            if (currentSlide >= state.progress) {
                state.progress = currentSlide;
                ui.rightArrow.setVisible(false);
            } else {
                ui.rightArrow.setVisible(true);
            }
            state.counter = 0;
            ui.title.setText(slide[currentSlide].title);
            ui.blurb.setText(slide[currentSlide].blurb);
            ui.circle.forEach((item, index) => {
                item.background.setTexture('circle');
                item.text.setText(slide[currentSlide].sounds[index]);
                item.sound = this.sound.add(slide[currentSlide].sounds[index]);
            });

            if (currentSlide == 0) {
                ui.leftArrow.setVisible(false);
            } else {
                ui.leftArrow.setVisible(true);
            }

            ui.progress[currentSlide].setTexture('progressGreen');
            
            if (currentSlide < slide.length - 1) {
                ui.progress[currentSlide + 1].setTexture('progressGrey');
            }

        }

        ui.leftArrow = this.add.sprite(70,450, 'leftArrow').setInteractive().setVisible(false);
        ui.rightArrow = this.add.sprite(720,450, 'rightArrow').setInteractive().setVisible(false);

        ui.leftArrow.on('pointerover', () => {
            ui.leftArrow.setTexture('leftArrowHover')
        })
        ui.leftArrow.on('pointerout', () => {
            ui.leftArrow.setTexture('leftArrow')
        })
        ui.leftArrow.on('pointerdown', () => {
            currentSlide--;
            displaySlide();
        })

        ui.rightArrow.on('pointerover', () => {
            ui.rightArrow.setTexture('rightArrowHover');
        });

        ui.rightArrow.on('pointerout', () => {
            ui.rightArrow.setTexture('rightArrow');
        });

        ui.rightArrow.on('pointerdown', () => {
            if (currentSlide == slide.length - 1) {
                endActivity(6, this);
            } else {
                currentSlide++;
                displaySlide();    
            }
        });

        ui.fadeIn = (obj) => {
            this.tweens.add({
                targets: obj,
                alpha: 1,
                ease: 'Power1',
                duration: 200
            });
        };

        ui.fadeOut = (obj) => {
            this.tweens.add({
                targets: obj,
                alpha: 0,
                ease: 'Power1',
                duration: 200
            });
        };

        ui.progress = [];

        slide.forEach((s, index) => {
            ui.progress.push(this.add.sprite(50 + index*70 + (11-slide.length)*35, 30, 'progressGrey').setScale(0.8))
        });
        ui.progress[0].setTexture('progressGreen');

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
                {type: "image", name: "splash", file: "pinyin_splash.jpg"},
                {type: "image", name: "loadingstar", file: "loadingstar.png"},
            ]
        }
        
        myLoad(loadConfig, this);
        myLoad("buttons", this);
    }

    create() {
        this.add.image(0,0, 'splash').setOrigin(0,0);

        var startButton = addButton('small', 400, 300, "Start", this);

        startButton.button.on('pointerdown', () => {
            this.scene.start('GameScene');
        });
    }
}