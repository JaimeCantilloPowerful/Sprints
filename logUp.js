document.addEventListener("DOMContentLoaded", function() {
  var registroForm = document.getElementById("registroForm");
  
  registroForm.addEventListener("submit", function(event) {
      var nombre = document.querySelector('input[name="nombre"]').value;
      var correo = document.querySelector('input[name="correo"]').value;
      var contraseña = document.querySelector('input[name="contraseña"]').value;
      var fechaNacimiento = document.querySelector('input[name="fecha-nacimiento"]').value;
      var sexo = document.querySelector('select[name="sexo"]').value;
      
      if (nombre === "" || correo === "" || contraseña === "" || fechaNacimiento === "" || sexo === "") {
          event.preventDefault(); 
          alert("Por favor, completa todos los campos.");
      } 
      else if (contraseña.length !== 8) {
          event.preventDefault();
          alert("La contraseña debe tener exactamente 8 caracteres.");
 }
});
});