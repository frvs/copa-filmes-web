import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import 'bootstrap/dist/css/bootstrap.min.css';

const style = {
  backgroundColor: 'lightgray',
};

ReactDOM.render(
  <React.StrictMode>
    <App style={style} />
  </React.StrictMode>,
  document.getElementById('root')
);
