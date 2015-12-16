
var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};
function setup() {
createCanvas(900, 400);
  background(153);
}

function draw() {
    fill(255,0,0);
  rect(0,0,height - 10, width);
  fill(0,0,255);
   rect(0,0 ,height * .25, width * .75);
    rect(0,(height * .25) * 1,height * .25, width *.75);
     rect(0,(height * .25) * 2,height * .25, width  * .75);
      rect(0,(height * .25) * 3,height * .25, width * .75);
}
