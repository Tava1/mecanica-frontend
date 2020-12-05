import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Menu from './pages/Menu';
import ListarClientes from './pages/ListarClientes';
import ListarFuncionarios from './pages/ListarFuncionarios';
import NovoCliente from './pages/NovoCliente';
import NovoFuncionario from './pages/NovoFuncionario';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Menu} />
        <Route path="/clientes" exact component={ListarClientes} />
        <Route path="/funcionarios" exact component={ListarFuncionarios} />
        <Route path="/novo/cliente" exact component={NovoCliente} />
        <Route path="/novo/funcionario" exact component={NovoFuncionario} />
      </Switch>
    </BrowserRouter>
  );
}