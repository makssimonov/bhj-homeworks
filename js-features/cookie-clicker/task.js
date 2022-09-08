// let clickerСounter = document.getElementById("clicker__counter").innerHTML;

// cookie.onclick = function() {
//     let cookieCount = ++clickerСounter;
//     document.getElementById("clicker__counter").innerHTML = cookieCount;
//     let cookie = document.getElementById("cookie");
//     if (cookie.width <= 200) {
//         cookie.width = 250;
//     } else {
//         cookie.width = 200;
//     }
// }

cookie.onclick = function() {
    ++document.getElementById("clicker__counter").innerHTML;
    let cookie = document.getElementById("cookie");
    cookie.width = cookie.width <= 200 ? 250 : 200;
}