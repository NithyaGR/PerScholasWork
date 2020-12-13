
class Person {

  constructor(first_name, last_name, state){
    console.log("Hi");
    this.first_name = first_name;
    this.last_name = last_name;
    this.state = state;

  }
  greet(otherPerson){
    console.log(`Hi ${otherPerson}`);
    console.log("Hi "+otherPerson);
  }
  getFullName(){
    console.log(`My full name is ${this.first_name} ${this.last_name}`);
  }


}
const me = new Person("Nithya","GR", "New Jersey");
console.log(me);
console.log(Person);
console.log(typeof me);
console.log(typeof Person);
me.greet("Team");
const anotherPerson = new Person("Kumar","SV","NJ");
me.getFullName();
anotherPerson.getFullName();
