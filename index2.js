x = {}
y = {}
Object.getPrototypeOf(x) === Object.getPrototypeOf(y) // true


let person = {name: "Zoe"}
console.log(person)



function Circle(radius) {
  this.radius = radius;
  this.move = function (){
    console.log('move')
  }
}
// this adds the function to the prototype of the Circle
Circle.prototype.draw = function() {
  console.log('draw')
}


const c1 = new Circle(1)

// this will not return prototype members so draw will not return
Object.keys(c1)

// this however WILL return instance and prototype members
for (let key in c1) console.log(key)