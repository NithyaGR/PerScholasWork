/*
 * To check the scope of variables
 */

 function scope(){
   var x=10;
   let y=20;
   if(true){
     x=100;
     let y=200;
     console.log("x is insdie if "+x);
     console.log(("y is inside if "+y));
   }
   console.log("x is outsdie if "+x);
   console.log("y is outside if "+y);
 }
 scope();
