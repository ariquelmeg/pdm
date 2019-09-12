$(document).ready(function() {
    $('#create-link-button').on('click', function(e) {
        e.preventDefault();
        //var dataString = $('#create-link-form').serialize();
        var fecha_derivacion = $("#inputFecha0").val();
        var nombre = $("#inputName").val();
        var rut = $("#inputRUT").val();
        var edad = $("#inputAge").val();
        var funcionalidad = $("#inputFuncionalidad").val();
        var cognitivo = $("#inputCognitivo").val();
        //alert('Datos serializados: '+dataString);
        var mensaje = "Fecha de Derivación:"+ fecha_derivacion + "\n"
        + "Nombre:" + nombre + "\n"
        + "RUT:" + rut + "\n"
        + "Edad:" + edad + "\n"
        + "Funcionalidad:" + funcionalidad + "\n"
        + "Estado Cognitivo:" + cognitivo + "\n";

        alert(mensaje);
        var enlace = "joinallm://chat?message="+encodeURIComponent(mensaje);
        window.open(enlace);
    });
});
