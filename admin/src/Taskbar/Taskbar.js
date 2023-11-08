import React from 'react';

const Taskbar = () => {
  return (
    <div className="taskbar">
      <div className="task">
        <span>Informacion</span>
      </div>
      <div className="task">
        <span>Precios</span>
      </div>
      <div className="task">
        <span>Nueva compra</span>
      </div>
      <div className="task">
        <span>Transporte</span>
      </div>
    </div>
  );
}

export default Taskbar;
