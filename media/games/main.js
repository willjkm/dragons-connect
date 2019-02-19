
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0}
        }
    },
    audio: {
        disableWebAudio: true
    }
};

if (importData.scene_name == 'DragonBoatRace') {
    config.scene = [ StartScene, DragonBoatRace ];
} else if (importData.scene_name == 'FallingTones') {
    config.scene = [ StartScene, FallingTones ];
} else if (importData.scene_name == 'Rockets') {
    config.scene = [ StartScene, Rockets ];
} else if (importData.scene_name == 'Characters') {
    config.scene = [ StartScene, Characters ];
}

var game = new Phaser.Game(config);
