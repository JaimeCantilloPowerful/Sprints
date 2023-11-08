import React from 'react';
import './StylesLogin.css';

const LoginForm = () => {
  const handleSubmit = (event) => {
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
  }

  return (
    <div className="container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Iniciar sesión</h1>
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" placeholder="Correo electrónico" required />

        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" placeholder="Contraseña" required />

        <button type="submit">Iniciar sesión</button>
        <div className="olvidaste">
          <p><a href="recuperar_contraseña">¿Olvidaste tu contraseña?</a></p>
        </div>
      </form>
      <button className="crea-cuenta-button">Crea tu cuenta</button>
    </div>
  );
}

export default LoginForm;

