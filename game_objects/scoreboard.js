export default class Scoreboard {
  constructor(x, y, font = 'Arial', color = 'black', score = 0) {
    this.x = x;
    this.y = y;
    this.font = font;
    this.color = color;
    this.score = score;
  }

  render(ctx) {
    ctx.font = `15px ${this.font}`;
    ctx.fillStyle = this.color;
    ctx.fillText(`Score: ${this.score}`, this.x, this.y);
  }

  addPoint() {
    this.score += 1;
  }

  reset() {
    this.score = 0;
  }
}
