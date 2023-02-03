

var config = {
    type: Phaser.AUTO,
    backgroundColor: 0xCCFFFF ,
    width: '100vh',
    height: '100vh',
    physics: {
        default: 'arcade'
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var musicConfig = {
    mute: false,
    volume: 1,
    rate: 1,
    detune: 0,
    seek: 0,
    loop: true,
    delay: 0,
}

var monkey;
var keyInputs;
var game = new Phaser.Game(config);
var music;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function preload(){
    this.load.image('monkey', './img/monkey.png');
    this.load.audio('music', 'assets/Üllar Jörberg - Suur Ahv.mp3')
}

function create(){
    monkey = this.physics.add.sprite(50, 50, 'monkey');
    keyInputs = this.input.keyboard.createCursorKeys();
    this.music = this.sound.add('music');
    this.music.play(musicConfig);
}

function update(){
    if(keyInputs.left.isDown){
        monkey.x = monkey.x - 10;
    }
    if(keyInputs.right.isDown){
        monkey.x = monkey.x + 10;
    }
    if(keyInputs.up.isDown){
        monkey.y = monkey.y - 10;
    }
    if(keyInputs.down.isDown){
        monkey.y = monkey.y + 10;
    }
    if (keyInputs.space.isDown) {
        monkey.y = monkey.y - 150;
        sleep(100).then(() => monkey.y = monkey.y + 150)

    }
}