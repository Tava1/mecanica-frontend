import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

export default function SideBar(props) {

  return (
    <aside>
      <div className="current-page">
        <span>{props.page}</span>
      </div>
      <div className="menu-options">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/funcionarios">Funcionario</Link>
          </li>
          <li>
            <Link to="/clientes">Cliente</Link>
          </li>
          <li>
            <Link to="/veiculos">Veiculo</Link>
          </li>
          <li>
            <Link to="/orcamentos">Orçamento</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}