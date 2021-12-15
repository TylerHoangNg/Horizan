<script>
  import MainGame from './js/Main';
  import { CanvasSize } from './js/Environment';
  const gameConfig = {
    type: Phaser.AUTO,
    width: CanvasSize.width,
		height: CanvasSize.height,
    parent: 'game',
    pixelArt: true,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 0 }
      }
    },
    scene: [MainGame],
    scale: {
        zoom: 2
    }
};
const game = new Phaser.Game(gameConfig);
</script>

<div id="game"/>