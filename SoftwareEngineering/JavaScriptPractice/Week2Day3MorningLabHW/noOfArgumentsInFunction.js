/*
 * This is to find a number of arguments of a function
 */

 function findArgumentCount(arg1, arg2, arg3, arg4){

   return arguments.length;
 }

 //calling from main

 console.log(findArgumentCount("FirstName", "LastName", "Age", "Email", "Gender"));
