const fb = [];
// ADD CODE HERE
for(var i=1;i<17;i++){
  if (i==0){
    fb[i]= i+1;
  }
  if(i%15 == 0){
    fb[i-1]="fizzbuzz";
  }
 else if(i%3 == 0){
    fb[i-1]="fizz";
  }
 else if(i%5 == 0){
    fb[i-1]= "buzz";
  }
  else{
    fb[i-1]=i;
  }
}

console.log(fb);
console.log(fb.length);


// should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]


// should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]
