
// when the document is loaded, trigger the "documentLoaded" function

// declaring variables globally
var startTime; // to calculate the time duration, we need start time.
var timeLimit; //the time we get from the text box - user's value.
var temp; //To set the clearInterval
var currentTime;
var elapsedTime;
var minutes;
var seconds;
var minutesFormatted, secondsFormatted, formattedTime;

//This function will get the time interval interval entered from the text box and will
// calculate the start time and the time elapsed
function startTimer(){
  timeLimit = parseInt(document.getElementById("timeText").value);
  startTime = new Date().getTime();// instead we can do thisDate = new Date();thisDate.getTime();
  //var today = new Date();
  //startTime = today.toLocaleTimeString();
  console.log(timeLimit);
  //document.getElementById("clock").innerHTML = startTime;
  //clearInterval(temp); // this will stop the timer - I guess
  temp = setInterval(updateTime, 1000); //Learn about this
  }

function updateTime(){

   currentTime = new Date().getTime();
   elapsedTime = (currentTime - startTime)/1000; // to convert into milli seconds to seconds

  //to convert the elapsed time to minutes and into seconds format
   minutes = Math.floor(elapsedTime / 60);
   seconds = Math.floor(elapsedTime % 60);
  //Formatting the time for single digit minutes and seconds adding 0 before

  if(minutes < 10 ){
    minutesFormatted = "0" + minutes;
  } else {minutesFormatted = minutes;}
  if (seconds < 10){
    secondsFormatted = "0" + seconds;
  } else { secondsFormatted = seconds; }
  //displaying the elapsed time
  var formattedTime = minutesFormatted+":"+secondsFormatted;
   document.getElementById("clock").innerHTML = formattedTime;
   // check if we are above the time limit and set the color of the timer accordingly
   console.log(minutes);
   console.log(timeLimit);
  if (minutes >= timeLimit) {
    document.getElementById("clock").className = "timeIsUp";
    console.log("Time is Up");
  } else {
    document.getElementById("clock").className = "timer";
    //console.log("It's Ticking");
  }
}
