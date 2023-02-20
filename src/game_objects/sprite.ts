export default class Sprite {
  x: number;
  y: number;
  color: string;
  width: number;
  height: number;

  constructor(x: number = 0, y: number = 0, color: string= '#f00', width: number = 100, height: number = 100) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = width;
    this.height = height;
  }

  render(ctx: any) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}
