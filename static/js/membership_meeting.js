// updated Demcember
var meeting_date = ["no Month", "January 19", "February 16", "March 15", "April 19", "May 17", "June 21", "July 19", "August 16", "September 20", "October 18", "November 15", "No Meeting(Christmas Party)", "January 18"];
var meeting_location = ["no Month", "at the Sight Center", "at the Sight Center", "at the Sight Center", "at the Sight Center", "at the Sight Center", "at the  Rotary Pavilion", "at the  Rotary Pavilion", "at the  Rotary Pavilion", "at the Sight Center", "at the Sight Center", "at the Sight Center", " at the Beechwood Restaurant"]

function setup() {
    createCanvas(300, 200);
    background(153);
    first_square();
    //second_square();


}

function draw() {}

function first_square() {
    fill(255);
    rect(0, 0, width, height);
    fill(0);
    textSize(20);
    textFont("Georgia");
    text("This month's meeting  is on", 40, 50);
    text(meeting_date[month()], 40, 75);
    text(meeting_location[month()], 40, 100);
    text(" Next month's meeting  is on", 40, 130);
    text(meeting_date[month() + 1], 40, 155);
    text(meeting_location[month() + 1], 40, 180);


}

function second_square() {

    fill(255);
    textFont("Helvetica");
    fill(0, 40, 255);
    rect(325, 10, width * .4, height);
    strokeWeight(1);
    textSize(17);
    text("This month's meeting  is8 on", 340, 50);
    text(meeting_date[month()], 340, 75);
    text(meeting_location[month()], 340, 100);
    text(" Next month's meeting  is on", 340, 130);
    text(meeting_date[month() + 1], 340, 155);
    text(meeting_location[month() + 1], 340, 180);
}
