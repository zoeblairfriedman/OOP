
//this is object literal syntax
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
   draw: function() {
     console.log('draw');
   }
};

// if an object has "behavior" it shouldn't be an object literal. Then you need a Factory or Constructor function

// factory function
function createCircle(radius){
  return {
    radius,
    draw: function() {
     console.log('draw');
   }
  }
}
const newCircle = createCircle(1)

// constructor function then it needs an upper case 
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw")
  }
}

const anotherCircle = new Circle(1);

circle.location = {x:1}
circle['alsolocation'] = {y:1}

//this is where bracket notation is helpful
const propertyName = 'location';
circle[propertyName]
//OR if you have special characters

delete circle.location;

//here is how we can enumerate all of the members in an object
for (let key in circle){
  console.log(key, circle[key])
}

//this will only return properties, not functions
for (let key in circle){
  if (typeof circle[key] !== 'function'){
    console.log(key, circle[key])
  }
}

//also to get all of the keys
let keys = Object.keys(circle)
console.log(keys)

// to check for the existance of a property in an object
if('radius' in circle){
  console.log('Circle has a radius.')
}


// THIS IS INTERESTING! objects point to a place in memory. that is what makes it a reference type rather than a primite type!!! 

let a = 10
let b = a
a = 20
// b = 10


let x = {value: 10}
let y = x
x.value = 20
// y = {value: 20}


// SIMILARLY this would work:
let obj = {value: 10}
function increase(obj){
  obj.value++
}

increase(obj)
// console.log(obj)

//But this would not: 
let num = 10
function increase(num){
  num.value++
}

increase(num)
// console.log(num)
