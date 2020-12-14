
var shoppingList = [

  "cool ranch doritos",

  "kings hawaiian sweet bread",

  "peanut butter oreos",

  "fruit loops cereal"

];
shoppingList.push("Hendricks gin");
console.log(shoppingList);

// Reverse Array

var yoda = ["try", "no", "is", "there", "not", "do", "or", "do"];
 yoda = yoda.reverse();
console.log(yoda);


var waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];
//var waitListPrint =[];
var len = waitList.length;
var NowServing = "";
for(let i=0;i<len; i++){
  NowServing = waitList.shift();
  console.log("We are serving now : "+NowServing);
  //waitListPrint = waitList.splice(0);
  console.log("People in the line are: "+waitList);

}

var shoe = ["just", "do", "it"];
console.log(shoe.toString());
console.log(shoe.join(' '));
