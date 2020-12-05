import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import './styles.css'

export default function ListarVeiculos() {

  const [veiculos, setVeiculos] = useState([]);

  useEffect(() => {
    api.get('VeiculoController').then(response => {
      setVeiculos(response.data);
    })
  })

  return (
    <div>
      <section>
        <ul>
          {veiculos.map(veiculo => (
            <li key={veiculo.IdVeiculo}>
              <strong>Marca:</strong>
              <p>{veiculo.marca}</p>
              <strong>Modelo:</strong>
              <p>{veiculo.modelo}</p>
              <strong>Ano:</strong>
              <p>{veiculo.ano}</p>
              <strong>Tipo:</strong>
              <p>{veiculo.tipoVeiculo}</p>
              <strong>Dono:</strong>
              <p>{veiculo.IdCliente}</p>
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
}