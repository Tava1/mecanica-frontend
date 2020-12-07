import React, { useState, useEffect } from 'react';
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
    <div>
      <section className="listEmployee">
        <Hero page="Lista de funcionários" />
        <Sidebar />



        <div className="listTable">
          <table className="table">
            <thead>
              <th>Nome</th>
              <th>Cpf</th>
              <th>Telefone</th>
              <th>Cargo</th>
            </thead>
            <tbody>
              <td>Jill</td>
              <td>Smith</td>
              <td>5000-11</td>
              <td>Teste</td>
            </tbody>
          </table>
        </div>

        {/* <ul>
          {funcionarios.map(funcionario => (
            <li key={funcionario.IdFuncionario}>
              <strong>Nome:</strong>
              <p>{funcionario.nome}</p>
              <strong>cpf:</strong>
              <p>{funcionario.cpf}</p>
              <strong>telefone:</strong>
              <p>{funcionario.telefone}</p>
              <strong>cargo:</strong>
              <p>{funcionario.cargo}</p>
            </li>
          ))}
        </ul> */}
      </section>

    </div>
  );
}