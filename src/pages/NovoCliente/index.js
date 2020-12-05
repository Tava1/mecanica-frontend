import React, { useState } from 'react';
import api from '../../services/api';

import './styles.css'

export default function Menu() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');


  async function criarNovoCliente(e) {
    e.preventDefault();

    const data = {
      nome,
      cpf,
      telefone,
    }

    try {
      await api.post('ClienteController', data, {
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

        <form onSubmit={criarNovoCliente}>
          <input
            type="text"
            placeholder="Nome do cliente"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />

          <input
            type="number"
            placeholder="CPF"
            value={cpf}
            onChange={e => setCpf(e.target.value)}
          />

          <input
            type="number"
            placeholder="Telefone"
            onChange={e => setTelefone(e.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </form>
      </section>
    </div >
  );
}