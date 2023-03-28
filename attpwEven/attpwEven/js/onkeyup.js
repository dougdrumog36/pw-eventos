let tecla = document.getElementById("tecla");
let res = document.getElementById("res")

tecla.addEventListener("keyup", function(event) {
    res.textContent = event.key;
});