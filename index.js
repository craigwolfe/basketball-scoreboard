// JavaScript Document

let updateHomeScore = document.getElementById("homeScore");
let updateGuestScore = document.getElementById("guestScore");
let updateGuestFouls = document.getElementById("guestFouls");
let updateHomeFouls = document.getElementById("homeFouls");
let updatePeriod = document.getElementById("changePeriod");
let updateTimerClock = document.getElementById("clockTimer");
let startStopBtn = document.getElementById("startStop-btn");

let guestScore = 0;
let homeScore = 0;
let guestFouls = 0;
let homeFouls = 0;
let period = 0;
let minutes = 12; //minutes variable starts at 12 mins
let seconds = 0;
let timerInterval;
let isTimerRunning = false;

//if second reach -1, reset to 59 and decrease minutes
function updateTimer() {
  seconds--;
  if (seconds === -1) {
    seconds = 59;
    minutes--;
  }
  if (minutes === 0 && seconds === 0) {
    clearInterval(timerInterval);
    alert("Period is over!");
  }
  //format the time string "12:00" for 12 minutes and zero seconds
  let timeString = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

  //update html element with timer
  updateTimerClock.textContent = timeString;
}
function startTimer() {
  //start timer if its not already running
  if (!isTimerRunning) {
    timerInterval = setInterval(updateTimer, 1000);
    isTimerRunning = true;
  }
}
function stopTimer() {
  clearInterval(timerInterval);
  isTimerRunning = false;
}
function toggleTimer() {
  if (isTimerRunning) {
    stopTimer();
    startStopBtn.textContent = "Start Timer";
  } else {
    startTimer();
    startStopBtn.textContent = "Stop Timer";
  }
}
startTimer();

function homeadd1() {
  homeScore += 1;
  updateHomeScore.textContent = homeScore;
}
function homeadd2() {
  homeScore += 2;
  updateHomeScore.textContent = homeScore;
}
function homeadd3() {
  homeScore += 3;
  updateHomeScore.textContent = homeScore;
}

function guestadd1() {
  guestScore += 1;
  updateGuestScore.textContent = guestScore;
}
function guestadd2() {
  guestScore += 2;
  updateGuestScore.textContent = guestScore;
}
function guestadd3() {
  guestScore += 3;
  updateGuestScore.textContent = guestScore;
}

function guestFl() {
  if (guestFouls < 5) {
    guestFouls += 1;
    updateGuestFouls.textContent = guestFouls;
  }
}
function homeFl() {
  if (homeFouls < 5) {
    homeFouls += 1;
    updateHomeFouls.textContent = homeFouls;
  }
}
function Period() {
  if (period < 4) {
    period += 1;
    updatePeriod.textContent = period;
  }
}

function resetGame() {
  guestScore = 0;
  homeScore = 0;
  guestFouls = 0;
  homeFouls = 0;
  period = 0;
  minutes = 12;
  seconds = 0;
  //stop time if time is running
  clearInterval(timerInterval);
  timerInterval = null;
  //update html elements on scores, fouls, period and timer
  updateGuestScore.textContent = guestScore;
  updateHomeScore.textContent = homeScore;
  updateHomeFouls.textContent = homeFouls;
  updateGuestFouls.textContent = guestFouls;
  updatePeriod.textContent = period;
  updateTimerClock.textContent = "12:00";
}
