const timerElement = document.getElementById('timer');
const startButton = document.getElementById('tomato-button');
const navH1 = document.getElementById('title');
const pText = document.getElementById('p-text');

let isPomodoro = true;
let isRunning = false;
let minutes;
let seconds;
let timerInterval;

function updateTimer() {
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`;

    if (minutes === 0 && seconds === 0) {
        clearInterval(timerInterval);
        isRunning = false;

        if (isPomodoro) {
            startPauseTimer();
        } else {
            startPomodoroTimer();
        }
    } else {
        if (seconds === 0) {
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
    }
}

function startPomodoroTimer() {
    isPomodoro = true;
    minutes = 25;
    seconds = 0;
    isRunning = true;
    timerInterval = setInterval(updateTimer, 1000);
    document.body.classList.remove('timer-ended');
    navH1.classList.remove('h1-ended');
    timerElement.classList.remove('h1-ended');
    pText.classList.remove('p-ended');
    pText.innerText = 'Concentrati ora!';
    updateTimer();
}

function startPauseTimer() {
    isPomodoro = false;
    minutes = 10;
    seconds = 0;
    isRunning = true;
    timerInterval = setInterval(updateTimer, 1000);
    document.body.classList.add('timer-ended');
    navH1.classList.add('h1-ended');
    timerElement.classList.add('h1-ended');
    pText.classList.add('p-ended');
    pText.innerText = 'Riposati ora!';
    updateTimer();
}

function startTimer() {
    if (!isRunning) {
        startPomodoroTimer();
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    isPomodoro = true;
    startPomodoroTimer();
}

startButton.addEventListener('click', startTimer);

