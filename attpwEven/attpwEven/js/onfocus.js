let nome = document.getElementById("nome");
let res = document.getElementById("res");

nome.addEventListener("focus", function() {
    res.textContent = "Este campo está em foco.";
});

nome.addEventListener("blur", function() {
    res.textContent = "";
  });