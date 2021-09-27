
const Circle = function(){
  this.draw = function() {
    console.log(this)
  }
}

const c = new Circle()
c.draw();
const draw = c.draw;

//this will return the WINDOW!! cause it's not called on an instance of cirlce, it's being called on the window. if you added 'use strict' to the top at least it would return undefined. 
draw()

// however in ES6 anything in a class uses strict by default
class Circle {
  draw(){
    console.log(this)
  }
}

const c = new Circle()
const draw = c.draw;
draw();