import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Hero from '../../components/Hero';
import Sidebar from '../../components/SideBar';

import './styles.css'

export default function ListarClientes() {

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    api.get('ClienteController').then(response => {
      setClientes(response.data);
    })
  })

  return (
    <div id="page-lista-cliente">
      <Sidebar page="Listar Clientes" />
      <div className="page-content">
        <section>
          <Hero page="Lista de clientes" />
          <Link to="/novo/cliente">
            <button>NOVO</button>
          </Link>
          <div className="listTable">
            <table className="table">

              <thead>
                <th>Nome</th>
                <th>CPF</th>
                <th>Telefone</th>
              </thead>

              {clientes.map(cliente => (
                <tbody key={cliente.IdCliente}>
                  <td>{cliente.nome}</td>
                  <td>{cliente.cpf}</td>
                  <td>{cliente.telefone}</td>
                </tbody>
              ))}

            </table>
          </div>
        </section>
      </div>
    </div>
  );
}