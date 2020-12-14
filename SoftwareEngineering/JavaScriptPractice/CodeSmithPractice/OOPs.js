// Create a function that accepts two inputs (name and age) and returns an object. Let's call this function makePerson. This function will:
// Create an empty object
// Add a name property to the newly created object with its value being the name argument passed into the function
// Add an age property to the newly created object with its value being the "age" argument passed into the function
// Return the object

function makePerson(name, age) {
	// add code here
  return {
    name: name,
    age: age
   };
}

const vicky = makePerson('Vicky', 24);


// Uncomment these lines to check your work!
console.log(vicky.name); // -> Logs 'Vicky'
 console.log(vicky.age); // -> Logs 24

 //****************************************************************************

 // Inside personStore object, create a property greet where the value is a function that logs "hello".

 const personStore = {
	// add code here
    greet: function() {
      console.log('hello');
    }

}
// Uncomment this line to check your work!
personStore.greet(); // -> Logs 'hello'

//****************************************************************************


const personStore = {

  greet: function() {
    console.log('hello');
  }
}

function personFromPersonStore(name, age) {
	// add code here
  const person = Object.create(personStore);
  person.name= name;
  person.age = age;
  return person;

}

const sandra = personFromPersonStore('Sandra', 26);

// Uncomment these lines to check your work!
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); // -> Logs 26
sandra.greet(); // -> Logs 'hello'

//*****************************************************************************

// Without editing the code you've already written, add an introduce method to the personStore object that logs "Hi, my name is [name]".

const personStore = {
  greet: function() {
    console.log('hello');
  }
}

function personFromPersonStore(name, age) {
	const person = Object.create(personStore);
  person.name = name;
  person.age = age;
  person.greet = personStore.greet;
  return person;
}
pesonStore.introduce = function () {
    console.log(`Hi, my name is ${this.name}`);
  };

const sandra = personFromPersonStore('Sandra', 26);

// add code here


// Uncomment this line to check your work!
 sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

 //*****************************************************************************
 // Create a function PersonConstructor that uses the this keyword to save a single property onto its scope called greet. greet should be a function that logs the string "hello".

 function PersonConstructor() {
	// add code here
  this.greet = function() {
    console.log('hello');
  }

}

const simon = new PersonConstructor();

// Uncomment this line to check your work!
simon.greet(); // -> Logs 'hello'

//*******************************************************************************

// Create a function personFromConstructor that takes as input a name and an age. When called, the function will create person objects using the new keyword instead of the Object.create method.
function PersonConstructor() {
  this.greet = function() {
    console.log('hello');
  }
}

function personFromConstructor(name, age) {
	// add code here
  const person = new PersonConstructor();
  person.name = name;
  person.age = age;
  return person;
}

const mike = personFromConstructor('Mike', 30);

// Uncomment these lines to check your work!
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); // -> Logs 30
mike.greet(); // -> Logs 'hello'

//******************************************************************************

// Without editing the code you've already written, add an introduce method to the PersonConstructor function that logs "Hi, my name is [name]".

//
function PersonConstructor() {
  this.greet = function() {
    console.log('hello');
  }
  this.introduce = function() {
  console.log(`Hi, my name is ${this.name}`);
}

}

function personFromConstructor(name, age) {
  const person = new PersonConstructor();
  person.name = name;
  person.age = age;
  return person;
}

const mike = personFromConstructor('Mike', 30);

// add code here
// Uncomment this line to check your work!
mike.introduce(); // -> Logs 'Hi, my name is Mike'

//*******************************************************************************

// Create a class PersonClass. PersonClass should have a constructor that is passed an input of name and saves it to a property by the same name. PersonClass should also have a method called greet that logs the string "hello".

class PersonClass {
	constructor(name) {
    // add code here
    this.name = name;
	}
	// add code here
  greet = function(){
    console.log('hello');
  }

}

const george = new PersonClass('George');

// Uncomment this line to check your work!
george.greet(); // -> Logs 'hello'


//******************************************************************************
//Create a class DeveloperClass that creates objects by extending the PersonClass class. In addition to having a name property and greet method, DeveloperClass should have an introduce method. When called, introduce should log the string "Hello World, my name is [name]".

class PersonClass {
	constructor(name) {
    this.name = name;
	}

	greet() {
    console.log('hello');
  }
}

// add code here
class DeveloperClass extends PersonClass {
   introduce = function(){
     console.log(`Hello World, my name is ${this.name}`);
   }

}
const thai = new DeveloperClass('Thai', 32);

// Uncomment these lines to check your work!
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); // -> Logs 'Hello World, my name is Thai'
