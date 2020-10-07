import React from 'react';
import { Form } from 'react-bootstrap';

export default function Filme({ filme, onSelected }) {
  const handle = (event) => {
    onSelected(event.target.id);
  };
  return (
    <div style={style.component}>
      <div style={style.componentInterno}>
        <div style={{ width: '40px', marginTop: '13px' }}>
          <Form.Check
            type="checkbox"
            style={{ marginLeft: '8px' }}
            id={filme.id}
          >
            <Form.Check.Input
              type="checkbox"
              checked={filme.selected}
              onChange={handle}
            />
          </Form.Check>
        </div>
        <div style={{ width: '100%' }}>
          <div style={{ fontWeight: 'bolder', fontSize: '0.8em' }}>
            <span>{filme.titulo}</span>
          </div>
          <div>
            <span style={{ fontSize: '0.8em' }}>{filme.ano}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const style = {
  component: {
    height: '80px',
    backgroundColor: 'white',
    margin: '5px',
    padding: '5px',
    border: '1px solid white',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  componentInterno: {
    display: 'flex',
  },
};
