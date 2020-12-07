import React, { useState } from 'react';
import api from '../../services/api';

import SideBar from '../../components/SideBar';
import Hero from '../../components/Hero';

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
    <div id="page-novo-funcionario">
      <SideBar page="Funcionário"></SideBar>
      <div className="page-content">
        <Hero page="Funcionário"></Hero>
        <section className="section-inputs">
          <form onSubmit={criarNovoFuncionario}>
            <div className="group-inputs">
              <div className="form-group">
                <div className="form-group-inputs-context">
                  <label htmlFor="nome">Nome</label>
                  <input
                    type="text"
                    placeholder="Nome do funcionário"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                  />
                </div>
                <div className="form-group-inputs-context">
                  <label htmlFor="nome">CPF</label>
                  <input
                    type="number"
                    placeholder="CPF"
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">

                <div className="form-group-inputs-context">
                  <label htmlFor="nome">Telefone</label>
                  <input
                    type="number"
                    placeholder="Telefone"
                    value={telefone}
                    onChange={e => setTelefone(e.target.value)}
                  />
                </div>
                <div className="form-group-inputs-context">
                  <label htmlFor="nome">Cargo</label>
                  <input
                    type="text"
                    placeholder="Cargo"
                    value={cargo}
                    onChange={e => setCargo(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="group-buttons">
              <button className="btn-generic" type="submit">Cancelar</button>
              <button className="btn-save" type="submit">Cadastrar</button>
            </div>
          </form>
        </section>
      </div>
    </div >
  );
}