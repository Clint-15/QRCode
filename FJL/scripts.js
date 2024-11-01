function updateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formattedDate = `${year}年${month}月${day}日`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('current-date').innerText = formattedDate;
    document.getElementById('current-time').innerText = formattedTime;
}

function showMessage() {
    var message = document.getElementById('message');
    message.style.display = 'block';
    setTimeout(function () {
        message.style.display = 'none';
    }, 2000);
}

function startCountdown(duration, display) {
    let timer = duration, seconds;
    setInterval(() => {
        seconds = parseInt(timer % 100, 10);

        display.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    updateTime();
    setInterval(updateTime, 1000);
    var countdownElement = document.getElementById('countdown');
    var countdown = 100;
    var countdownId = setInterval(function () {
        countdown--;
        countdownElement.textContent = countdown;
        if (countdown <= 0) {
            clearInterval(countdownId);
        }
    }, 1000);
};
