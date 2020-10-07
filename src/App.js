import React, { useState } from 'react';
import Principal from './Componentes/Principal';
import Resultado from './Componentes/Resultado';
import { BrowserRouter as Router, Route } from 'react-router-dom'
function App() {
  const [resultado, setResultado] = useState(null);
  const handleResultado = (_resultado) => {
    setResultado(_resultado);
  }

  return (
    <Router>
      <Route exact path='/' render={(props) => <Principal {...props} handle={handleResultado} />} />
      <Route exact path='/resultado' render={(props) => <Resultado {...props} resultado={resultado} />} />
    </Router>
  );
}

export default App;
