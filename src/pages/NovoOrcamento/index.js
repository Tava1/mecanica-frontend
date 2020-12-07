import React, { useState } from 'react';
import api from '../../services/api';

import SideBar from '../../components/SideBar';
import Hero from '../../components/Hero';

import './styles.css'

export default function NovoOrcamento() {
  const [totalMaoObra, setTotalMaoObra] = useState('');
  const [cpfFuncionario, setCpfFuncionario] = useState('');
  const [cpfCliente, setCpfCliente] = useState('');
  // const [detalhe, setDetalhe] = useState([]);
  const [descricao, setDescricao] = useState('');
  const [precoUnitario, setPrecoUnitario] = useState('');
  const [quantidade, setQuantidade] = useState('');

  let detalhes = []

  function adicionarDetalhe() {

  }

  async function criarNovoOrcamento(e) {
    e.preventDefault();

    const data = {
      totalMaoObra,
      cpfFuncionario,
      cpfCliente,
      descricao,
      precoUnitario,
      quantidade
    }

    try {
      await api.post('OrcamentoController', data, {
        'Content-Type': 'application/json'
      }).then(function (response) {
        console.log(response.data);
        alert(response.data);
      });
    }
    catch (err) {
      console.log(err);
      alert("Ocorreu um erro ao tentar cadastrar um novo orçamento.")
    }
  }
  return (
    <div id="page-novo-orcamento">
      <SideBar page="Orçamento"></SideBar>
      <div className="page-content">
        <Hero page="Orçamento"></Hero>
        <section className="section-inputs">
          <form onSubmit={criarNovoOrcamento}>
            <div className="group-inputs">
              <div className="form-group">
                <div className="form-group-inputs-context">
                  <label htmlFor="nome">CPF do Cliente</label>
                  <input
                    type="number"
                    placeholder="xxx.xxx.xxx-xx"
                    value={cpfCliente}
                    onChange={e => setCpfCliente(e.target.value)}
                  />
                </div>

                <div className="form-group-inputs-context">
                  <label htmlFor="nome">CPF do Funcionário</label>
                  <input
                    type="number"
                    placeholder="xxx.xxx.xxx-xx"
                    value={cpfFuncionario}
                    onChange={e => setCpfFuncionario(e.target.value)}
                  />
                </div>
              </div>

              <h3>Itens</h3>

              <div className="form-group">
                <div className="form-group-inputs-context">
                  <label>Descrição</label>
                  <input
                    type="text"
                    placeholder="O que foi feito"
                    value={descricao}
                    onChange={e => setDescricao(e.target.value)}
                  />
                </div>
                <div className="form-group-inputs-context">
                  <label>Preço Unitário</label>
                  <input
                    type="number"
                    placeholder="R$ 100,00"
                    value={precoUnitario}
                    onChange={e => setPrecoUnitario(e.target.value)}
                  />
                </div>
                <div className="form-group-inputs-context">
                  <label>Quantidade</label>
                  <input
                    type="number"
                    placeholder="Ex: 10"
                    value={quantidade}
                    onChange={e => setQuantidade(e.target.value)}
                  />
                </div>
                <div className="form-group-inputs-context">
                  <br />
                  <button onClick={adicionarDetalhe}>Adicionar</button>
                </div>
              </div>







              <div className="form-group">
                <div className="form-group-inputs-context">
                  <label>Total da mão de obra</label>
                  <input
                    type="number"
                    placeholder="R$ 100,00"
                    value={totalMaoObra}
                    onChange={e => setTotalMaoObra(e.target.value)}
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