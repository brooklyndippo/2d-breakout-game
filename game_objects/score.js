export default class Score {
  constructor(x, y, color = 'black', score = 0) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.score = score;
  }

  render(ctx) {
    ctx.font = '15px Arial';
    ctx.fillStyle = this.color;
    ctx.fillText(`Score: ${this.score}`, this.x, this.y);
  }

  addPoint() {
    this.score += 1;
  }

  reset() {
    this.score = 0;
  }
};