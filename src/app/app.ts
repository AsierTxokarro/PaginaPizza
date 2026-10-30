import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pizza } from './card-pizza/pizza';
import { CardPizza } from './card-pizza/card-pizza';
import { NavBar } from './nav-bar/nav-bar';
import { Pedido } from './pedido/pedido';
import { Buscador } from './servicios/buscador';

@Component({
  imports: [RouterOutlet, CardPizza, NavBar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
private buscador = inject(Buscador);

  actualizarBusqueda(texto: string): void {
    this.buscador.textoBusqueda.set(texto);
  }
}
