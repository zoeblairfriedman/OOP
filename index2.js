x = {}
y = {}
Object.getPrototypeOf(x) === Object.getPrototypeOf(y) // true


let person = {name: "Zoe"}
console.log(person)



function Circle(radius) {
  this.radius = radius;
  this.move = function (){
    this.draw()
    console.log('move')
  }
}
// this adds the function to the prototype of the Circle
Circle.prototype.draw = function() {
  console.log('draw')
}



