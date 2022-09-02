let clicker__counter = document.getElementById("clicker__counter").innerHTML;

cookie.onclick = function() {
    let cookieCount = clicker__counter++;
    document.getElementById("clicker__counter").innerHTML = cookieCount;
    let cookie = document.getElementById("cookie");
    if (cookie.width <= 200) {
        cookie.width = 250;
    } else {
        cookie.width = 200;
    }
}