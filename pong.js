var colours = ['#FF2F2F', '#FF832F', '#FFF22F', '#24F604', '#046DF6', '#8D04F6']

/* Declaring and initializing variables */
var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 70;
var diameter = 50;

var xBallChange = 5;
var yBallChange = 5;

var xPaddle;
var yPaddle;
var paddleWidth = 100;
var paddleHeight = 25;

var score = 0;

var started = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ballFill = random(colours);
}

function draw() {
  background(0);

  /* Pong Ball */
  fill(ballFill);
  noStroke();
  ellipse(xBall, yBall, diameter, diameter);
  fill(190);

  xBall += xBallChange;
  yBall += yBallChange;

  if (xBall < diameter / 2 || xBall > windowWidth - 0.5 * diameter) {
    xBallChange *= -1;
  }
  if (yBall < diameter / 2 + 46 || yBall > windowHeight - diameter) {
    yBallChange *= -1;
  }
  if (
    xBall > xPaddle &&
    xBall < xPaddle + paddleWidth &&
    yBall + diameter / 2 >= yPaddle
  ) {
    ballFill = random(colours);
    xBallChange *= -1;
    yBallChange *= -1;
    score++;
  }

  if (!started) {
    xPaddle = windowWidth / 2;
    yPaddle = windowHeight - 100;
    started = true;
  }
  if (yBall === windowHeight - 50) {
    yBallChange = 0;
    xBallChange = 0;
    fill(230);
    textSize(40);
    text("GAME OVER", windowWidth / 3, 90);
  }

  fill(255, 211, 107);
  noStroke();
  rect(xPaddle, yPaddle, paddleWidth, paddleHeight);

  rect(0, 0, windowWidth, 40);
  
  fill(0);
  stroke(2);
  textSize(24);
  textFont('Spline Sans Mono');
  text("Score: " + score, 10, 27);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    xPaddle -= 50;
  } else if (keyCode === RIGHT_ARROW) {
    xPaddle += 50;
  }
}