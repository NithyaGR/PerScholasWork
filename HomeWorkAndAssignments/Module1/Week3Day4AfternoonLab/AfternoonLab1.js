
// Create an Animal class.
// The class will have name, age, color, legs, superPower attributes
// Create two objects of this class - both with a unique superPower
// create three methods for this class - include one method named userSuperPower()
// Create two objects for this class


class Animal{
constructor(name, age, color, legs, superPower){

  this.name = name;
  this.age = age;
  this.color = color;
  this.legs = legs;
  this.superPower = superPower;
}
userSuperPower(){
  console.log(this.superPower);

}
speak(sound){
  console.log("I say "+sound);
}
run(){
  console.log("I walk and run");
}


}
var cow = new Animal("Lux", 5, "Brown",4,"Gives Milk to Humans");
var elephant = new Animal("Gaj", 10, "Black", 4, "It can lift logs");
cow.userSuperPower();
cow.speak("Moo");
cow.run();
elephant.userSuperPower();
elephant.speak("woooo!");
elephant.run();
