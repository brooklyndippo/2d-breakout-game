export default class Lives {
  constructor(x, y, font = 'Arial', color = 'black', lives = 3) {
    this.x = x;
    this.y = y;
    this.font = font;
    this.color = color;
    this.lives = lives;
  }

  render(ctx) {
    ctx.font = `15px ${this.font}`;
    ctx.fillStyle = this.color;
    ctx.fillText(`Lives: ${this.lives}`, this.x, this.y);
  }

  subtractLife() {
    this.lives -= 1;
  }

  reset() {
    this.lives = this.lives;
  }
}