import { Component, input, output } from '@angular/core';
import { Pizza } from './pizza';
@Component({
  imports: [],
  selector: 'app-card-pizza',
  standalone: true,
  styleUrl: './card-pizza.css',
  templateUrl: './card-pizza.html',
})
export class CardPizza {
pizza = input.required<Pizza>()
anadir = output<number>();

onAnadir(): void {
  this.anadir.emit(1);
}
}

