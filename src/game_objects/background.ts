export default class GradientBackground {
  color1: string;
  color2: string;
  color3: string;
  height: number;
  width: number;

  constructor(color1: string, color2: string, color3: string, height: number, width: number) {
    this.color1 = color1;
    this.color2 = color2;
    this.color3 = color3;
    this.height = height;
    this.width = width;
  }

  paintBackground(ctx: any) {
    const gradient = ctx.createLinearGradient(0, 0, 0, this.height);
    gradient.addColorStop(0, this.color1);
    gradient.addColorStop(0.2, this.color2);
    gradient.addColorStop(1, this.color3);
    ctx.beginPath();
    ctx.rect(0, 0, this.width, this.height);
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.closePath();
  }
}
