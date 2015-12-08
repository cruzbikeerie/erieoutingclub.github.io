// This is a comments.
var  meeting_date = [  "no Month", "January 20", "February 17", "March 17", "April 21", "May 19", "June 16", "July 21", "August 18", "September 15", "October 20", "November 17", "No Meeting(Christmas Party)","January 19"];
var meeting_location = ["no Month", "at the Sight Center", "at the Sight Center", "at the Sight Center", "at the Sight Center", "at the Sight Center", "at the  Rotary Pavilion", "at the  Rotary Pavilion", "at the  Rotary Pavilion", "at the Sight Center", "at the Sight Center", "at the Sight Center", " at the Beechwood Restaurant"]
function setup() {
	createCanvas(900,250);
	background(153);
	first_square();
	second_square();
	
}

function draw() {}

function first_square() {
	strokeWeight(2);
     stroke(255,255,0);
     fill(0);
	 rect(30, 30,  350, 180);
	  stroke(255);
	 textSize(20);
    text("Membership Meeting is", 45, 50);
    text(" the third Tuesday of the month", 45,75);
    text("at 7:20 p.m.", 45,100);
    text("There is no meeting in December", 45, 125);

	  
}

function second_square() {
	  fill(0,40, 255);
	  rect(450, 30, 350, 180);
	  stroke(255);
	 textSize(20);
	  text("This month's meeting  is on", 510, 50);
  text(meeting_date[month()], 510, 75);
   text(meeting_location[month()], 510, 100);
  text(" Next month's meeting  is on", 510,130);
  text(meeting_date[month()+1], 510,155);
  text(meeting_location[month()+1], 510, 180);
}

  






