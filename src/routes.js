import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Menu from './pages/Menu';
import ListarClientes from './pages/ListarClientes';
import NovoCliente from './pages/NovoCliente';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Menu} />
        <Route path="/clientes" exact component={ListarClientes} />
        <Route path="/novo/cliente" exact component={NovoCliente} />
      </Switch>
    </BrowserRouter>
  );
}