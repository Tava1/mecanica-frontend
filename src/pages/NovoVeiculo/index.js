import React, { useState } from 'react';
import api from '../../services/api';

import './styles.css'

export default function NovoVeiculo() {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [tipoVeiculo, setTipoVeiculo] = useState('');
  const [cpfCliente, setCpfCliente] = useState('');


  async function criarNovoVeiculo(e) {
    e.preventDefault();

    const data = {
      marca,
      modelo,
      ano,
      tipoVeiculo,
      cpfCliente,
    }

    try {
      await api.post('VeiculoController', data, {
        'Content-Type': 'application/json'
      }).then(function (response) {
        console.log(response.data);
        alert(response.data);
      });
    }
    catch (err) {
      console.log(err);
      alert("Ocorreu um erro ao tentar cadastrar um novo cliente.")
    }
  }
  return (
    <div className="">
      <section className="form">

        <form onSubmit={criarNovoVeiculo}>

          <input
            type="CFP do Cliente"
            placeholder="CPF"
            value={cpfCliente}
            onChange={e => setCpfCliente(e.target.value)}
          />

          <input
            type="text"
            placeholder="Marca"
            value={marca}
            onChange={e => setMarca(e.target.value)}
          />

          <input
            type="text"
            placeholder="Modelo"
            value={modelo}
            onChange={e => setModelo(e.target.value)}
          />

          <input
            type="number"
            placeholder="Ano"
            value={ano}
            onChange={e => setAno(e.target.value)}
          />

          <input
            type="text"
            placeholder="Tipo do veículo"
            value={tipoVeiculo}
            onChange={e => setTipoVeiculo(e.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </form>
      </section>
    </div >
  );
}