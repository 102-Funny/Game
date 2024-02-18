class Scene extends Phaser.Scene {
    constructor() {
        super({ key: "Scene" });
        this.player = null;
        this.heart = null;
        this.platforms = null;
    }

    preload() {
        this.load.image("coin", 'assets/coin.png');
        this.load.image("heart", 'assets/heart.png');
        this.load.image("platform", 'assets/platform.png');
        this.load.image("platform2", 'assets/platform2.png');

        this.load.spritesheet('player', 'assets/player.png', {frameWidth:32, frameHeight:32});
    }

    create() {
        this.player = new Player(this, 400, 820).setInteractive().setScale(2);

        this.heart = this.physics.add.staticGroup();
        this.heart.create(450, 225, "heart");
        this.heart.create(350, 225, "heart");
        this.heart.create(250, 225, "heart");

        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(100, 1000, 'platform');
        this.platforms.create(300, 1000, 'platform');
        this.platforms.create(500, 1000, 'platform');
        this.platforms.create(700, 1000, 'platform');
        this.platforms.create(900, 1000, 'platform');
        this.platforms.create(1100, 1000, 'platform');
        this.platforms.create(1300, 1000, 'platform');
        this.platforms.create(1500, 1000, 'platform');
        this.platforms.create(1700, 1000, 'platform');
        this.platforms.create(1900, 1000, 'platform');
        this.platforms.create(100, 160, 'platform');
        this.platforms.create(1100, 160, 'platform');
        this.platforms.create(1700, 160, 'platform');
        this.platforms.create(300, 260, 'platform');
        this.platforms.create(1500, 260, 'platform');
        this.platforms.create(500, 360, 'platform');
        this.platforms.create(700, 360, 'platform');
        this.platforms.create(1900, 360, 'platform');
        this.platforms.create(100, 460, 'platform');
        this.platforms.create(900, 460, 'platform');
        this.platforms.create(1100, 460, 'platform');
        this.platforms.create(1300, 460, 'platform');
        this.platforms.create(300, 660, 'platform');
        this.platforms.create(900, 660, 'platform');
        this.platforms.create(1700, 660, 'platform');
        this.platforms.create(100, 760, 'platform');
        this.platforms.create(500, 760, 'platform');
        this.platforms.create(1900, 760, 'platform');
        this.platforms.create(300, 860, 'platform');
        this.platforms.create(300, 860, 'platform');
        this.platforms.create(700, 860, 'platform');
        this.platforms.create(1100, 860, 'platform');
        this.platforms.create(1500, 860, 'platform');
        this.platforms.create(1700, 860, 'platform');
        this.platforms.create(100, 0, 'platform');
        this.platforms.create(300, 0, 'platform');
        this.platforms.create(500, 0, 'platform');
        this.platforms.create(700, 0, 'platform');
        this.platforms.create(900, 0, 'platform');
        this.platforms.create(1100, 0, 'platform');
        this.platforms.create(1300, 0, 'platform');
        this.platforms.create(1500, 0, 'platform');
        this.platforms.create(1700, 0, 'platform');
        this.platforms.create(1900, 0, 'platform');
        this.platforms.create(0, 100, 'platform2');
        this.platforms.create(0, 300, 'platform2');
        this.platforms.create(0, 500, 'platform2');
        this.platforms.create(0, 700, 'platform2');
        this.platforms.create(0, 900, 'platform2');
        this.platforms.create(0, 1100, 'platform2');
        this.platforms.create(2000, 100, 'platform2');
        this.platforms.create(2000, 300, 'platform2');
        this.platforms.create(2000, 500, 'platform2');
        this.platforms.create(2000, 700, 'platform2');
        this.platforms.create(2000, 900, 'platform2');
        this.platforms.create(2000, 1100, 'platform2');
        this.physics.add.collider(this.player, this.platforms);

        this.anims.create({
            key:'left',
            frames:this.anims.generateFrameNumbers('player',{start:8, end:11}),
            frameRate:10,
            repeat:1
        });
        this.anims.create({
            key:'right',
            frames:this.anims.generateFrameNumbers('player',{start:1, end:4}),
            frameRate:10,
            repeat:1
        });

        this.physics.add.overlap(
            this.heart,
            this.player,
            this.player_touch_heart,
            null,
            this
        );

        this.cursors = this.input.keyboard.createCursorKeys();
        this.cameras.main.setBounds(0, 0, 2000, 1000).startFollow(this.player);
    }

    player_touch_heart(player, heart) {
        heart.disableBody(true, true);
    }

    update() {
        if(this.cursors.left.isDown) {
            this.player.setVelocityX(-200);
            this.player.anims.play("left", true);
        } else if(this.cursors.right.isDown) {
            this.player.setVelocityX(200);
            this.player.anims.play("right", true);
        } else if(this.cursors.up.isDown) {
            this.player.setVelocityY(-190);
        } else {
            this.player.setVelocityX(0);
        }
    }
}