
// function allowDrop(ev) {
//     ev.preventDefault()
// };

// function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id)
// };

// function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data))
// };

// Drag
document.addEventListener("dragstart", function(event){
    event.dataTransfer.setData("text", event.target.id);
});
//Drop
document.addEventListener("drop", function(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
});
//Permite Drop (quita los valores predefinidos que dicen q no puedes drop un elemento)
document.addEventListener("dragover", function(event){
    event.preventDefault();
});