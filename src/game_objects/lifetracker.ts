export default class LifeTracker {
  x: number;
  y: number;
  font: string;
  color: string;
  lives: number;

  constructor(x: number, y: number, font : string = 'Arial', color : string = 'black', lives: number = 3) {
    this.x = x;
    this.y = y;
    this.font = font;
    this.color = color;
    this.lives = lives;
  }

  render(ctx: any) {
    ctx.font = `15px ${this.font}`;
    ctx.fillStyle = this.color;
    ctx.fillText(`Lives: ${this.lives}`, this.x, this.y);
  }

  subtractLife() {
    this.lives -= 1;
  }

  reset() {
    this.lives = 3;
  }
}
