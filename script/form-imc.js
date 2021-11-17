var botaoAdicionar = document.querySelector("#calcular");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

 

  var form = document.querySelector("#form-imc");
  var altura = form.altura.value;
  var peso = form.peso.value;

  var validaPeso = true;
  var validaAltura = true;

  

   if (peso == 0 && altura == 0) {
    document.getElementById("resultado").value = "Digite algum valor";
  }if (peso <= 0 || peso >= 400) {
    validaPeso = false;
    document.getElementById("resultado").value = "Peso inválido";
  } else if (altura <= 0 || altura >= 2.8) {
    validaAltura = false;
    document.getElementById("resultado").value = "Altura inválida";
  }


  if (validaAltura && validaPeso) {
    var imc = peso / (altura * altura);
    document.getElementById("resultado").value = imc.toFixed(2);
  }

});

var botaoAdicionar = document.querySelector("#limpar");
botaoAdicionar.addEventListener("click", function (event) {
event.preventDefault();

document.getElementById("resultado").value = "";
document.getElementById("peso").value = "";
document.getElementById("altura").value = "";
});