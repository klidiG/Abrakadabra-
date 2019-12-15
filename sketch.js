//The setup function only happens once



function setup() {
	createCanvas(1366, 653.4); //create a 500px X 500px canvas
 background(255,204,0); //an RGB color for the canvas' background
  //circle
}

//The draw function happens over and over again
function draw() {
  stroke(255) // an RGB color for the circle's border
  fill(0); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX, mouseY, 100, 100); // ellipse means a circular shape, mouse X means means the element will travel to where the mouse is horizontally, and mouse Y means the element will travel to where the mouse is vertically. the first number 100 represents the width (100 pixels) and the second number 100 represent the length (100 pixels) 
}