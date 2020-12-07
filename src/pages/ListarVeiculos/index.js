import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Hero from '../../components/Hero';
import Sidebar from '../../components/SideBar';

import './styles.css'

export default function ListarVeiculos() {

  const [veiculos, setVeiculos] = useState([]);

  useEffect(() => {
    api.get('VeiculoController').then(response => {
      setVeiculos(response.data);
    })
  })

  return (
    <div id="page-lista-veiculo">
      <Sidebar page="Listar Veiculos" />
      <div className="page-content">
        <section className="listEmployee">
          <Hero page="Lista de veiculos" />

          <div className="listTable">
            <table className="table">

              <thead>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Ano</th>
                <th>Tipo</th>
                <th>Dono</th>
              </thead>

              {veiculos.map(veiculo => (
                <tbody key={veiculo.IdVeiculo}>
                  <td>{veiculo.marca}</td>
                  <td>{veiculo.modelo}</td>
                  <td>{veiculo.ano}</td>
                  <td>{veiculo.tipoVeiculo}</td>
                  <td>{veiculo.IdCliente}</td>
                </tbody>
              ))}

            </table>
          </div>
        </section>
      </div>
    </div>
  );
}