String[] meeting_date = {
  "no Month", "January 20", "February 17", "March 17", "April 21", "May 19", "June 16", "July 21", "August 18", "September 15", "October 20", "November 17", "No Meeting(Christmas Party)","January 19"
};


String[] meeting_location = {
  "no Month", "at the Sight Center", "at the Sight Center", "at the Sight Center", "at the Sight Center", "at the Sight Center", "at the  Rotary Pavilion", "at the  Rotary Pavilion", "at the  Rotary Pavilion", "at the Sight Center", "at the Sight Center", "at the Sight Center", " at the Beechwood Restaurant"
};

String[]location = {
"no month","The Sight Center is located at","The Sight Center is located at","The Sight Center is located at","The Sight Center is located at","The Sight Center is located at","The Peninsula location is","The Peninsula location is","The Peninsula location is","The Sight Center is located a","The Sight Center is located at","The Sight Center is located at","The Sight Center is located at","The Sight Center is located at"};

String[]location1 = {"no month","2545 West 26th Street, Erie, PA","2545 West 26th Street, Erie, PA","2545 West 26th Street, Erie, PA","2545 West 26th Street, Erie, PA","2545 West 26th Street, Erie, PA","The Rotary Pavilion","The Rotary Pavilion","2545 West 26th Street","2545 West 26th Street","2545 West 26th Street","2545 West 26th Street"};

//color rectBackground = color(#823BF);

void setup() {
  size(650, 300);
  background(#33CC00);
 noStroke();
first_square();
    second_square();
}
 void first_square() {
  strokeWeight(8);
  stroke(255,255,0);
  fill(0);
  rect(30, 20, 280, 180, 7);
  fill(255);
  textSize(16);
  text("The Membership Meetings are ", 40, 50);
  text(" the third Tuesday of the month", 40,75);
text("at 7:20 p.m.", 40,100);
  text("There is no meeting in December", 40, 125);
  text(location[month()], 40, 150);
  text(location1[month()], 40, 175);

}
void second_square() {
  fill(0,40, 255);
  rect(400, 20, 230, 180, 7);
  fill(255);
  text("This month's meeting  is on", 410, 50);
  text(meeting_date[month()], 415, 75);
  text(meeting_location[month()], 415, 100);
  text(" Next month's meeting  is on", 405,130);
  text(meeting_date[month()+1], 415,155);
  text(meeting_location[month()+1], 415, 180);
}

