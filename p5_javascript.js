
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
  rect(10,19,750, 350);
  print(person.firstName);
}
