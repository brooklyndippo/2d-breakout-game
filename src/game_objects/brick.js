// eslint-disable-next-line import/extensions
import Sprite from './sprite.js';

class Brick extends Sprite {
  constructor(x, y, color, width = 75, height = 20) {
    super(x, y, color, width, height); // pass arguments to Sprite!
    this.status = true; // adds a new property
  }
}

export default Brick;
