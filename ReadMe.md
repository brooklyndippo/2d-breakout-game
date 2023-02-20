# 2D Breakout Game

## Why

Building the 2D Breakout Game was a great way to learn object oriented programming skills as well as professional best practices from linting, to file structure, to bundling. This game was built progressively, starting with a simple single file structure with all the JS squeezed between a single pair of `<script>` tags. At each step, I refactored the code. I started by abstracting different game objects into classes and included the use of inheritance from a Sprite class. This required identifying all of the properties and methods for each class, then making sure it was accessible back in the main file. Once all of the classes were abstracted, the functions that interacted with these objects had to be re-written as well. After reviewing and refactoring code and implementing many of the stretch challenges along the way, I did one final restructure so that I could bundle my code for the web! 

# Image or screen shot

<img width="480" alt="Screen Shot 2023-02-20 at 12 01 29 AM" src="https://user-images.githubusercontent.com/82503178/220078830-2c35fb88-5395-46f7-95ac-cecd5b5bc29b.png">


# Getting started - how to run the project

To run the project, start by opening up a terminal in VS Code and running these commands:

Clone the repo to your local machine:

`git clone https://github.com/brooklyndippo/2d-breakout-game.git`

Move into the project directory: 

`cd 2d-breakout-game`

From the project directory, install necessary dependencies and bundle the code with webpack: 

`npm install`

`npm run build`

Now start LiveServer or another extension to run the code on your local machine. At this point you will see the 
project file structure. To see our game, we need to navigate to where LiveServer can get the `index.html` file. 
When we bundled our code with webpack, we moved this into the `dist/` folder.

Click on the `dist/` folder in your browser, **the game should appear and now you can play!**



# Tools and technologies used

- Languages - Javascript, then Typescript to specify input types in every function/class
- Object Oriented Programming - inheritance, classes, properties, and methods
- DRY Code - reducing code through class-based programming and repeated refactoring
- Webpack - bundling code to make it ready for the web 
