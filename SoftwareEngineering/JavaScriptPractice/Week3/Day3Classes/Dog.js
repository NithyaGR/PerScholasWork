class Dog{
  // let name;
  // let age;
  // let color;
  // let breed;
  constructor(name, age, color, breed){

    this.age = 6;
    this.name = name;
    this.color = color;
    this.breed = breed;
    console.log(`My name is ${name}`);
    console.log(`I'm  ${this.age} months old`);
    console.log(`My color is ${color}`);
    console.log(`I'm a ${breed}`);
    //running(); not defined
  }
  running(){
    console.log(this.name+" is running");
  }
  eating(){
    console.log(this.name+" is eating");
  }
  barking(){
    console.log(this.name+" is barking");
  }

}
const dog1 = new Dog("Zoye",5,"white","Golden Retriever");
dog1.running();
dog1.eating();
dog1.barking();
const dog2 = new Dog("Little Lady",10,"Brown","Pomapoo");
const dog3 = new Dog("Alfi", 7, "Grey");//not throwing error for missed aruguments instead its printing undefined
