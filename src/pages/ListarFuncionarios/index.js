import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import api from '../../services/api';
import Hero from '../../components/Hero';
import Sidebar from '../../components/SideBar';

import './styles.css';

export default function ListarFuncionarios() {

  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    api.get('FuncionarioController').then(response => {
      setFuncionarios(response.data);
    })
  })

  return (
    <div id="page-lista-funcionario">
      <Sidebar page="Listar Funcionários" />
      <div className="page-content">
        <section className="listEmployee">
          <Hero page="Lista de funcionários" />
          <Link to="/novo/funcionario">
            <button>NOVO</button>
          </Link>
          <div className="listTable">
            <table className="table">

              <thead>
                <th>Nome</th>
                <th>Cpf</th>
                <th>Telefone</th>
                <th>Cargo</th>
              </thead>

              {funcionarios.map(funcionario => (
                <tbody key={funcionario.IdFuncionario}>
                  <td>{funcionario.nome}</td>
                  <td>{funcionario.cpf}</td>
                  <td>{funcionario.telefone}</td>
                  <td>{funcionario.cargo}</td>
                </tbody>
              ))}

            </table>
          </div>
        </section>
      </div>
    </div>
  );
}