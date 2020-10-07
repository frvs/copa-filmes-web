import React from 'react';
import Filme from './Filme';
import './Filmes.css';

export default function Filmes({ filmes, onSelected }) {
  return (
    <div style={style.principal}>
      {filmes.map((filme) => {
        return (
          <div className="componentPrincipal" key={filme.id}>
            <Filme filme={filme} onSelected={onSelected} />
          </div>
        );
      })}
    </div>
  );
}

const style = {
  principal: {
    marginTop: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
