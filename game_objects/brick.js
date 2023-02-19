// eslint-disable-next-line import/extensions
import Sprite from './sprite.js';

class Brick extends Sprite {
  constructor(x, y, width = 75, height = 20, color) {
    super(x, y, width, height, color); // pass arguments to Sprite!
    this.status = true; // adds a new property
  }
}

export default Brick;
