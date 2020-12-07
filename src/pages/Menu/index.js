import React from 'react';
import { Link } from 'react-router-dom';

import foto01 from '../../imagens/001-avatar.svg';
import foto02 from '../../imagens/002-businessman.svg';
import foto03 from '../../imagens/003-sedan-car-front.svg';
import foto04 from '../../imagens/004-currency.svg';
import './styles.css'

import SideBar from '../../components/SideBar'

export default function Menu() {

  return (
    <div class="home">
      <ul id="album-fotos">
        <Link to="/funcionarios">
          <li id="foto01">
            <img src={foto01} />

            <span>Funcionário</span>
          </li>
        </Link>
        <Link to="/clientes">
          <li id="foto02">
            <img src={foto02} />

            <span>Cliente</span>
          </li>
        </Link>
        <Link to="/veiculos">
          <li id="foto03">
            <img src={foto03} />

            <span>Veículo</span>
          </li>
        </Link>
        <Link to="/orcamentos">
          <li id="foto04">
            <img src={foto04} />

            <span>Orçamento</span>
          </li>
        </Link>
      </ul>
    </div>
  );
}