let nome = document.getElementById("nome");
let res = document.getElementById("res");

nome.addEventListener("input", function(event) {
  let nome = event.target.value;
  res.textContent = nome ? ` ${nome}` : "";
});