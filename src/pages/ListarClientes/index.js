import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import './styles.css'

export default function Menu() {

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    api.get('ClienteController').then(response => {
      setClientes(response.data);
    })
  })

  return (
    <div>
      <section>
        <ul>
          {clientes.map(cliente => (
            <li key={cliente.IdCliente}>
              <strong>Nome:</strong>
              <p>{cliente.nome}</p>
              <strong>cpf:</strong>
              <p>{cliente.cpf}</p>
              <strong>telefone:</strong>
              <p>{cliente.telefone}</p>
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
}