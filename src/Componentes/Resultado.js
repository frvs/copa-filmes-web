import React from 'react';
import { Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import HeaderPrincipal from './Header/HeaderPrincipal';
import './Resultado.css';

export default function Resultado({ resultado }) {
  if (resultado === null) {
    return <Redirect to="/" />;
  } else {
    return (
      <Container>
        <HeaderPrincipal
          tit1={'Resultado Final'}
          tit2={
            'Veja o resultado final do Campeonato de filmes de forma simples e rápida'
          }
        />
        <div style={({ display: 'flex', flexDirection: 'row' }, style.line)}>
          <div style={style.col1}>
            <span>1º</span>
          </div>
          <div style={style.col2} className="colunaTitulo">
            <span>{resultado.firstPlace.name}</span>
          </div>
        </div>
        <div style={({ display: 'flex', flexDirection: 'row' }, style.line)}>
          <div style={style.col1}>
            <span>2º</span>
          </div>
          <div style={style.col2} className="colunaTitulo">
            <span>{resultado.secondPlace.name}</span>
          </div>
        </div>
      </Container>
    );
  }
}

const style = {
  line: {
    marginTop: '20px',
    marginBotton: '20px',
    display: 'flex',
  },
  col1: {
    paddingLeft: '20px',
    paddingTop: '5px',
    width: '80px',
    height: '80px',
    fontSize: '2.5em',
    backgroundColor: 'gray',
    color: 'white',
  },
  col2: {
    width: '100%',
    height: '80px',
    backgroundColor: 'white',
  },
};
