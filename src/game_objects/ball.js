export default class Ball {
  constructor(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  move() {
    // move the ball
    this.x += this.dx;
    this.y += this.dy;

    // movement redirection on collision with horizontal canvas edge
    if (this.x + this.dx > 480 - this.radius || this.x + this.dx < this.radius) {
      this.dx = -this.dx;
    }

    // movement redirection on collision top canvas edge
    if (this.y + this.dy < this.radius) {
      this.dy = -this.dy;
    }
  }
}
