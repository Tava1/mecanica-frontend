import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import './styles.css'

export default function ListarOrcamentos() {

  const [orcamentos, setOrcamentos] = useState([]);

  useEffect(() => {
    api.get('OrcamentoController').then(response => {
      setOrcamentos(response.data);
    })
  })

  return (
    <div>
      <section>
        <ul>
          {orcamentos.map(orcamento => (
            <li key={orcamento.idOrcamento}>
              <strong>Nome c:</strong>
              <p>{orcamento.nomeCliente}</p>
              <strong>CPF CLI:</strong>
              <p>{orcamento.cpfCliente}</p>
              <strong>Nome FUNI:</strong>
              <p>{orcamento.nomeFuncionario}</p>
              <strong>status:</strong>
              <p>{orcamento.status}</p>
              <strong>data:</strong>
              <p>{orcamento.dataOrcamento}</p>
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
}