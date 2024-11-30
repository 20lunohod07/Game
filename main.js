const monkey = document .getElementById("monkey");
const cactus = document .getElementById("cactus");

document .addEventListener("keydown", function(event) {
    jump();
})

function jump() {
    if (monkey.classList != "jump") {
        monkey.classList.add("jump")
        }
        setTimeout( function() {
            monkey.classList.remove("jump")
        }, 300)
}

let isAlive = setInterval( function() {
    let monkeyTop = parseInt(window.getComputedStyle(monkey).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && monkeyTop >= 140) {
        alert("GAME OVER")
    }
}, 10)