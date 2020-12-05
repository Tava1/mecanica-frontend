import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import './styles.css'

export default function ListarFuncionarios() {

  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    api.get('FuncionarioController').then(response => {
      setFuncionarios(response.data);
    })
  })

  return (
    <div>
      <section>
        <ul>
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
        </ul>
      </section>

    </div>
  );
}