document.getElementById("retroceder").addEventListener("click", function goBack() {
	window.history.back();
});

document.getElementById("avanzar").addEventListener("click", function goForward() {
	window.history.forward();
});

document.getElementById("retroceder3").addEventListener("click", function go() {
	window.history.go(-3)
});