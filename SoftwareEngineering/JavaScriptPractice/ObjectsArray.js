const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};

const objToArray = [];
// ADD CODE HERE

  //console.log(Object.values(checkObj));
  for(let x in checkObj){
  if(checkObj[x] >= 2){
    objToArray.push(checkObj[x]);
  }
}
console.log(objToArray);

const checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};

let divBy6 = false;
// ADD CODE HERE

const objToArray = Object.values(checkObj);
console.log(objToArray);
for(let x in objToArray){

  if(objToArray[x]%6== 0){
    divBy6 = true
  }
}
console.log(divBy6);
// ******************************
const nestedArr = [];
// ADD CODE HERE
for(let i=0;i<5;i++){
  nestedArr[i] = ['loop'+i, i];
}
const subArr2 = [];
for(let i=0;i<5;i++){
  subArr2[i] = [];
  for (let j=0;j<5;j++){
    subArr2[i][j] = j == 0 ?'loop' + i : i;
  }
console.log(nestedArr, subArr2);
}
const possibleIterable = [4, 3, 9, 6, 23];
const divByThree = {};
// ADD CODE HERE
let arr =[];
for(let i=0;i<5;i++){
  if(possibleIterable[i]%3==0){
    divByThree[possibleIterable[i]] = i;
  }
}
console.log(divByThree);
//*************************
const sumMe = {
  hello: 'there',
  you: 8,
  are: 7,
  almost: '10',
  done: '!'
};
let total = 0;
// ADD CODE HERE
for( let x in sumMe){
  if(typeof(sumMe[x])== 'number'){
    total = total+sumMe[x];

  }
  console.log(total);
