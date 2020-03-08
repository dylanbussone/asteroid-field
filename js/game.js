window.CANVAS = document.getElementById('game-canvas');

const fps = 30;
const msPerFrame = 1000 / fps;

window.GAME = {
  ship: new Ship(CANVAS.width / 2, CANVAS.height / 2),
  update() {
    this.ship.update();
  },
  render() {
    this.ship.render();
  },
  stop() {
    window.cancelAnimationFrame(GAME.animationFrame);
  }
};

let lastTime = performance.now();
let delta;

function gameLoop(tLoop) {
  GAME.animationFrame = window.requestAnimationFrame(gameLoop);

  delta = tLoop - lastTime;

  if (delta >= msPerFrame) {
    lastTime = tLoop - (delta % msPerFrame);

    GAME.update();
    GAME.render();
  }
}

gameLoop(performance.now());
