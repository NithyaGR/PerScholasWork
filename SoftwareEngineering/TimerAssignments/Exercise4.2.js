window.addEventListener('DOMContentLoaded', documentLoaded);

var startTime; // to calculate the time duration, we need start time.
var timeLimit; //the time we get from the text box - user's value.
var temp; //To set the clearInterval
var currentTime, elapsedTime, minutes, seconds;
var minutesFormatted, secondsFormatted, formattedTime;

function documentLoaded() {
  console.log("page document loaded");
  startTimer(); //to start the startTimer
  document.getElementsByClassName("container")[0].addEventListener("click", enterTime);
  //document.getElementsByClassName("editable-in-place")[0].addEventListener("click", clicked);
  //document.getElementById("textBox").addEventListener("keydown", startTimer, false);
  //startTimer(); //to start the startTimer
}


//This function will get the time interval entered from the text box and will
// calculate the start time and the time elapsed
function startTimer(){
  startTime = new Date().getTime();// instead we can do thisDate = new Date();thisDate.getTime();
  temp = setInterval(updateTime, 1000); //Learn about this
  }

function updateTime(){
  console.log("inside updateTime");
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
  formattedTime = minutesFormatted+":"+secondsFormatted;
   document.getElementById("clock").innerHTML = formattedTime;
   console.log("minutes value : "+minutes);
   console.log("time Limit is "+timeLimit);
   // if (minutes >= timeLimit) {
   //   document.getElementById("clock").className = "timeIsUp";
   //   console.log("Time is Up");
   // } else {
   //   document.getElementById("clock").className = "timer";
   //   console.log("It's Ticking");
   // }
}

function enterTime(){
  clearInterval(temp);//Stop the startTimer
  console.log("inside enterTime");
  document.getElementById("textBox").style.visibility = "visible";
  console.log("visibility changed to visible");
  timeLimit = document.getElementById("textBox").value;
  console.log("User entered time limit is : "+timeLimit);
  textBox.addEventListener("keydown", function keydown(evt) {

    // 13 is the code for ENTER
    if (evt.keyCode === 13) {
      timeLimit = document.getElementById("textBox").innerHTML;
      console.log(timeLimit);
      document.getElementById("textBox").style.visibility = "hidden";
      console.log("visibility changed to hidden");
      startTimer();

      // its important to remove the keydown listener, otherwise in a subsequent edit
      // we will end up with several keydown listeners running
      textBox.removeEventListener("keydown", keydown);
    }
  });
}
