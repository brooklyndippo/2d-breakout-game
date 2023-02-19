const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// === ball specs: ===================================
// starting positions
let x = canvas.width / 2;
let y = canvas.height - 30;

// radius
const ballRadius = 10;

// movement intervals
let dx = 2;
let dy = -2;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = 'coral';
  ctx.fill();
  ctx.closePath();
}

// === paddle specs: =================================
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;

// paddle commands:
let rightPressed = false;
let leftPressed = false;

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = '#006666';
  ctx.fill();
  ctx.closePath();
}

// === brick specs: ==================================
const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;

// brick array:
const bricks = [];
for (let c = 0; c < brickColumnCount; c += 1) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r += 1) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

function drawBricks() {
  for (let c = 0; c < brickColumnCount; c += 1) {
    for (let r = 0; r < brickRowCount; r += 1) {
      if (bricks[c][r].status === 1) {
        const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        if ((r + c) % 2) {
          ctx.fillStyle = '#006666';
        } else {
          ctx.fillStyle = 'cadetblue';
        };
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

// === score: =====================================
let score = 0;

function drawScore() {
  ctx.font = '15px Arial';
  ctx.fillStyle = 'black';
  ctx.fillText(`Score: ${score}`, 8, 20);
}

// === lives: =====================================
let lives = 3;

function drawLives() {
  ctx.font = '15px Arial';
  ctx.fillStyle = 'black';
  ctx.fillText(`Lives: ${lives}`, canvas.width - 60, 20);
}

// === stretch challenge: gradient background =====
function drawBackground() {
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);

  gradient.addColorStop(0, 'mediumturquoise');
  gradient.addColorStop(0.2, 'powderblue');
  gradient.addColorStop(1, 'papayawhip');

  ctx.beginPath();
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.closePath();
}

// === draw the game: =============================

function draw() {
// clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBackground();

  // draw game elements
  drawScore();
  drawLives();
  drawBall();
  drawPaddle();
  drawBricks();
  collisionDetection();

  // move the ball
  x += dx;
  y += dy;

  // movement redirection on collision with canvas edge
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }

  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    // collision detection between paddle and ball
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      lives -= 1;
      if (!lives) {
        alert('GAME OVER');
        document.location.reload();
      } else {
        x = canvas.width / 2;
        y = canvas.height - 30;
        dx = 2;
        dy = -2;
        paddleX = (canvas.width - paddleWidth) / 2;
      }
    }
  }

  // commands to move the paddle
  if (rightPressed) {
    paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
  } else if (leftPressed) {
    paddleX = Math.max(paddleX - 7, 0);
  }

  // call draw function again
  requestAnimationFrame(draw);
}

// add event listeners for keyboard presses
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

// set paddle direciton commands to true when pressed
function keyDownHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = true;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = true;
  }
};

// add event listener for mouse movement
document.addEventListener('mousemove', mouseMoveHandler, false);

// move the paddle relative to the mouse position
function mouseMoveHandler(e) {
  const relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}

// reset paddle directions to false when key is let off
function keyUpHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = false;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = false;
  }
}

// detect collision between ball and bricks
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c += 1) {
    for (let r = 0; r < brickRowCount; r += 1) {
      const b = bricks[c][r];
      if (b.status === 1) {
        if (
          x > b.x
            && x < b.x + brickWidth
            && y > b.y
            && y < b.y + brickHeight
        ) {
          dy = -dy;
          b.status = 0;
          score += 1;
          if (score === brickRowCount * brickColumnCount) {
            alert('YOU WIN, CONGRATULATIONS!');
            document.location.reload();
          }
        }
      }
    }
  }
}

draw();