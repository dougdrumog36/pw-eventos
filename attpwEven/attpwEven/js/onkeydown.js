let tecla = document.getElementById("tecla");
let res = document.getElementById("res")

tecla.addEventListener("keydown", function(event) {
  res.textContent = event.target.value
});