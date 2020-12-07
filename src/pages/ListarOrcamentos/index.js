import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom'

import Hero from '../../components/Hero';
import Sidebar from '../../components/SideBar';

import './styles.css'

export default function ListarOrcamentos() {

  const [orcamentos, setOrcamentos] = useState([]);

  useEffect(() => {
    api.get('OrcamentoController').then(response => {
      setOrcamentos(response.data);
    })
  })

  return (
    <div id="page-lista-orcamento">
      <Sidebar page="Listar Orçamentos" />
      <div className="page-content">
        <section>
          <Hero page="Listar Orçamentos" />
          <Link to="/novo/orcamento">
            <button>NOVO</button>
          </Link>

          <div className="listTable">
            <table className="table">

              <thead>
                <th>Nome do Cliente</th>
                <th>CPF</th>
                <th>Funcionário</th>
                <th>Data</th>
                <th>Status</th>
              </thead>

              {orcamentos.map(orcamento => (
                <tbody key={orcamento.idOrcamento}>
                  <td>{orcamento.nomeCliente}</td>
                  <td>{orcamento.cpfCliente}</td>
                  <td>{orcamento.nomeFuncionario}</td>
                  <td>{orcamento.dataOrcamento}</td>
                  <td>{orcamento.status}</td>
                </tbody>
              ))}

            </table>
          </div>

        </section>
      </div>

    </div>
  );
}