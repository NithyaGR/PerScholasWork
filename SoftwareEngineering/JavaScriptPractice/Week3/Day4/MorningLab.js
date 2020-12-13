//Create a class called Fish
//Define a method Swim( )
//Create a class Nemo that inherits from Fish
//Define an attribute color
//Create a Nemo object. Can it swim?

class Fish{
  constructor(){
    console.log("I'm a fish");
  }
    swim(){
        console.log("I can swim");
    }
}
class Nemo extends Fish{
  constructor(color){
    super();//if same costructor, no super() key here.
    console.log("I'm Nemo");
    this.color = color;
  }
}
var nemo = new Nemo('orange');
nemo.swim();

// The difference between abstract class and interface
// Abstract classes are classes which can have abstract methods. Abstract methds are methods with declaration
// only, not the method definition. That means it has no code inside. The class which is going to
// inherit this abstract class should define (implement/ write the codes) this method in it.

// Interfaces cannot have any methods - 100% abstraction-
// Interfaces are templates or blue prints for the classes which are going to implement this interface.
// This provides the general information of what a class should have in high level.
// Say for example, if we design an interface for PErscholas courses. Course interface should tell what are
// all the classes (other courses) should have in general.
// An instructor, a syllabus, some students, course materials etc.
// This is what exactly each courses will have, and they should define thoses methods and should have
// those attributes. Some may need extra attributes or methods, which they can
// define later on their own according to the needs.

//Which of the two can have implementation of a method in the class?
// Abstract class can have non abstract methods as well. That means this can have method implementation
// of non-abstract methods. Whereas interfaces provide just a blue print or template, no implementation
