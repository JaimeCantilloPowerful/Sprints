document.addEventListener("DOMContentLoaded", function() {
    var registroForm = document.getElementById("registroForm");

    registroForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var nombre = registroForm.querySelector('input[name="nombre"]').value;
        var correo = registroForm.querySelector('input[name="correo"]').value;
        var contraseña = registroForm.querySelector('input[name="contraseña"]').value;
        var fechaNacimiento = registroForm.querySelector('input[name="fecha-nacimiento"]').value;
        var sexo = registroForm.querySelector('select[name="sexo"]').value;

        if (nombre === "" || correo === "" || contraseña === "" || fechaNacimiento === "" || sexo === "") {
            alert("Por favor, completa todos los campos.");
        } else if (contraseña.length !== 8) {
            alert("La contraseña debe tener exactamente 8 caracteres.");
        }
    });
});