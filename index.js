/* eslint-disable import/extensions */
import Ball from './game_objects/ball.js';
import Brick from './game_objects/brick.js';
import GradientBackground from './game_objects/background.js';
import LifeTracker from './game_objects/lifetracker.js';
import Paddle from './game_objects/paddle.js';
import Scoreboard from './game_objects/scoreboard.js';

// import Brick from "./game_objects/brick";

// ************** DOM REFERENCES *******************

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// === ball specs: ===================================
// starting positions

const ball = new Ball(canvas.width / 2, canvas.height - 30, 2, -2, 10, 'coral');
let x = canvas.width / 2;
let y = canvas.height - 30;

// radius
const ballRadius = 10;
// const Pi2 = Math.PI * 2;

// movement intervals
let dx = 2;
let dy = -2;

// function drawBall() {
//   ctx.beginPath();
//   ctx.arc(x, y, ballRadius, 0, Pi2);
//   ctx.fillStyle = 'coral';
//   ctx.fill();
//   ctx.closePath();
// }

// === paddle specs: =================================
const paddleWidth = 75;
const paddleHeight = 10;
const paddleStartX = (canvas.width - paddleWidth) / 2;
const paddleStartY = canvas.height - paddleHeight;
const paddle = new Paddle(paddleStartX, paddleStartY, '#006666', paddleWidth, paddleHeight);

let paddleX = paddleStartX;

// paddle commands:
let rightPressed = false;
let leftPressed = false;

// function drawPaddle() {
//   ctx.beginPath();
//   ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
//   ctx.fillStyle = '#006666';
//   ctx.fill();
//   ctx.closePath();
// }

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

function initializeBricks() {
  for (let c = 0; c < brickColumnCount; c += 1) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r += 1) {
      const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
      const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
      if ((r + c) % 2) {
        bricks[c][r] = new Brick(brickX, brickY, '#006666', brickWidth, brickHeight);
      } else {
        bricks[c][r] = new Brick(brickX, brickY, 'cadetblue', brickWidth, brickHeight);
      }
    }
  }
}

initializeBricks();

// function drawBricks() {
//   for (let c = 0; c < brickColumnCount; c += 1) {
//     for (let r = 0; r < brickRowCount; r += 1) {
//       if (bricks[c][r].status === 1) {

//         ctx.beginPath();
//         ctx.rect(brickX, brickY, brickWidth, brickHeight);
//         if ((r + c) % 2) {
//           ctx.fillStyle = '#006666';
//         } else {
//           ctx.fillStyle = 'cadetblue';
//         }
//         ctx.fill();
//         ctx.closePath();
//       }
//     }
//   }
// }

// === score: =====================================
const scoreboard = new Scoreboard(8, 20);
let score = 0;

// function drawScore() {
//   ctx.font = '15px Arial';
//   ctx.fillStyle = 'black';
//   ctx.fillText(`Score: ${score}`, 8, 20);
// }

// === lives: =====================================
const lifetracker = new LifeTracker(canvas.width - 60, 20);
let lives = 3;

function drawLives() {
  ctx.font = '15px Arial';
  ctx.fillStyle = 'black';
  ctx.fillText(`Lives: ${lives}`, canvas.width - 60, 20);
}

// === stretch challenge: gradient background =====
const background = new GradientBackground('mediumturquoise', 'powderblue', 'papayawhip', canvas.height, canvas.width);

// === reset game objects ==========================

// === draw the game: =============================

function draw() {
// clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  background.paintBackground(ctx);

  // draw BALL
  ball.render(ctx);
  ball.move();

  // draw BRICKS
  for (let c = 0; c < brickColumnCount; c += 1) {
    for (let r = 0; r < brickRowCount; r += 1) {
      if (bricks[c][r].status === true) {
        bricks[c][r].render(ctx);
      }
    }
  }

  // draw PADDLE
  paddle.render(ctx);

  // draw SCORE
  scoreboard.render(ctx);

  // draw LIVES
  lifetracker.render(ctx);

  // drawLives();
  // drawBall();
  // drawPaddle();
  // drawBricks();
  // collisionDetection();

  // // move the ball
  // x += dx;
  // y += dy;

  // // movement redirection on collision with canvas edge
  // if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
  //   dx = -dx;
  // }

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
        paddleX = paddleStartX;
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
}

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
