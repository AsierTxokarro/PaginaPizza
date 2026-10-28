import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-pedido',
  styleUrl: './pedido.css',
  templateUrl: './pedido.html',
})
export class Pedido {
  acumulado = input.required<number>();
}
