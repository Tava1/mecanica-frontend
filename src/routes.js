import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Menu from './pages/Menu';
import ListarClientes from './pages/ListarClientes';
import ListarFuncionarios from './pages/ListarFuncionarios';
import ListarVeiculos from './pages/ListarVeiculos';
import NovoCliente from './pages/NovoCliente';
import NovoFuncionario from './pages/NovoFuncionario';
import NovoVeiculo from './pages/NovoVeiculo';
import NovoOrcamento from './pages/NovoOrcamento';
import ListarOrcamentos from './pages/ListarOrcamentos';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Menu} />
        <Route path="/clientes" exact component={ListarClientes} />
        <Route path="/funcionarios" exact component={ListarFuncionarios} />
        <Route path="/veiculos" exact component={ListarVeiculos} />
        <Route path="/orcamentos" exact component={ListarOrcamentos} />

        <Route path="/novo/cliente" exact component={NovoCliente} />
        <Route path="/novo/funcionario" exact component={NovoFuncionario} />
        <Route path="/novo/veiculo" exact component={NovoVeiculo} />
        <Route path="/novo/orcamento" exact component={NovoOrcamento} />
      </Switch>
    </BrowserRouter>
  );
}