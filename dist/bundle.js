/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game_objects/background.ts":
/*!****************************************!*\
  !*** ./src/game_objects/background.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar GradientBackground = /** @class */ (function () {\n    function GradientBackground(color1, color2, color3, height, width) {\n        this.color1 = color1;\n        this.color2 = color2;\n        this.color3 = color3;\n        this.height = height;\n        this.width = width;\n    }\n    GradientBackground.prototype.paintBackground = function (ctx) {\n        var gradient = ctx.createLinearGradient(0, 0, 0, this.height);\n        gradient.addColorStop(0, this.color1);\n        gradient.addColorStop(0.2, this.color2);\n        gradient.addColorStop(1, this.color3);\n        ctx.beginPath();\n        ctx.rect(0, 0, this.width, this.height);\n        ctx.fillStyle = gradient;\n        ctx.fill();\n        ctx.closePath();\n    };\n    return GradientBackground;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GradientBackground);\n\n\n//# sourceURL=webpack://2d-breakout-game/./src/game_objects/background.ts?");

/***/ }),

/***/ "./src/game_objects/ball.ts":
/*!**********************************!*\
  !*** ./src/game_objects/ball.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Ball = /** @class */ (function () {\n    function Ball(x, y, dx, dy, radius, color) {\n        this.x = x;\n        this.y = y;\n        this.dx = dx;\n        this.dy = dy;\n        this.radius = radius;\n        this.color = color;\n    }\n    Ball.prototype.render = function (ctx) {\n        ctx.beginPath();\n        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);\n        ctx.fillStyle = this.color;\n        ctx.fill();\n        ctx.closePath();\n    };\n    Ball.prototype.move = function () {\n        // move the ball\n        this.x += this.dx;\n        this.y += this.dy;\n        // movement redirection on collision with horizontal canvas edge\n        if (this.x + this.dx > 480 - this.radius || this.x + this.dx < this.radius) {\n            this.dx = -this.dx;\n        }\n        // movement redirection on collision top canvas edge\n        if (this.y + this.dy < this.radius) {\n            this.dy = -this.dy;\n        }\n    };\n    return Ball;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ball);\n\n\n//# sourceURL=webpack://2d-breakout-game/./src/game_objects/ball.ts?");

/***/ }),

/***/ "./src/game_objects/brick.ts":
/*!***********************************!*\
  !*** ./src/game_objects/brick.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ \"./src/game_objects/sprite.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n// eslint-disable-next-line import/extensions\n\nvar Brick = /** @class */ (function (_super) {\n    __extends(Brick, _super);\n    function Brick(x, y, color, width, height) {\n        if (width === void 0) { width = 75; }\n        if (height === void 0) { height = 20; }\n        var _this = _super.call(this, x, y, color, width, height) || this;\n        _this.status = true; // adds a new property\n        return _this;\n    }\n    return Brick;\n}(_sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Brick);\n\n\n//# sourceURL=webpack://2d-breakout-game/./src/game_objects/brick.ts?");

/***/ }),

/***/ "./src/game_objects/lifetracker.ts":
/*!*****************************************!*\
  !*** ./src/game_objects/lifetracker.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar LifeTracker = /** @class */ (function () {\n    function LifeTracker(x, y, font, color, lives) {\n        if (font === void 0) { font = 'Arial'; }\n        if (color === void 0) { color = 'black'; }\n        if (lives === void 0) { lives = 3; }\n        this.x = x;\n        this.y = y;\n        this.font = font;\n        this.color = color;\n        this.lives = lives;\n    }\n    LifeTracker.prototype.render = function (ctx) {\n        ctx.font = \"15px \".concat(this.font);\n        ctx.fillStyle = this.color;\n        ctx.fillText(\"Lives: \".concat(this.lives), this.x, this.y);\n    };\n    LifeTracker.prototype.subtractLife = function () {\n        this.lives -= 1;\n    };\n    LifeTracker.prototype.reset = function () {\n        this.lives = 3;\n    };\n    return LifeTracker;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LifeTracker);\n\n\n//# sourceURL=webpack://2d-breakout-game/./src/game_objects/lifetracker.ts?");

/***/ }),

/***/ "./src/game_objects/paddle.ts":
/*!************************************!*\
  !*** ./src/game_objects/paddle.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ \"./src/game_objects/sprite.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n// eslint-disable-next-line import/extensions\n\nvar Paddle = /** @class */ (function (_super) {\n    __extends(Paddle, _super);\n    function Paddle(x, y, color, width, height) {\n        if (width === void 0) { width = 75; }\n        if (height === void 0) { height = 10; }\n        return _super.call(this, x, y, color, width, height) || this;\n    }\n    return Paddle;\n}(_sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Paddle);\n\n\n//# sourceURL=webpack://2d-breakout-game/./src/game_objects/paddle.ts?");

/***/ }),

/***/ "./src/game_objects/scoreboard.ts":
/*!****************************************!*\
  !*** ./src/game_objects/scoreboard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Scoreboard = /** @class */ (function () {\n    function Scoreboard(x, y, font, color, score) {\n        if (font === void 0) { font = 'Arial'; }\n        if (color === void 0) { color = 'black'; }\n        if (score === void 0) { score = 0; }\n        this.x = x;\n        this.y = y;\n        this.font = font;\n        this.color = color;\n        this.score = score;\n    }\n    Scoreboard.prototype.render = function (ctx) {\n        ctx.font = \"15px \".concat(this.font);\n        ctx.fillStyle = this.color;\n        ctx.fillText(\"Score: \".concat(this.score), this.x, this.y);\n    };\n    Scoreboard.prototype.addPoint = function () {\n        this.score += 1;\n    };\n    Scoreboard.prototype.reset = function () {\n        this.score = 0;\n    };\n    return Scoreboard;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scoreboard);\n\n\n//# sourceURL=webpack://2d-breakout-game/./src/game_objects/scoreboard.ts?");

/***/ }),

/***/ "./src/game_objects/sprite.ts":
/*!************************************!*\
  !*** ./src/game_objects/sprite.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Sprite = /** @class */ (function () {\n    function Sprite(x, y, color, width, height) {\n        if (x === void 0) { x = 0; }\n        if (y === void 0) { y = 0; }\n        if (color === void 0) { color = '#f00'; }\n        if (width === void 0) { width = 100; }\n        if (height === void 0) { height = 100; }\n        this.x = x;\n        this.y = y;\n        this.color = color;\n        this.width = width;\n        this.height = height;\n    }\n    Sprite.prototype.render = function (ctx) {\n        ctx.beginPath();\n        ctx.rect(this.x, this.y, this.width, this.height);\n        ctx.fillStyle = this.color;\n        ctx.fill();\n        ctx.closePath();\n    };\n    return Sprite;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sprite);\n\n\n//# sourceURL=webpack://2d-breakout-game/./src/game_objects/sprite.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_objects_ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_objects/ball */ \"./src/game_objects/ball.ts\");\n/* harmony import */ var _game_objects_brick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_objects/brick */ \"./src/game_objects/brick.ts\");\n/* harmony import */ var _game_objects_background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game_objects/background */ \"./src/game_objects/background.ts\");\n/* harmony import */ var _game_objects_lifetracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game_objects/lifetracker */ \"./src/game_objects/lifetracker.ts\");\n/* harmony import */ var _game_objects_paddle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game_objects/paddle */ \"./src/game_objects/paddle.ts\");\n/* harmony import */ var _game_objects_scoreboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game_objects/scoreboard */ \"./src/game_objects/scoreboard.ts\");\n/* eslint-disable import/extensions */\n\n\n//import Game from './game';\n\n\n\n\n// ************** DOM REFERENCES *******************\nvar canvas = document.getElementById('myCanvas');\nvar ctx = canvas.getContext('2d');\n// === ball specs: ===================================\nvar ballX = canvas.width / 2;\nvar ballY = canvas.height - 30;\nvar ballDx = 2;\nvar ballDy = -2;\nvar ballRadius = 10;\nvar ball = new _game_objects_ball__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ballX, ballY, ballDx, ballDy, ballRadius, 'coral');\n// === paddle specs: =================================\nvar paddleWidth = 75;\nvar paddleHeight = 10;\nvar paddleStartX = (canvas.width - paddleWidth) / 2;\nvar paddleStartY = canvas.height - paddleHeight;\nvar paddle = new _game_objects_paddle__WEBPACK_IMPORTED_MODULE_4__[\"default\"](paddleStartX, paddleStartY, '#006666', paddleWidth, paddleHeight);\n// paddle commands:\nvar rightPressed = false;\nvar leftPressed = false;\n// === brick specs: ==================================\nvar brickRowCount = 3;\nvar brickColumnCount = 5;\nvar brickWidth = 75;\nvar brickHeight = 20;\nvar brickPadding = 10;\nvar brickOffsetTop = 30;\nvar brickOffsetLeft = 30;\nvar bricks = []; // bricks array\nfunction initializeBricks() {\n    for (var c = 0; c < brickColumnCount; c += 1) {\n        bricks[c] = [];\n        for (var r = 0; r < brickRowCount; r += 1) {\n            var brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;\n            var brickY = r * (brickHeight + brickPadding) + brickOffsetTop;\n            if ((r + c) % 2) {\n                bricks[c][r] = new _game_objects_brick__WEBPACK_IMPORTED_MODULE_1__[\"default\"](brickX, brickY, '#006666', brickWidth, brickHeight);\n            }\n            else {\n                bricks[c][r] = new _game_objects_brick__WEBPACK_IMPORTED_MODULE_1__[\"default\"](brickX, brickY, 'cadetblue', brickWidth, brickHeight);\n            }\n        }\n    }\n}\ninitializeBricks();\n// === scoreboard specs: ===================================\nvar scoreboard = new _game_objects_scoreboard__WEBPACK_IMPORTED_MODULE_5__[\"default\"](8, 20);\n// === lifetracker specs: ===================================\nvar lifetracker = new _game_objects_lifetracker__WEBPACK_IMPORTED_MODULE_3__[\"default\"](canvas.width - 60, 20);\n// === stretch challenge: gradient background =====\nvar background = new _game_objects_background__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('mediumturquoise', 'powderblue', 'papayawhip', canvas.height, canvas.width);\n// === reset game objects ==========================\nfunction resetGameObjects() {\n    ball.x = canvas.width / 2;\n    ball.y = canvas.height - 30;\n    ball.dx = 2;\n    ball.dy = -2;\n    paddle.x = paddleStartX;\n}\n// detect collision between ball and bricks\nfunction collisionDetection() {\n    for (var c = 0; c < brickColumnCount; c += 1) {\n        for (var r = 0; r < brickRowCount; r += 1) {\n            var brick = bricks[c][r];\n            if (brick.status === true) {\n                if (ball.x > brick.x\n                    && ball.x < brick.x + brickWidth\n                    && ball.y > brick.y\n                    && ball.y < brick.y + brickHeight) {\n                    ball.dy = -ball.dy;\n                    brick.status = false;\n                    scoreboard.addPoint();\n                    if (scoreboard.score === brickRowCount * brickColumnCount) {\n                        alert('YOU WIN, CONGRATULATIONS!');\n                        document.location.reload();\n                    }\n                }\n            }\n        }\n    }\n}\n// detect paddle collision\nfunction paddleCollision() {\n    if (ball.y + ball.dy > canvas.height - ball.radius) {\n        if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {\n            ball.dy = -ball.dy;\n        }\n        else {\n            lifetracker.subtractLife();\n            if (lifetracker.lives === 0) {\n                alert('GAME OVER');\n                document.location.reload();\n            }\n            else {\n                resetGameObjects();\n            }\n        }\n    }\n}\n// ************************************************\n// === draw the game: =============================\n// ************************************************\nfunction draw() {\n    // clear the canvas & draw background\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    background.paintBackground(ctx);\n    // draw game objects\n    // ball\n    ball.render(ctx);\n    // paddle\n    paddle.render(ctx);\n    // score\n    scoreboard.render(ctx);\n    // lives\n    lifetracker.render(ctx);\n    // bricks\n    for (var c = 0; c < brickColumnCount; c += 1) {\n        for (var r = 0; r < brickRowCount; r += 1) {\n            if (bricks[c][r].status === true) {\n                bricks[c][r].render(ctx);\n            }\n        }\n    }\n    ball.move();\n    collisionDetection();\n    paddleCollision();\n    // commands to move the paddle\n    if (rightPressed) {\n        paddle.x = Math.min(paddle.x + 7, canvas.width - paddle.width);\n    }\n    else if (leftPressed) {\n        paddle.x = Math.max(paddle.x - 7, 0);\n    }\n    // call draw function again\n    requestAnimationFrame(draw);\n}\n// add event listeners for keyboard presses\ndocument.addEventListener('keydown', keyDownHandler, false);\ndocument.addEventListener('keyup', keyUpHandler, false);\n// set paddle direciton commands to true when pressed\nfunction keyDownHandler(e) {\n    if (e.key === 'Right' || e.key === 'ArrowRight') {\n        rightPressed = true;\n    }\n    else if (e.key === 'Left' || e.key === 'ArrowLeft') {\n        leftPressed = true;\n    }\n}\n// add event listener for mouse movement\ndocument.addEventListener('mousemove', mouseMoveHandler, false);\n// move the paddle relative to the mouse position\nfunction mouseMoveHandler(e) {\n    var relativeX = e.clientX - canvas.offsetLeft;\n    if (relativeX > 0 && relativeX < canvas.width) {\n        paddle.x = relativeX - paddle.width / 2;\n    }\n}\n// reset paddle directions to false when key is let off\nfunction keyUpHandler(e) {\n    if (e.key === 'Right' || e.key === 'ArrowRight') {\n        rightPressed = false;\n    }\n    else if (e.key === 'Left' || e.key === 'ArrowLeft') {\n        leftPressed = false;\n    }\n}\ndraw();\n\n\n//# sourceURL=webpack://2d-breakout-game/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;