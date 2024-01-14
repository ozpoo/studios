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
  // For consistent sizing regardless of portrait/landscape
  const dim = Math.min(width, height);
  
  // Black background
  background(0);
  
  // Stroke only with a specific join style and thickness
  noFill();
  stroke(255);
  strokeWeight(dim * 0.015);

  // Get time in seconds
  const time = millis() / 1000;
  
  // Loop duration
  const duration = 4;

  // Get a 'playhead' from 0..1
  // We use modulo to keep it within 0..1
  const playhead = time / duration % 1;

  // A "start" position as XY coordinate
  const start = [ width * 0.25, height / 2 ];
  
  // An "end" position as XY coordinate
  const end = [ width * 0.75, height / 2 ];
  
  // Get a value that goes from -1..1 based on playhead
  // We use 2PI to create a seamless loop
  let t0 = sin(playhead * PI * 2);
  
  // Now we map the -1..1 to 0..1 values
  t0 = t0 * 0.5 + 0.5;

  // Now interpolate X and Y positions separately from
  // 'start' to 'end' coordinates
  const x = lerp(start[0], end[0], t0);
  const y = lerp(start[1], end[1], t0);

  // As an exercise, you could also try animating the
  // circle radius and stroke weight
  const r = dim * 0.3;
  ellipse(x, y, r, r);
}
