var resultados = document.getElementById("resultado")
var datos = {
	'one': 1,
	'two': 2,
	'three': 3,
	'four': 4,
};

var password = "password";
// SET ITEM (CLAVE, VALOR)
localStorage.setItem(password, JSON.stringify(datos));
// RECUPERAR LOS ELEMENTOS DEL "STORAGE" (ES UN STRING)
var datosRecuperados = localStorage.getItem(password);
// AÑADIR LISTENER PARA EL EVENTO "CLICK"
document.getElementById("boton").addEventListener("click", function(){

resultado.innerHTML = "one: "+JSON.parse