import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

export default function NavPrincipal({ selected, handle, enable }) {
  const gerarResultado = () => {
    handle();
  };

  return (
    <Row style={style.component}>
      <Col sm={3} xs={4}>
        <div style={style.col1}>
          <span>Selecionados</span>
          <span>{selected} de 8 filmes</span>
        </div>
      </Col>
      <Col sm={9} xs={8} style={style.col2}>
        <div style={style.col2}>
          <Button
            style={style.btn}
            variant="dark"
            disabled={!enable}
            onClick={gerarResultado}
          >
            GERAR MEU CAMPEONATO
          </Button>{' '}
        </div>
      </Col>
    </Row>
  );
}

const style = {
  component: {
    marginTop: '20px',
  },
  col1: {
    color: 'white',
    fontWeight: '700',
    fontSize: '1em',
    display: 'flex',
    flexDirection: 'column',
    verticalAlign: 'middle',
  },
  col2: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  btn: {
    color: 'white',
    fontSize: '0.8em',
  },
};
