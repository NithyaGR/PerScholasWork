/* This program is to wish based on the givien time in the 24 hrs format ex :0550 */

// declaring the variable time and assigning the value

var time = 1700;
//var time1 = time.substring(0,2);

if (time>=0500 && time<=1159){
  console.log("Good Morning");
}
else if(time>=1200 && time<=1600){
  console.log("Good Afternoon");
}
else {
  console.log("Hi There!");
}
