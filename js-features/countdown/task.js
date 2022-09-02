let interval;
let x = document.getElementById("timer").innerHTML;

function countdown(interval) {
    document.getElementById("timer").innerHTML = x;
    x--;
    if (x < 0) {
        clearTimeout(x);
        alert('Вы победили в конкурсе!');
    } else {
        interval = setTimeout(countdown, 1000);
    }
}
countdown();