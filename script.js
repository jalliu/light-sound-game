// global Variables
var pattern;
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.2;
var guessCounter = 0;
var chances = 3;

var clueHoldTime = 1000;
var cluePauseTime = 300;
var nextClueWaitTime = 1000;

// start-stop functionality
function startGame() {
  //initialize game variables
  pattern = Array.from({ length: 6 }, () => Math.floor(Math.random() * 7));
  progress = 0;
  chances = 3;
  clueHoldTime = 1000;
  cluePauseTime = 300;
  nextClueWaitTime = 1000;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("hidden-msg1").classList.add("hidden");
  document.getElementById("hidden-msg2").classList.add("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("heart1").classList.remove("hidden");
  document.getElementById("heart2").classList.remove("hidden");
  document.getElementById("heart3").classList.remove("hidden");
}

// button-clue functionality
function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function playWinSequence() {
  var win_pattern = [1, 3, 6, 5, 4, 2, 1, 2, 3, 4, 5, 6, 6, 5, 4, 3, 2, 1];
  let delay = 100;
  for (let i = 0; i < 18; i++) {
    setTimeout(lightButton, delay, win_pattern[i]);
    delay += 100;
    setTimeout(clearButton, delay, win_pattern[i]);
  }
}

//guessing functionality
function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  // if guess was incorrect, auto lose game, else
  // proceed to next clue, turn or win
  if (btn != pattern[guessCounter]) {
    if (chances == 1) {
      document.getElementById("heart" + chances).classList.add("hidden");
      loseGame();
    } else {
      document.getElementById("heart" + chances).classList.add("hidden");
      chances--;
      playClueSequence();
    }
  } else {
    if (guessCounter != progress) {
      // curr turn is not over, proceed to next guess
      guessCounter++;
    } else if (progress != pattern.length - 1) {
      //game is not over, proceed to next clue sequence
      progress++;
      clueHoldTime *= 0.7;
      cluePauseTime *= 0.7;
      nextClueWaitTime = clueHoldTime;
      playClueSequence();
    } else {
      //game is over, you win
      winGame();
    }
  }
}

// win-lose functionality
function winGame() {
  playWinSequence();
  document.getElementById("hidden-msg1").classList.remove("hidden");
  setTimeout(stopGame(), 10000);
}

function loseGame() {
  document.getElementById("hidden-msg2").classList.remove("hidden");
  setTimeout(stopGame(), 10000);
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 520,
  6: 580,
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0)