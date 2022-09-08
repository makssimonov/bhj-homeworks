let hole = [...document.getElementsByClassName("hole")].forEach(item => { 
    item.addEventListener("click", () => {
        
        let deadCount = document.getElementById("dead").innerHTML;
        let lostCount = document.getElementById("lost").innerHTML;
        
        if (item.className === "hole hole_has-mole") { 
            deadCount++;
            document.getElementById("dead").innerHTML = deadCount;
        } else {
            lostCount++;
            document.getElementById("lost").innerHTML = lostCount;
        }

        if (deadCount >= 10) {
            alert("Победа!");
            document.getElementById("dead").innerHTML = 0;
            document.getElementById("lost").innerHTML = 0;
        } else if (lostCount >= 5) {
            alert("Вы проиграли!");
            document.getElementById("lost").innerHTML = 0;
            document.getElementById("dead").innerHTML = 0;
        }
    });
});
