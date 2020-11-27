/*//To print odd nos using for loop
console.log("Printing odd nos");
for (let i=1;i<=10;i++){

  console.log(i++);
}
//Printing even nos
console.log("Printing even nos");
for (let j=1;j<=10; j++){
  console.log(++j);
}
printing the result on the same line
var odd ="";
for(let i=1;i<=9; i++){
  odd+=i++;
  odd+= ',';
}
process.stdout.write(odd.substring(0,9));*/
//printing odd numbers less than 10
var array = [];
    for(var i = 1; i <= 10; i++)
    {
       array.push(i++);
    }
    console.log("Printing odd numbers");
    console.log(array.join(','));
//printing even numbers less than 10
var array1 = [];
for(var j=1;j<=10; j++){
  array1.push(++j);
}
console.log("Prining even numbers");
console.log(array1.join(','));

// In single for loop, printing all odd, even or prime nos
for(let i=1;i<=10;i++){

  if (i%2==0){
    console.log(i +" :even");
  }
}

var isPrime;
console.log("1 is odd");
for (var i=2;i<=20; i++){
  if (i%2==1){
    var temp = Math.floor(Math.sqrt(i));
    for(var l=2; l<=temp; l++){
        if(i%l !== 0){
          isPrime=true;
        }
      else {isPrime=false;}
    }
    if(isPrime){console.log(i+ " is prime");}
    else {
      console.log(i+ " is odd");
    }
  }
  if(i%2==0){
    console.log(i+" is even");
  }
}
/*var i = 0;
while (i < 20) {
  if (i == 0 || i == 1) { /* remember 0 and 1 are not prime
    i++;
    continue;
  } else if (i == 2 || i == 3) /* remember 2 and 3 are prime
    console.log(i + " is a prime number");
  else if (i % 2 != 0) /* checking if it's not even{
    if (i % 3 != 0) /*checking if it's not odd
      console.log(i + " is a prime number");
  }
  i++;
} */
