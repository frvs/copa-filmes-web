import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import HeaderPrincipal from './Header/HeaderPrincipal';
import Filmes from './Principal/Body/Filmes';
import NavPrincipal from './Header/NavPrincipal';
import { Container } from 'react-bootstrap';

export default function Principal({ handle }) {
  const [allFilms, setAllFilms] = useState([]);
  const [selectedFilms, setSelectedFilms] = useState([]);
  const [habilitarGeracao, setHabilitarGeracao] = useState(false);
  const [redirecionarParaResultado, setRedirecionarParaResultado] = useState(
    false
  );
  const corsProxy = 'https://cors-anywhere.herokuapp.com/';

  useEffect(() => {
    selectedFilms.length >= 8
      ? setHabilitarGeracao(true)
      : setHabilitarGeracao(false);
  }, [selectedFilms]);

  useEffect(() => {
    const initial = async () => {
      const urlApi = 'http://copafilmes.azurewebsites.net/api/filmes';
      const response = await fetch(corsProxy + urlApi);
      const arrayOriginal = await response.json();

      setAllFilms(
        arrayOriginal.map((filme) => {
          return { ...filme, selected: false };
        })
      );
    };
    initial();
  }, []);

  const onSelected = (id) => {
    const filme = allFilms.find((x) => x.id === id);
    if (!filme.selected && selectedFilms.length < 8) {
      filme.selected = true;
    } else if (filme.selected) {
      filme.selected = false;
    } else {
      return;
    }
    let filmes = [...selectedFilms, filme];
    setSelectedFilms(filmes.filter((x) => x.selected));
  };

  const gerarResultado = async () => {
    const urlApi =
      'https://movieschampionship.herokuapp.com/api/movies/championship';

    const data = selectedFilms.map(({ id, titulo, ano, nota }) => {
      return {
        id,
        name: titulo,
        releaseYear: ano,
        rate: nota,
      };
    });

    const response = await fetch(corsProxy + urlApi, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      redirect: 'follow',
    });

    const resultado = await response.text();
    if (resultado !== undefined) {
      handle(JSON.parse(resultado));
      setRedirecionarParaResultado(true);
    } else {
      alert(
        'Não foi possivel obter um retorno, entre em contato com o administrador'
      );
    }
  };

  if (redirecionarParaResultado) {
    return <Redirect to="/resultado/" />;
  } else {
    return (
      <Container>
        <HeaderPrincipal
          tit1={'Fase de Seleção'}
          tit2={
            'Selecione 8 filmes que você deseja que entrem na competição e depois pressione o botão Gerar Meu Campeonato para prosseguir.'
          }
        />
        <NavPrincipal
          selected={selectedFilms.length}
          handle={gerarResultado}
          enable={habilitarGeracao}
        />
        <Filmes filmes={allFilms} onSelected={onSelected}></Filmes>
      </Container>
    );
  }
}
