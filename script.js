let startTime, updatedTime, difference, timerInterval;
let running = false;
let elapsedTime = 0;

function updateDisplay(time) {
  let date = new Date(time);
  let min = String(date.getUTCMinutes()).padStart(2, '0');
  let sec = String(date.getUTCSeconds()).padStart(2, '0');
  let ms = String(Math.floor(date.getUTCMilliseconds() / 10)).padStart(2, '0');
  document.getElementById('display').textContent = `${min}:${sec}:${ms}`;
}

function startStopwatch() {
  if (!running) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay(elapsedTime);
    }, 10);
    running = true;
  }
}

function pauseStopwatch() {
  if (running) {
    clearInterval(timerInterval);
    running = false;
  }
}

function resetStopwatch() {
  clearInterval(timerInterval);
  running = false;
  elapsedTime = 0;
  updateDisplay(0);
  document.getElementById('laps').innerHTML = '';
}

function recordLap() {
  if (running) {
    let lapTime = document.getElementById('display').textContent;
    let lapList = document.getElementById('laps');
    let li = document.createElement('li');
    li.textContent = `Lap: ${lapTime}`;
    lapList.appendChild(li);
  }
}
