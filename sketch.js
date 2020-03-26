let r = 0;
let g = 0;
let b = 0;

let redButton;
let greenButton;
let blueButton;

let shape = "line";
let noiseOffset = 0.0;
let strokeWidth = 5;

function setup() {
  createCanvas(1000, 1000);
  background(255);

  //red button
  redButton = createButton('Change To Red');
  redButton.position(17,364);
  redButton.size(100,50);
  redButton.style('background-color', color(255,0,0));
  redButton.mousePressed(redColor);
//green button
  greenButton = createButton('Change To Green');
  greenButton.position(17,464);
  greenButton.size(100,50);
  greenButton.style('background-color', color(0,255,0));
  greenButton.mousePressed(greenColor);
  //blue button
  blueButton = createButton('Change To Blue');
  blueButton.position(17,564);
  blueButton.size(100,50);
  blueButton.style('background-color', color(0,0,255));
  blueButton.mousePressed(blueColor);

  drawGrid();
  noFill();
}

function draw() {
  strokeWeight(strokeWidth);
  noiseOffset += 0.10;
  strokeWidth = noise(noiseOffset) * 50;

  if (mouseIsPressed) {
    noFill();
    stroke(color(r,g,b));
    if (shape == "line") {
      line(mouseX, mouseY, pmouseX, pmouseY);
    } else if (shape == "ellipse") {
      strokeWeight(3);
      ellipse(mouseX, mouseY, 100, 100);
    } else if (shape == "rectangle") {
      strokeWeight(3);
      rect(mouseX, mouseY, 100, 100);
    }
  }
}

function keyTyped() {

  if (key === 's') {
    saveCanvas('fileName', 'png');
  } else if (key === 'l'){
    shape = "line";
  } else if (key === 'c') {
    shape = "ellipse";
  } else if (key === 'r') {
    shape = "rectangle";
  } else if (key === ' ') {
    clear();
    drawGrid();
  }
}

function redColor(){
  r = 255;
  g = 0;
  b = 0;
}

function greenColor(){
  r = 0;
  g = 255;
  b = 0;
}

function blueColor(){
  r = 0;
  g = 0;
  b = 255;
}

function drawGrid() {
  numCells = 20;
  fillColor = 255;
  strokeWeight(0);

  for (let i = 0; i <= width; i += width / numCells) {
    for (let j = 0; j <= height; j += height / numCells) {
      if (fillColor === 255) {
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
