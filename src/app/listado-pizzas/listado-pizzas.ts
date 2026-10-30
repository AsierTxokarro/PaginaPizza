import { Component, computed, inject, signal } from '@angular/core';
import { Pizza } from '../card-pizza/pizza';
import { Buscador } from '../servicios/buscador';
import { CardPizza } from '../card-pizza/card-pizza';
import { Pedido } from '../pedido/pedido';

@Component({
  imports: [CardPizza,  Pedido],
  selector: 'app-listado-pizzas',
  styleUrl: './listado-pizzas.css',
  templateUrl: './listado-pizzas.html',
})
export class ListadoPizzas {

   acumulado = signal(0);

  onAnadir(cantidad: number): void {
    this.acumulado.update(total => total + cantidad);
  }

  private buscador = inject(Buscador);

textoBusqueda = this.buscador.textoBusqueda;

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

  pizzasFiltradas = computed(() => {

  const texto = this.textoBusqueda().toLowerCase().trim();

  if (!texto) {
    return this.listaPizzas;
  }

  return this.listaPizzas.filter(pizza =>
    pizza.ingredientes.some(ingrediente =>
      ingrediente.toLowerCase().includes(texto)
    )
  );

});
}
