/* eslint-disable import/extensions */
import Ball from './game_objects/ball';
import Brick from './game_objects/brick';
//import Game from './game';
import GradientBackground from './game_objects/background';
import LifeTracker from './game_objects/lifetracker';
import Paddle from './game_objects/paddle';
import Scoreboard from './game_objects/scoreboard';

// ************** DOM REFERENCES *******************

const canvas = <HTMLCanvasElement> document.getElementById('myCanvas');
const ctx: any = canvas.getContext('2d');

// === ball specs: ===================================
const ballX = canvas.width / 2;
const ballY = canvas.height - 30;
const ballDx = 2;
const ballDy = -2;
const ballRadius = 10;
const ball: Ball = new Ball(ballX, ballY, ballDx, ballDy, ballRadius, 'coral');

// === paddle specs: =================================
const paddleWidth = 75;
const paddleHeight = 10;
const paddleStartX = (canvas.width - paddleWidth) / 2;
const paddleStartY = canvas.height - paddleHeight;
const paddle: Paddle = new Paddle(paddleStartX, paddleStartY, '#006666', paddleWidth, paddleHeight);

// paddle commands:
let rightPressed = false;
let leftPressed = false;

// === brick specs: ==================================
const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;

const bricks : Brick[][] = []; // bricks array

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

// === scoreboard specs: ===================================
const scoreboard: Scoreboard = new Scoreboard(8, 20);

// === lifetracker specs: ===================================
const lifetracker: LifeTracker = new LifeTracker(canvas.width - 60, 20);

// === stretch challenge: gradient background =====
const background: GradientBackground = new GradientBackground('mediumturquoise', 'powderblue', 'papayawhip', canvas.height, canvas.width);

// === reset game objects ==========================
function resetGameObjects() {
  ball.x = canvas.width / 2;
  ball.y = canvas.height - 30;
  ball.dx = 2;
  ball.dy = -2;
  paddle.x = paddleStartX;
}

// detect collision between ball and bricks
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c += 1) {
    for (let r = 0; r < brickRowCount; r += 1) {
      const brick = bricks[c][r];
      if (brick.status === true) {
        if (
          ball.x > brick.x
            && ball.x < brick.x + brickWidth
            && ball.y > brick.y
            && ball.y < brick.y + brickHeight
        ) {
          ball.dy = -ball.dy;
          brick.status = false;
          scoreboard.addPoint();
          if (scoreboard.score === brickRowCount * brickColumnCount) {
            alert('YOU WIN, CONGRATULATIONS!');
            document.location.reload();
          }
        }
      }
    }
  }
}

// detect paddle collision
function paddleCollision() {
  if (ball.y + ball.dy > canvas.height - ball.radius) {
    if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
      ball.dy = -ball.dy;
    } else {
      lifetracker.subtractLife();
      if (lifetracker.lives === 0) {
        alert('GAME OVER');
        document.location.reload();
      } else {
        resetGameObjects();
      }
    }
  }
}

// ************************************************
// === draw the game: =============================
// ************************************************

function draw() {
  // clear the canvas & draw background
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  background.paintBackground(ctx);

  // draw game objects
  // ball
  ball.render(ctx);
  // paddle
  paddle.render(ctx);
  // score
  scoreboard.render(ctx);
  // lives
  lifetracker.render(ctx);
  // bricks
  for (let c = 0; c < brickColumnCount; c += 1) {
    for (let r = 0; r < brickRowCount; r += 1) {
      if (bricks[c][r].status === true) {
        bricks[c][r].render(ctx);
      }
    }
  }

  ball.move();
  collisionDetection();
  paddleCollision();

  // commands to move the paddle
  if (rightPressed) {
    paddle.x = Math.min(paddle.x + 7, canvas.width - paddle.width);
  } else if (leftPressed) {
    paddle.x = Math.max(paddle.x - 7, 0);
  }

  // call draw function again
  requestAnimationFrame(draw);
}

// add event listeners for keyboard presses
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

// set paddle direciton commands to true when pressed
function keyDownHandler(e: KeyboardEvent) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = true;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = true;
  }
}

// add event listener for mouse movement
document.addEventListener('mousemove', mouseMoveHandler, false);

// move the paddle relative to the mouse position
function mouseMoveHandler(e: MouseEvent) {
  const relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddle.x = relativeX - paddle.width / 2;
  }
}

// reset paddle directions to false when key is let off
function keyUpHandler(e: KeyboardEvent) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = false;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = false;
  }
}

draw();
