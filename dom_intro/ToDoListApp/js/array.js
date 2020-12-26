var toDoArr = [12,24,56];
var doneArr = [];
var tempArr = [];


var tempArr = toDoArr.splice(1,1);

console.log("tempArray is "+tempArr);
console.log("tempArray length "+tempArr.length);
doneArr.push(tempArr[0]);
console.log("done Array is "+doneArr);
console.log("done Array length is "+doneArr.length);
