
function Shape() {

}

Shape.prototype.duplicate = function() {
  console.log('duplicate')
}


function Circle(radius) {
  this.radius = radius;
}
// this adds the function to the prototype of the Circle
Circle.prototype.draw = function() {
  console.log('draw')
}

Circle.prototype = Object.create(Shape.prototype)

const s = new Shape()
const c = new Circle(1)

