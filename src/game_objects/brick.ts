// eslint-disable-next-line import/extensions
import Sprite from './sprite';

class Brick extends Sprite {
  x: number;
  y: number;
  color: string;
  width: number;
  height: number;
  status: boolean;

  constructor(x: number, y: number, color: string, width = 75, height = 20) {
    super(x, y, color, width, height); // pass arguments to Sprite!
    this.status = true; // adds a new property
  }
}

export default Brick;
