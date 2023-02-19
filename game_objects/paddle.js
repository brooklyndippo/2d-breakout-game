// eslint-disable-next-line import/extensions
import Sprite from './sprite.js';

class Paddle extends Sprite {
  constructor(x, y, width = 75, height = 10, color) {
    super(x, y, width, height, color); // pass arguments to Sprite!
  }
}

export default Paddle;