{
  const ship = new Ship(CANVAS.width / 2, CANVAS.height / 2);
  const asteroids = [new Asteroid(), new Asteroid(), new Asteroid()];
  let level = 1;

  const fps = 30;
  const msPerFrame = 1000 / fps;
  let lastTime = performance.now();
  let delta;
  let animationFrame;

  function gameLoop(tLoop) {
    animationFrame = window.requestAnimationFrame(gameLoop);

    delta = tLoop - lastTime;

    if (delta >= msPerFrame) {
      lastTime = tLoop - (delta % msPerFrame);

      // UPDATE
      const ctx = CANVAS.getContext('2d');
      ctx.clearRect(0, 0, CANVAS.width, CANVAS.height);
      ship.update();
      for (const asteroid of asteroids) {
        asteroid.update();
      }

      // RENDER
      ship.render();
      for (const asteroid of asteroids) {
        asteroid.render();
      }
    }

    // increase level. todo cleanup. level increase should also speed up asteroids?
    let secElapsed = tLoop / 1000;
    if (secElapsed > 20 && level === 1) {
      level = 2;
      asteroids.push(new Asteroid(), new Asteroid(), new Asteroid());
    }
    if (secElapsed > 40 && level === 2) {
      level = 3;
      asteroids.push(new Asteroid(), new Asteroid(), new Asteroid());
    }
    if (secElapsed > 60 && level === 3) {
      level = 4;
      asteroids.push(new Asteroid(), new Asteroid(), new Asteroid());
    }
  }

  gameLoop(performance.now());
}
