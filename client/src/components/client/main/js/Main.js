import "phaser";
import { GameScene } from "./Environment";

let cursors;
let player;
let showDebug = false;

class MainGame extends Phaser.Scene {
  preload() {
    this.load.image("tiles", 'assets/game/tilemaps2/tiled7/TileModel_1.png');
    this.load.tilemapTiledJSON("map", "assets/game/tilemaps2/tiled7/tiled7.json");

    this.load.atlas(
      "FirstFemail",
      "assets/game/character/FirstFemail0.1/FirstFemail0.1.png",
      "assets/game/character/FirstFemail0.1/FirstFemail0.1.json"
    );
  }

  create() {
    const map = this.make.tilemap({ key: "map" });
    const tileset = map.addTilesetImage("TileModel_1", "tiles");

    const Backgroud = map.createStaticLayer("Backgroud", tileset, 0, 0);
    const Furniture0 = map.createStaticLayer("Furniture0", tileset, 0, 0);
    const Furniture1 = map.createStaticLayer("Furniture1", tileset, 0, 0);
    const walls = map.createStaticLayer("walls", tileset, 0, 0);

    // vat can
    walls.setCollisionByProperty({ collides: true });

    const spawnPoint = map.findObject(
      "Script",
      (obj) => obj.name === "spawnpoint"
    );

    player = this.physics.add
      .sprite(spawnPoint.x, spawnPoint.y, "FirstFemail", "FirstFemail 0-1")
      .setSize(1, 1)
      .setOffset(15, 30);

    // Watch the player and worldLayer for collisions, for the duration of the scene:
    this.physics.add.collider(player, walls);

    const anims = this.anims;

    anims.create({
      key: "FirstFemail-left-walk",
      frames: anims.generateFrameNames("FirstFemail", {
        prefix: "FirstFemail 0-",
        start: 4,
        end: 7,
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    anims.create({
      key: "FirstFemail-right-walk",
      frames: anims.generateFrameNames("FirstFemail", {
        prefix: "FirstFemail 0-",
        start: 8,
        end: 11,
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    anims.create({
      key: "FirstFemail-front-walk",
      frames: anims.generateFrameNames("FirstFemail", {
        prefix: "FirstFemail 0-",
        start: 0,
        end: 3,
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    anims.create({
      key: "FirstFemail-back-walk",
      frames: anims.generateFrameNames("FirstFemail", {
        prefix: "FirstFemail 0-",
        start: 12,
        end: 15,
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });

    player.anims.play("FirstFemail-back-walk");

    const camera = this.cameras.main;
    camera.startFollow(player);
    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    camera.setZoom(1);

    cursors = this.input.keyboard.createCursorKeys();

    //   // Help text that has a "fixed" position on the screen
    //   this.add
    //     .text(16, 16, 'Arrow keys to move\nPress "D" to show hitboxes', {
    //       font: "18px monospace",
    //       fill: "#000000",
    //       padding: { x: 20, y: 10 },
    //       backgroundColor: "#ffffff"
    //     })
    //     .setScrollFactor(0)
    //     .setDepth(30);

    // Debug graphics
    this.input.keyboard.once("keydown_D", (event) => {
      // Turn on physics debugging to show player's hitbox
      this.physics.world.createDebugGraphic();

      // Create worldLayer collision graphic above the player, but below the help text
      const graphics = this.add.graphics().setAlpha(0.75).setDepth(20);
      walls.renderDebug(graphics, {
        tileColor: null, // Color of non-colliding tiles
        collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
        faceColor: new Phaser.Display.Color(40, 39, 37, 255), // Color of colliding face edges
      });
    });
  }

  update(time, delta) {
    const speed = 175;
    const prevVelocity = player.body.velocity.clone();

    // Stop any previous movement from the last frame
    player.body.setVelocity(0);

    // Horizontal movement
    if (cursors.left.isDown) {
      player.body.setVelocityX(-speed);
    } else if (cursors.right.isDown) {
      player.body.setVelocityX(speed);
    }

    // Vertical movement
    if (cursors.up.isDown) {
      player.body.setVelocityY(-speed);
    } else if (cursors.down.isDown) {
      player.body.setVelocityY(speed);
    }

    // Normalize and scale the velocity so that player can't move faster along a diagonal
    player.body.velocity.normalize().scale(speed);

    // Update the animation last and give left/right animations precedence over up/down animations
    if (cursors.left.isDown) {
      player.anims.play("FirstFemail-left-walk", true);
    } else if (cursors.right.isDown) {
      player.anims.play("FirstFemail-right-walk", true);
    } else if (cursors.up.isDown) {
      player.anims.play("FirstFemail-back-walk", true);
    } else if (cursors.down.isDown) {
      player.anims.play("FirstFemail-front-walk", true);
    } else {
      player.anims.stop();

      // If we were moving, pick and idle frame to use
      if (prevVelocity.x < 0)
        player.setTexture("FirstFemail", "FirstFemail 0-4");
      // left
      else if (prevVelocity.x > 0)
        player.setTexture("FirstFemail", "FirstFemail 0-8");
      // right
      else if (prevVelocity.y < 0)
        player.setTexture("FirstFemail", "FirstFemail 0-12");
      // back
      else if (prevVelocity.y > 0)
        player.setTexture("FirstFemail", "FirstFemail 0-0"); // front
    }
  }
}


export default MainGame;