// eslint-disable-next-line import/extensions
import Sprite from './sprite.js';

class Paddle extends Sprite {
  constructor(x, y, color, width = 75, height = 10) {
    super(x, y, color, width, height); // pass arguments to Sprite!
  }
}

export default Paddle;
