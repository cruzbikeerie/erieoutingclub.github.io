// This is a comments.
var  meeting_date = [  "no Month", "January 20", "February 17", "March 17", "April 21", "May 19", "June 16", "July 21", "August 18", "September 15", "October 20", "November 17", "No Meeting(Christmas Party)","January 19"];
var meeting_location = ["no Month", "at the Sight Center", "at the Sight Center", "at the Sight Center", "at the Sight Center", "at the Sight Center", "at the  Rotary Pavilion", "at the  Rotary Pavilion", "at the  Rotary Pavilion", "at the Sight Center", "at the Sight Center", "at the Sight Center", " at the Beechwood Restaurant"]
function setup() {
	// Create the canvas
  createCanvas(720, 400);
  background(200);
  
  // Set colors
  fill(204, 101, 192, 127);
  stroke(127, 63, 120);
	
}

function draw() {
  ellipse(50, 50, 80, 80);
    fill(0);
  textSize(32);
text("Hello", 150, 30);
fill(0, 102, 153);
text("how", 150, 60);
fill(0, 102, 153, 51);
text("are you", 150, 90);
}
