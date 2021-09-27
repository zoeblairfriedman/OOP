class Circle {
  constructor(radius){
    this.radius = radius;
  }
  //instance method <-- particular to a certain object
  draw() {
    console.log('draw')
  }

  // static method <-- not available to instances, only the class. Class method. 
  static parse(str) {

  }
}

const c = new Circle(2);

//if you put the method in the constructor it's a function on the object instance, if you put it in the body, it's on the prototype



//declaration <--- these are hoisted to the top! 
function sayHello(){

}

//expressions are not hoisted.
const sayGoodbye = function(){

};

// this works too. but it won't be hoisted. Don't use this. 
const Square = class {};