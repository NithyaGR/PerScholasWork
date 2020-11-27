/* This program is to print the grade when marks are given*/

//Declare and initialize the variable marks
var marks = 1000;

if(marks>=90 && marks<=100){
  console.log("Grade A");
}
else if (marks>=80 && marks<90) {

  console.log("Grade B");

} else if (marks>=70 && marks<80 ){
  console.log("Grade C");
}
else if (marks>=55 && marks<70 ){
  console.log("Grade D");
}
else if (marks>0 && marks<55){
  console.log("Grade F");
}
else {
  console.log("Please provide valid marks");
}
