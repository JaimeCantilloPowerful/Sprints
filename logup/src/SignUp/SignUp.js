import React from 'react';
import './stylesSignUp.css';
import logo from './logo.png'; 

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    var nombre = document.querySelector('input[name="nombre"]').value;
    var correo = document.querySelector('input[name="correo"]').value;
    var contraseña = document.querySelector('input[name="contraseña"]').value;
    var fechaNacimiento = document.querySelector('input[name="fecha-nacimiento"]').value;
    var sexo = document.querySelector('select[name="sexo"]').value;

    if (nombre === "" || correo === "" || contraseña === "" || fechaNacimiento === "" || sexo === "") {
        alert("Por favor, completa todos los campos.");
    } else if (contraseña.length !== 8) {
        alert("La contraseña debe tener exactamente 8 caracteres.");
    }
  }

  return (
    <div className="registro-container">
      <div className="logo">
        <img src={logo} alt="Logo de Urban Elegance" />
      </div>
      <h2>Regístrate en Urban Elegance</h2>
      <form id="registroForm" onSubmit={handleSubmit}>
        <label>Nombre completo:</label>
        <input type="text" name="nombre" placeholder="Nombre completo" required />
        <label>Dirección de correo:</label>
        <input type="email" name="correo" placeholder="Ejemplo12@gmail.com" required />
        <label>Contraseña:</label>
        <input type="password" name="contraseña" placeholder="Contraseña" required />
        <label>Fecha de nacimiento:</label>
        <input type="date" name="fecha-nacimiento" required />
        <label>Sexo:</label>
        <select name="sexo" required>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="otro">Otro</option>
        </select>
        <p>Al hacer clic en Registrarte, aceptas nuestras Condiciones, la Política de datos y la Política de cookies. Es posible que te enviemos notificaciones por SMS, que puedes desactivar cuando quieras.</p>
        <button className="registro-button" type="submit">Registrarte</button>
      </form>
      <p>¿Ya tienes una cuenta? <a href="#">Inicia sesión</a></p>
    </div>
  );
}

export default SignUp;
