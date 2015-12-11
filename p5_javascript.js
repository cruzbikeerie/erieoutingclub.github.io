
var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};
function setup() {
createCanvas(400, 400);
  background(153);
  line(0, 0, width, height);
}

function draw() {
  ellipse(50, 50, 80, 80);
  print(person.firstName);
}
