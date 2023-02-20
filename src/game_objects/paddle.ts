// eslint-disable-next-line import/extensions
import Sprite from './sprite';

class Paddle extends Sprite {
  x: number;
  y: number;
  color: string;
  width: number;
  height: number;
  constructor(x: number, y: number, color: string, width: number = 75, height: number = 10) {
    super(x, y, color, width, height); // pass arguments to Sprite!
  }
}

export default Paddle;
