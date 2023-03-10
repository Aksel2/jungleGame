

var config = {
    type: Phaser.AUTO,
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
var backgroundImage;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function preload(){
    this.load.image('monkey', './img/p.png');
    this.load.image('background', './img/jungle.jpg');
   // this.load.audio('music', 'assets/Üllar Jörberg - Suur Ahv.mp3')
}

function create(){
    backgroundImage = this.add.image(400,300, 'background');
   backgroundImage.setDisplaySize(3000,1800);
    monkey = this.physics.add.sprite(200, 300, 'monkey');
    keyInputs = this.input.keyboard.createCursorKeys();
    /*this.music = this.sound.add('music');
    this.music.play(musicConfig);*/
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