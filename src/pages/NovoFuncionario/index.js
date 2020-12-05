import React, { useState } from 'react';
import api from '../../services/api';

import './styles.css'

export default function NovoFuncionario() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cargo, setCargo] = useState('');


  async function criarNovoFuncionario(e) {
    e.preventDefault();

    const data = {
      nome,
      cpf,
      telefone,
      cargo,
    }

    try {
      await api.post('FuncionarioController', data, {
        'Content-Type': 'application/json'
      }).then(function (response) {
        console.log(response.data);
        alert(response.data);
      });
    }
    catch (err) {
      console.log(err);
      alert("Ocorreu um erro ao tentar cadastrar um novo funcionário.")
    }
  }
  return (
    <div className="">
      <section className="form">

        <form onSubmit={criarNovoFuncionario}>
          <input
            type="text"
            placeholder="Nome do funcionário"
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

          <input
            type="text"
            placeholder="Cargo"
            onChange={e => setCargo(e.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </form>
      </section>
    </div >
  );
}