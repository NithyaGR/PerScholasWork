//Exercise1 To remove Bonner from Hall of Famers and assigning to notHof to print.

var hof = ["Jordan", "Bird", "Kobe", "Duncan", "Iverson", "Bonner"];

var notHof = hof.pop();// return the last element which is removed and change the array after removal
console.log(notHof);
console.log(hof); // the array is changed after removal

// Exercise 2 - To remove the two items named McLinguine and from the testMenu
console.log("******************");
var testMenu = [
"McPizza Burger",
"McFly Burger",
"McLinguine",
"McChar-Siu Bau",
"McChop-Chae",
"McPancit"
];

console.log(testMenu.splice(2,2)); //the first parameter is the  starting index of the element to be removed,
//the second one is the number of elements to be removed from the first paremeter.
console.log(testMenu); // the array is changd after removal
//console.log((testMenu.slice(2,4)));

//Exercise3 To concat the 2 arrays to get the result as an array.
console.log("***********************");
var westSide = ["Dre", "2Pac", "Snoop"];
var eastSide = ["Biggie", "Diddy", "Craig Mack"];
var oneLove = westSide.concat(eastSide);
console.log(oneLove);

// Exercise 4  -To remove the elements from the array and to return their values in array
console.log("************************");
var fbFriends = [
"Khalid",
"Yeezy",
"Kimmy K",
"Lamar Odom",
"Lebron",
"Warren Buffet"];
//console.log(fbFriends.splice());
var unFriends = fbFriends.slice(1,4);//First parameter is the starting index of the element to be
//removed and the second one is to mention until what index the elements to be deleted, excludimg this index
//slice will keep the original array as it is  unlike splice.
console.log(unFriends);
//console.log(fbFriends);

// Exercise 5 - To print the given  Map
console.log("**********************");
let user1 = {

first_name: "Nithya",
last_name: "GR",
company: "Per Scholas",
department: "IT",
};

console.log(user1);
