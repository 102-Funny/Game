class Menu extends Phaser.Scene {
    constructor() {
        super({ key: "Menu" });
        this.button = null;
        this.particles = null;
        this.emitter = null;
    }

    preload() {
        this.load.image("button", 'assets/start.png');
        this.load.image("coin", 'assets/coin.png');
    }

    create() {
        this.button = this.add.image(450, 300, "button").setInteractive({ useHandCursor:true}).on("pointerup", () => {this.startgame();}).setScale(0.5);
        this.name = this.add.text(300, 100, "Game", {
            fontSize: "128px",
            color: "#ffffff"
        });

        this.particles = this.add.particles('coin');
        this.emitter = this.particles.createEmitter();
        this.emitter.setPosition(450, -10).setSpeed(450).setBlendMode(Phaser.BlendModes.ADD);
    }

    startgame() {
        this.scene.start("Scene");
    }

    update() {

    }
}