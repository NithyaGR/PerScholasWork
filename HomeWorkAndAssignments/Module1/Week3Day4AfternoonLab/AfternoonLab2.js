// Create a class name User
// This class with have firstName, lastName, department attributes
// a method name changeDepartment()
// Create three instances of this class
// Change department for two of the instances
// Create three objects for this class

class User{
  constructor(firstName, lastName, department){
    this.firstName = firstName;
    this.lastName = lastName;
    this.department = department;
  }

  changeDepartment(department){
    this.department = department;
  }
}
var user1 = new User("Peter","Parker","Marvel");
var user2 = new User("Ant","Man","Marvel");
var user3 = new User("Captain", "America", "Avengers");
console.log(user1);
user1.changeDepartment("Avengers");
console.log(user1);
