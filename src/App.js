import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [numero, setNumero] = useState(0)

  const handleClick = () => {
 setNumero(numero +1)
  }

  return (
    <div>
      <h1>Contador de clics</h1>
      <p>{numero}</p>
      <button onClick={handleClick} >Agregar clic</button>
    </div>
  );
}

export default App;
