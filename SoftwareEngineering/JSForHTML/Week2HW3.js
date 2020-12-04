/*
 * This function calls changes the color
 */

 var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
 function changeColor(){
   for (i=0;i<colors.length; i++){
     document.getElementsByClassName("circle").style.color=colors[i];
   }
 }
