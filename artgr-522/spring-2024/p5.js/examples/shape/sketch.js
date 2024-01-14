// Create a new canvas to the browser size
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Disable animation loop since its a static artwork
  noLoop();
}

// On window resize, update the canvas size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Render loop that draws shapes with p5
function draw() {
  // Black background
  background(0);

  // Turn off shape filling
  noFill();

  // Set the 'join style' of lines to be round
  strokeJoin(ROUND);

  // Set the stroke color as white
  stroke(255);

  // Get the minimum edge of the canvas
  const dim = min(width, height);

  // And use that edge to make the stroke thickness relative
  strokeWeight(dim * 0.015);

  // Center of screen
  const x = width / 2;
  const y = height / 2;

  // Fraction of screen dim
  const size = dim * 0.5;

  // Make a rectangle centred on the screen
  rectMode(CENTER);
  rect(x, y, size, size);

  // Create a circle slightly offset down and right
  ellipse(x, y, size, size);

  // Create a triangle slightly offset up and left
  triangle(
    x,
    y - size / 2,
    x + size / 2,
    y + size / 2,
    x - size / 2,
    y + size / 2
  );
}
