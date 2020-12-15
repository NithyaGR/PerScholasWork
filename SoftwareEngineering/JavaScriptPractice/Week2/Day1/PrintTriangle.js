//printing triagles using #

for(let i=0;i<7;i++){
  for(let j=0;j<=i;j++){
    process.stdout.write('#');
   }
    console.log();
}
//Another way to print the triangles
var hash = ''; 
for(let i = 0; i < 7; i++){ 
  hash += '#' ;
    console.log(hash); 
  }

//To Print the reverse triangle
for (let l=0;l<7;l++){

  for(let m=7; m>l;m--){
      process.stdout.write('#');
  }
  console.log();

}
