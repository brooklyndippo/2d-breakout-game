export default class Scoreboard {
  x: number;
  y: number;
  font: string;
  color: string;
  score: number;

  constructor(x: number, y: number, font: string = 'Arial', color: string = 'black', score: number = 0) {
    this.x = x;
    this.y = y;
    this.font = font;
    this.color = color;
    this.score = score;
  }

  render(ctx: any) {
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
