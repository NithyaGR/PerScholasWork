// This class is to define a class called Circle with
// attribute radius and sides.

class Circle{

  constructor(radius, sides){
    this.radius = radius;
    this.sides = 0;
  }
//This is  a function called circle_area that returns the area of the object.
  circle_area(){
    return Math.PI * this.radius * this.radius;
  }
// This is a function total_sides that returns the number of sides of the object.
  total_sides(){
    return this.sides ;
  }

}
var circle1 = new Circle(5);
console.log("Area of circle 1 is : "+circle1.circle_area());
console.log("Sides of circle1 is : "+circle1.total_sides());

var circle2 = new Circle(15);
console.log("Area of circle 2 is : "+circle2.circle_area());
console.log("Sides of circle 2 is : "+circle2.total_sides());
//**********************************************

//This is class Rectangle with attributes length and width

class Rectangle {

  constructor(length, width){
    this.length = length;
    this.width = width;
    this.sides = 4;

  }
//This is  a function rectangle_area that returns the area .
  rectangle_area(){
    return this.length * this.width;
  }
//This is a function total_sides that returns the number of sides of the object.
  total_sides(){
    return this.sides ;
  }

}
console.log("********************************************************************");
var rectangle1 = new Rectangle(5,4);
console.log("Area of the rectangel1 is : "+rectangle1.rectangle_area());
console.log("Total sides of the rectangle1 is : "+rectangle1.total_sides());
var rectangle2 = new Rectangle(6,7);
console.log("Area of the rectangel2 is : "+rectangle2.rectangle_area());
console.log("Total sides of the rectangle2 is : "+rectangle2.total_sides());

// This is class called Square with length attribute.
class Square{

  constructor(length){
    this.length = length;
    this.sides = 4;
  }
  // This is function square_area that returns the area of the square object.
  square_area(){
    return this.length * this.length;
  }
//This is a function total_sides that returns the number of sides of the object.
  total_sides(){
    return this.sides ;
  }
}
console.log("********************************************************************");
var square1 = new Square(5);
console.log("Area of the square1 is : "+square1.square_area());
console.log("Total sides of the square1 is : "+square1.total_sides());
var square2 = new Square(6);
console.log("Area of the square2 is : "+square2.square_area());
console.log("Total sides of the square2 is : "+square2.total_sides());
