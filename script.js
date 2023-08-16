let startTime = 0;
let running = 0;
let lapCounter = 0;

function startStop() {
  if (running === 0) {
    running = 1;
    increment();
    document.getElementById("startStop").textContent = "Stop";
  } else {
    running = 0;
    document.getElementById("startStop").textContent = "Start";
  }
}

function reset() {
  running = 0;
  document.getElementById("startStop").textContent = "Start";
  document.getElementById("display").textContent = "00:00:00";
  lapCounter = 0;
  document.getElementById("laps").innerHTML = "";
}

function recordLap() {
  if (running === 1) {
    lapCounter++;
    let lapTime = document.createElement("div");
    lapTime.textContent = "Lap " + lapCounter + ": " + document.getElementById("display").textContent;
    document.getElementById("laps").appendChild(lapTime);
  }
}

function increment() {
  if (running === 1) {
    setTimeout(function () {
      startTime++;
      let mins = Math.floor(startTime / 10 / 60);
      let secs = Math.floor(startTime / 10);
      let tenths = startTime % 10;

      if (mins < 10) {
        mins = "0" + mins;
      }
      if (secs < 10) {
        secs = "0" + secs;
      }

      document.getElementById("display").textContent = mins + ":" + secs + ":" + tenths;
      increment();
    }, 100);
  }
}
