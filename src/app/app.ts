import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pizza } from './card-pizza/pizza';
import { CardPizza } from './card-pizza/card-pizza';

@Component({
  imports: [RouterOutlet, CardPizza],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('PaginaPizza');

  tipoPago = 'tarjeta';

 listaPizzas: Pizza[] = [
  {
    id: 1,
    nombre: 'Pizza Margarita',
    precio: 12.99,
    imagen: '/imagenes/pizza-margarita.jpeg',
    ingredientes: [
      'Base de masa de pizza',
      'Tomate San Marzano',
      'Queso mozzarella',
      'Hojas de albahaca fresca',
      'Aceite de oliva virgen extra'
    ]
  },
  {
    id: 2,
    nombre: 'Pizza Hawaiana',
    precio: 14.99,
    imagen: '/imagenes/hawaiana.jpg',
    ingredientes: [
      'Base de masa de pizza',
      'Salsa de tomate',
      'Piña',
      'Jamón cocido',
      'Queso mozzarella'
    ]
  },
  {
    id: 3,
    nombre: 'Pizza Carbonara',
    precio: 15.99,
    imagen: '/imagenes/pizza-carbonara-con-masa-casera.webp',
    ingredientes: [
      'Base de masa de pizza',
      'Nata',
      'Bacon',
      'Champiñones',
      'Cebolla',
      'Queso parmesano'
    ]
  },
  {
    id: 4,
    nombre: 'Pizza Marinara',
    precio: 13.99,
    imagen: '/imagenes/marinara.jpg',
    ingredientes: [
      'Base de masa de pizza',
      'Tomate San Marzano',
      'Ajo en láminas',
      'Orégano seco',
      'Aceite de oliva virgen extra',
      'Albahaca fresca'
    ]
  }
];


}
