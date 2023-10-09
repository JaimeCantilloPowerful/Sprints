document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".login-form").addEventListener("submit", function(event) {
      event.preventDefault(); 
  
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
      if (!emailPattern.test(email)) {
        alert("El correo electrónico no es válido.");
      } else if (password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
      } else {
        alert("Inicio de sesión exitoso");
     }
});
});