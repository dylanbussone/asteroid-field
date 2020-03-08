const RADIUS = 10;

class Ship {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = 0;
    this.dy = 0;
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x >= CANVAS.width) {
      this.x = this.x - CANVAS.width;
    }
    if (this.y >= CANVAS.height) {
      this.y = this.y - CANVAS.height;
    }

    // also update dx and dy on keydown
  }

  render() {
    const ctx = CANVAS.getContext('2d');
    ctx.beginPath();
    ctx.arc(this.x, this.y, RADIUS, 0, 2 * Math.PI);
    ctx.strokeStyle = "#000";
    ctx.fillStyle = "#eee";
    ctx.stroke();
    ctx.fill();
  }
}
