

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

var monkey;
var keyInputs;
var game = new Phaser.Game(config);

function preload(){
    this.load.image('monkey', 'img/monkey.png');
}

function create(){
    monkey = this.physics.add.sprite(50, 50, 'monkey');
    keyInputs = this.input.keyboard.createCursorKeys();
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
}