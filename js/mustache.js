
var pepito = {

nombre: "Carlos",
direccion: "Pitas",
NIF: 5794375,
telefono: 5654637,
email: "jnhgfujh@gmail.com"

};

// function cargarDatos(){
//             var datos = Mustache.render("<strong>{{nombre}}</strong><br><strong>{{direccion}}</strong><br><strong>{{NIF}}</strong><br><strong>{{telefono}}</strong><br><strong>{{email}}</strong><br>", pepito);
//             $('#mustachote').html(datos);
//         }
 
//         $( document ).ready(function() {
//             cargarDatos();
//         });
alert("hola");
var pepe = $( "#lista" ).html();
var compilar = Handlebars.compile(pepe);
var html = compilar(pepito);
$("#resultado").html(html);


