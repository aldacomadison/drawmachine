let shape = "line";
let noiseOffset = 0.0;
let strokeWidth = 5;

function setup() {
  createCanvas(1000, 1000);
  background(255);
  drawGrid();
  noFill();
}

function draw() {
  strokeWeight(strokeWidth);

  noiseOffset += 0.10;
  strokeWidth = noise(noiseOffset) * 50;
  if (mouseIsPressed) {
    stroke(map(mouseX, 0, 1000, 0, 255, true));
    if (shape == "line") {
      line(mouseX, mouseY, pmouseX, pmouseY);
    } else if (shape == "ellipse") {
      ellipse(mouseX, mouseY, pmouseX, pmouseY);
    } else if (shape == "rectangle") {
      rect(mouseX, mouseY, pmouseX, pmouseY);
    }
  } // else {
  //   push();
  //   textSize(25);
  //   fill(random(255), random(255), random(255));
  //   text('What Will You Create', mouseX, mouseY);
  //   pop();
  // }
}

function keyTyped() {

  if (key === 's') {
    saveCanvas('fileName', 'png');
  } else if (key === 'c') {
    shape = "ellipse";
  } else if (key === 'r') {
    shape = "rectangle";
  } else if (key === ' ') {
    clear();
  }
}

// function mousePressed() {
//
// }

function drawGrid() {
  numCells = 20;
  fillColor = 255;
  strokeWeight(0);

  for (let i = 0; i <= width; i += width / numCells) {
    for (let j = 0; j <= height; j += height / numCells) {
      if (fillColor === 255){
        fillColor = 200;
      } else {
        fillColor = 255;
      }
      fill(fillColor);
      rect(i, j, width / numCells, height / numCells);
    }
  }
  strokeWeight(5);
}
