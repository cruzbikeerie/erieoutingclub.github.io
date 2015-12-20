// updated Demcember
var  meeting_date = [  "no Month", "January 18", "February 22", "March 15", "April 19", "May 17", "June 21", "July 19", "August 16", "September 20", "October 18", "November 15", "No Meeting(Christmas Party)","January 18"];
var meeting_location = ["no Month", "at the Sight Center", "at the Sight Center", "at the Sight Center", "at the Sight Center", "at the Sight Center", "at the  Rotary Pavilion", "at the  Rotary Pavilion", "at the  Rotary Pavilion", "at the Sight Center", "at the Sight Center", "at the Sight Center", " at the Beechwood Restaurant"]
function setup() {
	createCanvas(600,200);
	background(153);
	first_square();
	second_square();
	
	
}

function draw() {}

function first_square() {
	textFont("Helvetica");
	strokeWeight(2);
     stroke(255,255,0);
     fill(0);
	 rect(30, 10,  width * .44, height);
	  strokeWeight(1);
	 textSize(17);
    text("Membership Meeting is", 45, 50);
    text(" the third Tuesday of the month", 45,75);
    text("at 7:20 p.m.", 45,100);
    text("There is no meeting in December", 45, 125);

	  
}

function second_square() {
	textFont("Helvetica");
	  fill(0,40, 255);
	  rect(325, 10, width * .4, height);
	  strokeWeight(1);
	 textSize(17);
	  text("This month's meeting  is on", 340, 50);
  text(meeting_date[month()], 340, 75);
   text(meeting_location[month()], 340, 100);
  text(" Next month's meeting  is on", 340,130);
  text(meeting_date[month()+1], 340,155);
  text(meeting_location[month()+1], 340, 180);
}

  






