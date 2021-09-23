
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

// if an object has "behavior" it shouldn't be an object literal. Then you need a factor or constructor function

// factory function
function createCircle(radius){
  return {
    radius,
    draw: function() {
     console.log('draw');
   }
  }
}