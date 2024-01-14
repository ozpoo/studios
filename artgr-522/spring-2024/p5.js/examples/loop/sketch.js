// Create a new canvas to the browser size
function setup () {
  createCanvas(windowWidth, windowHeight);
}

// On window resize, update the canvas size
function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

// Render loop that draws shapes with p5
function draw(){
  // Black background
  background(0);
  
  // Center of screen
  const px = width / 2;
  const py = height / 2;
  
  // We will scale everything to the minimum edge of the canvas
  const minDim = min(width, height);
  
  // Size is a fraction of the screen
  const size = minDim * 0.5;
  
  // Get time in seconds
  const time = millis() / 1000;
  
  // How long we want the loop to be (of one full cycle)
  const duration = 5;
  
  // Get a 'playhead' from 0..1
  // We use modulo to keep it within 0..1
  const playhead = time / duration % 1;

  // Get an animated value from 0..1
  // We use playhead * 2PI to get a full rotation
  const anim = sin(playhead * PI * 2) * 0.5 + 0.5;
  
  // Create an animated thickness for the stroke that
  const thickness = minDim * 0.1 * anim;
  
  // Turn off fill
  noFill();
  
  // Turn on stroke and make it white
  stroke(255);
  
  // Apply thickness
  strokeWeight(thickness);

  // Draw a circle centred at (px, py)
  ellipse(px, py, size, size);
}
