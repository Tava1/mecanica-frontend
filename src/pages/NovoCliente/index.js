import React, { useState } from 'react';
import api from '../../services/api';

import SideBar from '../../components/SideBar';
import Hero from '../../components/Hero';


import './styles.css'

export default function NovoCliente() {
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
    <div id="page-novo-cliente">
      <SideBar page="Cliente"></SideBar>

      <div className="page-content">
        <Hero page="Cliente"></Hero>
        <section className="section-inputs">
          <form onSubmit={criarNovoCliente}>
            <div className="group-inputs">
              <div className="form-group">
                <div className="form-group-inputs-context">
                  <label htmlFor="nome">Nome</label>

                  <input
                    name="nome"
                    type="text"
                    placeholder="Nome do cliente"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                  />
                </div>

                <div className="form-group-inputs-context">
                  <label htmlFor="cpf">CPF</label>
                  <input
                    name="cpf"
                    type="number"
                    placeholder="CPF"
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="form-group-inputs-context">
                  <label htmlFor="cpf">Telefone</label>
                  <input
                    type="number"
                    placeholder="Telefone"
                    value={telefone}
                    onChange={e => setTelefone(e.target.value)}
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