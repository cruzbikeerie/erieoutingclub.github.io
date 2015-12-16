
var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};
function setup() {
createCanvas(900, 400);
  background(153);
  line(0, 0, width, height);
}

function draw() {
  ellipse(mouseX,mouseY,80, 80);
  print(person.firstName);
}
