import React, { useState } from 'react';
import api from '../../services/api';

import SideBar from '../../components/SideBar';
import Hero from '../../components/Hero';


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
    <div id="page-novo-veiculo">
      <SideBar page="Veículo"></SideBar>
      <div className="page-content">
        <Hero page="Veículo"></Hero>
        <section className="section-inputs">
          <form onSubmit={criarNovoVeiculo}>
            <div className="group-inputs">
              <div className="form-group">
                <div className="form-group-inputs-context">
                  <label htmlFor="nome">CPF</label>
                  <input
                    type="CFP do Cliente"
                    placeholder="xxx.xxx.xxx-xx"
                    value={cpfCliente}
                    onChange={e => setCpfCliente(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="form-group-inputs-context">
                  <label>Marca</label>
                  <input
                    type="text"
                    placeholder="Ex: Ford, Volkswagen"
                    value={marca}
                    onChange={e => setMarca(e.target.value)}
                  />
                </div>
                <div className="form-group-inputs-context">
                  <label>Modelo</label>
                  <input
                    type="text"
                    placeholder="Ex: Fusion, Fiesta"
                    value={modelo}
                    onChange={e => setModelo(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="form-group-inputs-context">
                  <label htmlFor="nome">Ano do veículo</label>
                  <input
                    type="number"
                    placeholder="Ex: 2020"
                    value={ano}
                    onChange={e => setAno(e.target.value)}
                  />
                </div>
                <div className="form-group-inputs-context">
                  <label htmlFor="nome">Tipo do veículo</label>
                  <input
                    type="text"
                    placeholder="Ex: Sedan, Hatch"
                    value={tipoVeiculo}
                    onChange={e => setTipoVeiculo(e.target.value)}
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