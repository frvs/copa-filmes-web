import React, { Fragment } from 'react';

export default function HeaderPrincipal({ tit1, tit2 }) {
  return (
    <Fragment>
      <div style={style.component}>
        <span style={style.name}>CAMPEONATO DE FILMES</span>
        <span style={style.tit1}>{tit1}</span>
        <span>
          <hr style={style.line}></hr>
        </span>
        <span style={style.tit2}>{tit2}</span>
      </div>
    </Fragment>
  );
}

const style = {
  component: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: '30px',
    marginTop: '30px',
    backgroundColor: 'gray',
    fontColor: 'whiter',
    borderRadius: '10px',
  },
  name: {
    fontSize: '0.8em',
    color: 'darkgray',
  },
  tit1: {
    fontSize: '1.5em',
    color: 'white',
    fontWeight: 'bold',
  },
  line: {
    height: '2px',
    width: '30px',
    backgroundColor: 'darkgray',
  },
  tit2: {
    fontSize: '0.8em',
    color: 'white',
  },
};
