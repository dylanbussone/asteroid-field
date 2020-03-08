const RADIUS = 10;
const MAX_SPEED = 15;

class Ship {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = 0;
    this.dy = 0;
  }

  update = () => {
    if (KEYS.isKeyLeftPressed) {
      this.dx -= 2;
      this.dx = Math.max(this.dx, -MAX_SPEED);
    }
    if (KEYS.isKeyRightPressed) {
      this.dx += 2;
      this.dx = Math.min(this.dx, MAX_SPEED);
    }
    if (KEYS.isKeyUpPressed) {
      this.dy -= 2;
      this.dy = Math.max(this.dy, -MAX_SPEED);
    }
    if (KEYS.isKeyDownPressed) {
      this.dy += 2;
      this.dy = Math.min(this.dy, MAX_SPEED);
    }

    if (!KEYS.isKeyLeftPressed && !KEYS.isKeyRightPressed) {
      // this.dx = 0;
      if (this.dx > 0) {
        this.dx -= 1;
      } else if (this.dx < 0) {
        this.dx += 1;
      }
    }
    if (!KEYS.isKeyUpPressed && !KEYS.isKeyDownPressed) {
      if (this.dy > 0) {
        this.dy -= 1;
      } else if (this.dy < 0) {
        this.dy += 1;
      }
    }

    this.x += this.dx;
    this.y += this.dy;

    if (this.x >= CANVAS.width) {
      this.x = this.x - CANVAS.width;
    }
    if (this.x < 0) {
      this.x = CANVAS.width + this.x;
    }
    if (this.y >= CANVAS.height) {
      this.y = this.y - CANVAS.height;
    }
    if (this.y < 0) {
      this.y = CANVAS.height + this.y;
    }
  };

  render = () => {
    const ctx = CANVAS.getContext('2d');
    ctx.beginPath();
    ctx.arc(this.x, this.y, RADIUS, 0, 2 * Math.PI);
    ctx.strokeStyle = '#000';
    ctx.fillStyle = '#eee';
    ctx.stroke();
    ctx.fill();
  };
}
