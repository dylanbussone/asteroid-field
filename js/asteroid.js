const MAX_ASTEROID_SPEED = 10;
const MAX_ASTEROID_RADIUS = 10;

class Asteroid {
  constructor() {
    this.x = Math.random() * CANVAS.width;
    this.y = Math.random() * CANVAS.height;
    this.dx = Math.random() * MAX_ASTEROID_SPEED;
    this.dy = Math.random() * MAX_ASTEROID_SPEED;
    this.radius = Math.random() * MAX_ASTEROID_RADIUS;
  }

  update = () => {
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
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#000';
    ctx.fillStyle = '#ff0000';
    ctx.stroke();
    ctx.fill();
  };
}
