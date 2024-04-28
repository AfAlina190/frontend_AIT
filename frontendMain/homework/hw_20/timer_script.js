// Создайте простой таймер на веб-странице, который будет отсчитывать время назад от 60 секунд. При достижении 0 секунд таймер должен остановиться. Стилизуйте его.


let timeLeft = 60;
    let intervalId;

    function updateTimer() {
      const timerElement = document.getElementById('timer');
      timerElement.textContent = timeLeft;
      timeLeft--;

      if (timeLeft < 0) {
        clearInterval(intervalId);
        timerElement.textContent = "Time's up!";
      }
    }

    function startTimer() {
      intervalId = setInterval(updateTimer, 1000);
    }

    function pauseTimer() {
      clearInterval(intervalId);
    }

    function resetTimer() {
      clearInterval(intervalId);
      timeLeft = 60;
      const timerElement = document.getElementById('timer');
      timerElement.textContent = timeLeft;
    }