// creating pet class

class Pet {
    constructor (owner, name){
    this.owner = owner;
    this.name = name;
    }
    walk() {
       console.log("walka walka");
  }
}
const pet = new Pet("Zoey");
pet.walk();

class Dog extends Pet {
    constructor(owner, name, price) {
      super(owner, name);
      this.price = price;
    }
    bark(){
      console.log(this.name+ " says Bow Wow");
    }
    chaseTail(){
      console.log("oh boy oh boy oh boy");
    }
    getPrice(){
      return this.price;
    }

}
const dog1 = new Dog("Parker","Alfey",2000);
dog1.bark();
dog1.chaseTail();
console.log(dog1.getPrice());
dog1.walk();
dog1.price = 2500;//udating the price
console.log(dog1.getPrice());//getting the updated price

class Cat extends Pet {
  constructor(owner, name, price){
      super(owner, name);
      this.price = price;

  }
  purr(){
    console.log(this.name+" says purrrr");
  }
  clean(){
    console.log(this.name+" cleaning");
  }
  getPrice(){
    return this.price;
  }
  walk(){
    console.log("strut strut");
  }
}
const cat1 = new Cat("Peter","sofi",1000);
cat1.purr();
cat1.clean();
console.log(cat1.getPrice());
cat1.walk();
cat1.name = "sophie";
console.log(cat1.name);//printing after updating the name
