import React from 'react';

const HistoryForm = () => {
  return (
    <div className="container">
      <div className="history-form">
        <h1>Historial de Compras Usuarios</h1>
        <form>
          <div className="form-group">
            <label htmlFor="fecha-inicio">Fecha de Inicio:</label>
            <input type="date" id="fecha-inicio" name="fecha-inicio" />
          </div>
          <div className="form-group">
            <label htmlFor="fecha-fin">Fecha de Fin:</label>
            <input type="date" id="fecha-fin" name="fecha-fin" />
          </div>
          <button type="submit">Buscar Compras</button>
        </form>
      </div>
    </div>
  );
}

export {HistoryForm};
