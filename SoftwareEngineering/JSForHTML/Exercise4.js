window.addEventListener('DOMContentLoaded', documentLoaded);

function documentLoaded() {
  document.getElementsByClassName("container")[0].addEventListener("click", clicked);
}
var startTime; // to calculate the time duration, we need start time.
var timeLimit; //the time we get from the text box - user's value.
var temp; //To set the clearInterval
//This function will get the time interval interval entered from the text box and will
// calculate the start time and the time elapsed
function startTimer(){
  var timeLimit = parseInt(document.getElementById("timeText").value);
  startTime = new Date().getTime();// instead we can do thisDate = new Date();thisDate.getTime();
  var today = new Date();
  //startTime = today.toLocaleTimeString();
  console.log(timeLimit);
  //document.getElementById("clock").innerHTML = startTime;
  //clearInterval(temp); // this will stop the timer - I guess
  temp = setInterval(updateTime, 1000); //Learn about this
  }

function updateTime(){
  console.log("inside updateTime");
  var currentTime = new Date().getTime();
  var elapsedTime = (currentTime - startTime)/1000; // to convert into milli seconds to seconds

  //to convert the elapsed time to minutes and into seconds format
  var minutes = Math.floor(elapsedTime / 60);
  var seconds = Math.floor(elapsedTime % 60);
  //Formatting the time for single digit minutes and seconds adding 0 before

  if(minutes < 10 ){
    minutes = "0" + minutes;
  }
  if (seconds < 10){
    seconds = "0" + seconds;
  }
  //displaying the elapsed time
  var formattedTime = minutes+":"+seconds;
   document.getElementById("clock").innerHTML = formattedTime;
}

function clicked(evt) {
  // get the <input> and check if it is hidden
  var input = this.querySelector("input");
  var label = this.querySelector("div");

  if (evt.target === input) {
    // if user clicked on <input> do nothing, he is editing

  } else if (evt.target === label) {
    // <input> was hidden, make it visible
    input.classList.remove("hide");

    // and hide the label
    label.classList.add("hide");

    // fill the <input> with the text from the label
    input.value = label.innerHTML;

    // adicionar o listener para detectar o fim da edicao com "ENTER"
    input.addEventListener("keydown", function keydown(evt) {

      // 13 is the code for ENTER
      if (evt.keyCode === 13) {
        label.innerHTML = input.value;
        console.log(label.innerHTML);
        label.classList.remove("hide");
        input.classList.add("hide");
        startTimer();

        // its important to remove the keydown listener, otherwise in a subsequent edit
        // we will end up with several keydown listeners running
        input.removeEventListener("keydown", keydown);
      }

    });
    input.focus();
  } else {
    // <input> was visible, hide it without modifying the value
    input.classList.add("hide");

    // show the label
    label.classList.remove("hide");
  }

}

















//
// // when the document is loaded, trigger the "documentLoaded" function
// window.addEventListener('DOMContentLoaded', documentLoaded, false);
//
// // declaring variables globally
// var startTime; // to calculate the time duration, we need start time.
// var timeLimit; //the time we get from the text box - user's value.
// var temp; //To set the clearInterval
//   var totalSeconds=0;
// function documentLoaded() {
//      //"use strict";
//   console.log("Document loaded");
//   // //var seconds = 0;
//   // var today = new Date();
//   // var time = today.getTime();
//   // var time1 = today.toLocaleTimeString();
//   // console.log(time);
//   // console.log(time1);
//   // setInterval(function(){
//   //   clock.innerHTML = totalSeconds++;
//   // }, 1000);
//
// }
// function displayTimer(){
//   console.log("Inside displayTimer()");
//   // totalSeconds++;
//   // var hour = Math.floor(totalSeconds /3600);
//   // //var minute = Math.floor((totalSeconds - hour*3600)/60);
//   //   var minute = Math.floor(totalSeconds/60);
//   // var seconds = totalSeconds -(minute*60);
//   // // if(hour < 10)
//   // //     hour = "0"+hour;
//   // if(minute < 10)
//   //     minute = "0"+minute;
//   // if(seconds < 10)
//   //     seconds = "0"+seconds;
//   // console.log(minute);
//   // console.log(seconds);
//   // document.getElementById("clock").innerHTML = minute + ":" + seconds;
//   // console.log(totalSeconds);
//   document.getElementById("clock").innerHTML = totalSeconds++;
//
//   }
//
//
//
//
// //This function will get the time interval interval entered from the text box and will
// // calculate the start time and the time elapsed
// function startTimer(){
//   var timeLimit = parseInt(document.getElementById("timeText").value);
//   startTime = new Date().getTime();// instead we can do thisDate = new Date();thisDate.getTime();
//   var today = new Date();
//   //startTime = today.toLocaleTimeString();
//   console.log(timeLimit);
//   //document.getElementById("clock").innerHTML = startTime;
//   //clearInterval(temp); // this will stop the timer - I guess
//   temp = setInterval(updateTime, 1000); //Learn about this
//   }
//
// function updateTime(){
//
//   var currentTime = new Date().getTime();
//   var elapsedTime = (currentTime - startTime)/1000; // to convert into milli seconds to seconds
//
//   //to convert the elapsed time to minutes and into seconds format
//   var minutes = Math.floor(elapsedTime / 60);
//   var seconds = Math.floor(elapsedTime % 60);
//   //Formatting the time for single digit minutes and seconds adding 0 before
//
//   if(minutes < 10 ){
//     minutes = "0" + minutes;
//   }
//   if (seconds < 10){
//     seconds = "0" + seconds;
//   }
//   //displaying the elapsed time
//   var formattedTime = minutes+":"+seconds;
//    document.getElementById("clock").innerHTML = formattedTime;
// }
//
// function displayTextBox(){
//
//   console.log("clicked");
//   document.getElementById("timeText").style.display = "block";
//   //document.getElementById("clock").display = "none";
// }
