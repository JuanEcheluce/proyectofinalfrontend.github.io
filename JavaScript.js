document.getElementById('boton_mostrar').addEventListener('click', function(){
    console.log("Evento01");
    document.getElementById('datosdecontacto').style.display = "block";
    document.getElementById('subtitulo_contacto').innerHTML = "Datos de Contacto";
});

