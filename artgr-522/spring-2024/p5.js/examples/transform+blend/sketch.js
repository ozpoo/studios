// Create a new canvas to the browser size
function setup () {
  createCanvas(windowWidth, windowHeight);
  
  // Disable animation loop since its a static artwork
  noLoop();
}

// On window resize, update the canvas size
function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

// Render loop that draws shapes with p5
function draw(){
  // Set the default blend mode
  blendMode(BLEND);
  
  // Black background
  background(0);
  
  // Set foreground as white
  fill(255);
  
  // Set x-or / difference blend mode
  blendMode(DIFFERENCE);
  
  // Disable stroke
  noStroke();

  // Center of screen
  const x = width / 2;
  const y = height / 2;
  
  // Fraction of screen dim
  const dim = min(width, height);
  const size = dim * 0.5;
  
  // Make a rectangle centred on the screen
  rectMode(CENTER);
  rect(x, y, size, size);
  
  // Create a circle slightly offset down and right
  push();
  translate(size / 4, size / 4);
  ellipse(x, y, size, size);
  pop();
  
  // Create a triangle slightly offset up and left
  push();
  translate(-size / 4, -size / 4);
  triangle(
    x, y - size / 2,
    x + size / 2, y + size / 2,
    x - size / 2, y + size / 2
  );
  pop();
  
}
