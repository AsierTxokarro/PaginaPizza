import { Routes } from '@angular/router';

import { FormularioPedido } from './formulario-pedido/formulario-pedido';
import { ListadoPizzas } from './listado-pizzas/listado-pizzas';

export const routes: Routes = [
  { path: '', component: ListadoPizzas },
  { path: 'formulario-pedido', component: FormularioPedido },
];