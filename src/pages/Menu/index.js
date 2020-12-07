import React from 'react';

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
        <li id="foto01">
          <img src={foto01}/>
          <a href="../">Funcionário</a>
          <span>Funcionário</span>
        </li>
        <li id="foto02">
          <img src={foto02}/>
          <a href="../">Cliente</a>
          <span>Cliente</span>
        </li>
        <li id="foto03">
          <img src={foto03}/>
          <a href="../">Veículo</a>
          <span>Veículo</span>
        </li>
        <li id="foto04">
          <img src={foto04}/>
          <a href="../">Orçamento</a>
          <span>Orçamento</span>
        </li>
      </ul>
    </div>
  );
}