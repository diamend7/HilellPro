const timerElement = document.getElementById("timer");

let timeLeft = 120; 

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function count() {
    if (timeLeft > 0) {
        timeLeft--;
        updateTimer();
    } else {
        clearInterval(timerInterval);
    }
}

updateTimer();
const timerInterval = setInterval(count, 1000);